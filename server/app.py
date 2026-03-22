from flask import Flask, request, jsonify

import torch
import torch.nn as nn
import torch
from PIL import Image
from torchvision import transforms
from torchvision import models
import torch.nn.functional as F
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

transform = transforms.Compose([
    transforms.Resize((224,224)),
    transforms.ToTensor(),
    transforms.Normalize(mean = [0.485,0.456,0.406], std = [0.229,0.224,0.225])
])

#create model architecure
model = models.resnet18(pretrained=False)
num_features = model.fc.in_features
model.fc = nn.Linear(num_features,10)

#load model
model.load_state_dict(torch.load("model/ewaste_model_transfer_learning.pth", map_location = "cpu"))
model.eval()

#declare class names
class_names = [
    "Battery",
    "Keyboard",
    "Microwave",
    "Mobile",
    "Mouse",
    "PCB",
    "Player",
    "Printer",
    "Television",
    "Washing Machine"
]

disposal_info = {
    "Battery": "Dispose at a certified battery recycling or hazardous waste collection center.",
    "Keyboard": "Take to an authorized e-waste recycling center.",
    "Microwave": "Dispose through an authorized appliance or e-waste recycling facility.",
    "Mobile": "Return to a manufacturer take-back program or certified e-waste recycler.",
    "Mouse": "Take to an authorized e-waste recycling center.",
    "PCB": "Handle through a specialized e-waste recycling facility.",
    "Player": "Dispose through an authorized electronics recycling center.",
    "Printer": "Take to an e-waste recycling center or manufacturer collection program.",
    "Television": "Dispose through a certified e-waste recycling facility.",
    "Washing Machine": "Use an authorized appliance recycling or e-waste collection service."
}
                      

@app.route("/predict", methods = ["POST"])
def predict():
    try:
        if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400
        
        image_file = request.files["image"]
        image = Image.open(image_file).convert("RGB")
        image_tensor = transform(image)
        image_tensor = image_tensor.unsqueeze(0)

        #predicting
        with torch.no_grad():
            outputs = model(image_tensor)
            probabilities = F.softmax(outputs,dim=1)
            confidence, predicted_class = torch.max(probabilities, 1)

        predicted_label = class_names[predicted_class.item()]
        disposal_text = disposal_info[predicted_label]

        print("Predicted: ", predicted_label)
        print("Confidence: ", confidence.item())

        return jsonify({
            "prediction": predicted_label,
            "confidence": float(confidence.item()),
            "disposal": disposal_text
        })
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route("/")
def home():
    return jsonify({"status": "Ewaste classifier backend running"})

if __name__ == "__main__":
    app.run(debug=False)
