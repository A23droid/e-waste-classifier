from flask import Flask, request, jsonify
from ultralytics import YOLO
import torch
import torch.nn as nn
import torch
from PIL import Image

from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# transform = transforms.Compose([
#     transforms.Resize((224,224)),
#     transforms.ToTensor(),
#     transforms.Normalize(mean = [0.485,0.456,0.406], std = [0.229,0.224,0.225])
# ])

# #create model architecure
# model = models.resnet18(pretrained=False)
# num_features = model.fc.in_features
# model.fc = nn.Linear(num_features,10)

# #load model
# model.load_state_dict(torch.load("model/ewaste_model_transfer_learning.pth", map_location = "cpu"))
# model.eval()

model = YOLO("model/yolo/best.pt")

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

#disposal info
disposal_info = {
    "Battery": [
        "Do not dispose of batteries in regular household trash.",
        "Store used batteries in a cool, dry place away from flammable materials.",
        "Take batteries to certified battery recycling or hazardous waste collection centers.",
        "Check for local battery collection drives or retailer take-back programs."
    ],
    "Keyboard": [
        "Do not throw keyboards in general waste bins.",
        "Check if the keyboard can be reused or donated.",
        "Take it to an authorized e-waste recycling center.",
        "Separate removable components if required by local recycling guidelines."
    ],
    "Microwave": [
        "Do not dispose of microwaves in regular trash due to electronic components.",
        "Ensure the appliance is unplugged and safe to transport.",
        "Take it to an authorized appliance or e-waste recycling facility.",
        "Contact local municipal services for large appliance disposal options."
    ],
    "Mobile": [
        "Remove personal data by performing a factory reset.",
        "Remove SIM and memory cards before disposal.",
        "Return the phone through manufacturer or retailer take-back programs.",
        "Take it to a certified e-waste recycling center."
    ],
    "Mouse": [
        "Do not dispose of electronic accessories in regular trash.",
        "Check if the mouse is still usable and can be donated.",
        "Take it to an authorized e-waste recycling center.",
        "Group with other small electronics for efficient recycling."
    ],
    "PCB": [
        "Printed Circuit Boards contain hazardous materials—handle carefully.",
        "Do not attempt to dismantle without proper safety equipment.",
        "Dispose through specialized e-waste recycling facilities.",
        "Ensure it is handled by certified recycling professionals."
    ],
    "Player": [
        "Avoid disposing of electronic media players in general waste.",
        "Check if the device can be reused or refurbished.",
        "Take it to an authorized electronics recycling center.",
        "Look for brand-specific recycling or exchange programs."
    ],
    "Printer": [
        "Remove ink or toner cartridges before disposal.",
        "Recycle cartridges separately if possible.",
        "Take the printer to an e-waste recycling center.",
        "Check manufacturer take-back or recycling programs."
    ],
    "Television": [
        "Do not dispose of TVs in regular trash due to hazardous components.",
        "Handle carefully to avoid screen damage and injury.",
        "Take it to a certified e-waste recycling facility.",
        "Use municipal pickup services for large electronics if available."
    ],
    "Washing Machine": [
        "Disconnect water and power supply before disposal.",
        "Check if the appliance can be repaired or reused.",
        "Use authorized appliance recycling or scrap collection services.",
        "Contact local authorities for bulk waste pickup if needed."
    ]
}
                      

@app.route("/predict", methods = ["POST"])
def predict():
    try:
        if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400
        
        image_file = request.files["image"]
        image = Image.open(image_file).convert("RGB")
        # image_tensor = transform(image)
        # image_tensor = image_tensor.unsqueeze(0)

        # #predicting
        # with torch.no_grad():
        #     outputs = model(image_tensor)
        #     probabilities = F.softmax(outputs,dim=1)
        #     confidence, predicted_class = torch.max(probabilities, 1)

        # predicted_label = class_names[predicted_class.item()]
        # disposal_text = disposal_info[predicted_label]

        results = model(image)
        result = results[0] 

        if hasattr(result, 'probs') and result.probs is not None:
            class_index = result.probs.top1
            confidence_value = float(result.probs.top1conf)
        else:
            if len(result.boxes)==0 :
                return jsonify({'error': 'No e-waste detected in image'}),400
            class_index = int(result.boxes[0].cls[0].item())
            confidence_value = float(result.boxes[0].conf[0].item())

        if confidence_value < 0.50:
            return jsonify({"error": "Image does not appear to be recognized e-waste"}), 400


        predicted_label = class_names[class_index]
        disposal_text =  disposal_info[predicted_label]

        print("Predicted: ", predicted_label)
        print("Confidence: ", confidence_value)

        return jsonify({
            "prediction": predicted_label,
            "confidence": float(confidence_value),
            "disposal": disposal_text
        })
    except Exception as e:
        print("Error during prediction:", str(e))
        return jsonify({"error": str(e)}), 500

@app.route("/")
def home():
    return jsonify({"status": "Ewaste classifier backend running"})

if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 7860))
    app.run(host="0.0.0.0", port=port, debug=False)
