import { useState, useRef } from 'react';

export default function Classify() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isClassifying, setIsClassifying] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const classifyImage = async () => {
    setIsClassifying(true);
    setResult(null);

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("https://pratyush8575-e-waste-classifier.hf.space/predict", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      setResult({
        type: data.prediction,
        confidence: Math.round(data.confidence * 100),
        category: "E-Waste",
        recommendations: [data.disposal]
      });

    } catch (error) {
      console.error("Error classifying image:", error);
      alert("Failed to classify image. Please try again.");
    } finally {
      setIsClassifying(false);
    }
  };

  const reset = () => {
    setSelectedFile(null);
    setPreview(null);
    setResult(null);
    setIsClassifying(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const wasteCategories = [
    { 
      name: 'Recyclable', 
      description: 'Materials that can be processed and reused',
      examples: 'Plastic containers, paper, cardboard, metal cans, glass bottles'
    },
    { 
      name: 'Organic', 
      description: 'Biodegradable waste suitable for composting',
      examples: 'Food scraps, yard waste, coffee grounds, tea bags'
    },
    { 
      name: 'Hazardous', 
      description: 'Items requiring special disposal procedures',
      examples: 'Batteries, electronics, paint, chemicals, light bulbs'
    },
    { 
      name: 'General', 
      description: 'Non-recyclable, non-hazardous materials',
      examples: 'Contaminated items, mixed materials, certain plastics'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Waste Classification
        </h1>
        <p className="text-lg text-gray-600">
          Upload an image to identify the waste category and receive disposal recommendations
        </p>
      </div>

      {/* Main Classification Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Image</h2>
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-emerald-400 transition-colors cursor-pointer bg-gray-50"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            
            <p className="text-base font-medium text-gray-900 mb-2">
              Drop your image here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>

          {preview && (
            <div className="mt-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              {!result && !isClassifying && (
                <div className="mt-4 space-y-3">
                  <button
                    onClick={classifyImage}
                    className="w-full px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
                  >
                    Classify Image
                  </button>
                  <button
                    onClick={reset}
                    className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Classification Result</h2>
          
          {!preview && !isClassifying && !result && (
            <div className="border border-gray-200 rounded-lg p-12 text-center bg-gray-50">
              <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-gray-500">
                Upload an image to see classification results
              </p>
            </div>
          )}

          {isClassifying && (
            <div className="border border-gray-200 rounded-lg p-12 text-center bg-white">
              <div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
              <p className="text-gray-600 font-medium">Analyzing image...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
            </div>
          )}

          {result && (
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Detected Type</p>
                    <h3 className="text-2xl font-bold text-gray-900">{result.type}</h3>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
                    {result.category}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Confidence Score</span>
                    <span className="font-semibold text-gray-900">{result.confidence}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Disposal Recommendations</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                onClick={reset}
                className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
              >
                Classify Another Image
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Waste Categories Guide */}
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Waste Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wasteCategories.map((category, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-emerald-200 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {category.description}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Examples:</span> {category.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}