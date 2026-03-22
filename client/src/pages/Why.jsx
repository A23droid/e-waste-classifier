// Why.jsx
import React from 'react';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

export default function Why() {
  const [selectedModel, setSelectedModel] = useState('all');
  const [showTraining, setShowTraining] = useState(false);

  // Mock training data for all 4 models
  const trainingData = [
    {
      epoch: 1,
      modelA_train: 0.45, modelA_val: 0.43,
      modelB_train: 0.52, modelB_val: 0.50,
      modelC_train: 0.48, modelC_val: 0.46,
      modelD_train: 0.51, modelD_val: 0.49
    },
    {
      epoch: 2,
      modelA_train: 0.48, modelA_val: 0.46,
      modelB_train: 0.61, modelB_val: 0.58,
      modelC_train: 0.58, modelC_val: 0.56,
      modelD_train: 0.61, modelD_val: 0.59
    },
    {
      epoch: 3,
      modelA_train: 0.51, modelA_val: 0.49,
      modelB_train: 0.68, modelB_val: 0.64,
      modelC_train: 0.66, modelC_val: 0.64,
      modelD_train: 0.69, modelD_val: 0.68
    },
    {
      epoch: 4,
      modelA_train: 0.53, modelA_val: 0.51,
      modelB_train: 0.74, modelB_val: 0.69,
      modelC_train: 0.72, modelC_val: 0.70,
      modelD_train: 0.76, modelD_val: 0.75
    },
    {
      epoch: 5,
      modelA_train: 0.55, modelA_val: 0.52,
      modelB_train: 0.79, modelB_val: 0.73,
      modelC_train: 0.77, modelC_val: 0.75,
      modelD_train: 0.81, modelD_val: 0.80
    },
    {
      epoch: 6,
      modelA_train: 0.56, modelA_val: 0.53,
      modelB_train: 0.83, modelB_val: 0.75,
      modelC_train: 0.81, modelC_val: 0.78,
      modelD_train: 0.85, modelD_val: 0.84
    },
    {
      epoch: 7,
      modelA_train: 0.57, modelA_val: 0.54,
      modelB_train: 0.86, modelB_val: 0.76,
      modelC_train: 0.84, modelC_val: 0.81,
      modelD_train: 0.88, modelD_val: 0.87
    },
    {
      epoch: 8,
      modelA_train: 0.58, modelA_val: 0.54,
      modelB_train: 0.88, modelB_val: 0.76,
      modelC_train: 0.86, modelC_val: 0.83,
      modelD_train: 0.90, modelD_val: 0.89
    },
    {
      epoch: 9,
      modelA_train: 0.59, modelA_val: 0.55,
      modelB_train: 0.90, modelB_val: 0.75,
      modelC_train: 0.88, modelC_val: 0.84,
      modelD_train: 0.92, modelD_val: 0.91
    },
    {
      epoch: 10,
      modelA_train: 0.60, modelA_val: 0.55,
      modelB_train: 0.92, modelB_val: 0.74,
      modelC_train: 0.89, modelC_val: 0.85,
      modelD_train: 0.93, modelD_val: 0.92
    },
    {
      epoch: 11,
      modelA_train: 0.60, modelA_val: 0.56,
      modelB_train: 0.93, modelB_val: 0.73,
      modelC_train: 0.91, modelC_val: 0.85,
      modelD_train: 0.94, modelD_val: 0.93
    },
    {
      epoch: 12,
      modelA_train: 0.61, modelA_val: 0.56,
      modelB_train: 0.94, modelB_val: 0.72,
      modelC_train: 0.92, modelC_val: 0.86,
      modelD_train: 0.95, modelD_val: 0.93
    },
    {
      epoch: 13,
      modelA_train: 0.61, modelA_val: 0.56,
      modelB_train: 0.95, modelB_val: 0.71,
      modelC_train: 0.93, modelC_val: 0.86,
      modelD_train: 0.95, modelD_val: 0.94
    },
    {
      epoch: 14,
      modelA_train: 0.62, modelA_val: 0.57,
      modelB_train: 0.96, modelB_val: 0.70,
      modelC_train: 0.93, modelC_val: 0.86,
      modelD_train: 0.96, modelD_val: 0.94
    },
    {
      epoch: 15,
      modelA_train: 0.62, modelA_val: 0.57,
      modelB_train: 0.97, modelB_val: 0.69,
      modelC_train: 0.94, modelC_val: 0.86,
      modelD_train: 0.96, modelD_val: 0.94
    },
    {
      epoch: 16,
      modelA_train: 0.63, modelA_val: 0.57,
      modelB_train: 0.97, modelB_val: 0.68,
      modelC_train: 0.95, modelC_val: 0.85,
      modelD_train: 0.97, modelD_val: 0.94
    },
    {
      epoch: 17,
      modelA_train: 0.63, modelA_val: 0.57,
      modelB_train: 0.98, modelB_val: 0.67,
      modelC_train: 0.95, modelC_val: 0.85,
      modelD_train: 0.97, modelD_val: 0.94
    },
    {
      epoch: 18,
      modelA_train: 0.63, modelA_val: 0.58,
      modelB_train: 0.98, modelB_val: 0.67,
      modelC_train: 0.96, modelC_val: 0.85,
      modelD_train: 0.97, modelD_val: 0.94
    },
    {
      epoch: 19,
      modelA_train: 0.64, modelA_val: 0.58,
      modelB_train: 0.99, modelB_val: 0.66,
      modelC_train: 0.96, modelC_val: 0.84,
      modelD_train: 0.98, modelD_val: 0.94
    },
    {
      epoch: 20,
      modelA_train: 0.64, modelA_val: 0.58,
      modelB_train: 0.99, modelB_val: 0.65,
      modelC_train: 0.97, modelC_val: 0.84,
      modelD_train: 0.98, modelD_val: 0.94
    }
  ];

  // Model configuration
  const models = {
    modelA: {
      name: 'Model A',
      fullName: 'Simple CNN',
      color: '#ef4444',
      description: 'Basic 2-layer CNN architecture',
      finalVal: 0.58,
      finalTrain: 0.64,
      status: 'Underfitting'
    },
    modelB: {
      name: 'Model B',
      fullName: 'Deep CNN',
      color: '#f97316',
      description: '6-layer CNN without regularization',
      finalVal: 0.65,
      finalTrain: 0.99,
      status: 'Severe Overfitting',
      overfittingEpoch: 8
    },
    modelC: {
      name: 'Model C',
      fullName: 'ResNet-18',
      color: '#3b82f6',
      description: 'ResNet with 0.3 dropout',
      finalVal: 0.84,
      finalTrain: 0.97,
      status: 'Moderate Overfitting'
    },
    modelD: {
      name: 'Model D',
      fullName: 'EfficientNet-B0',
      color: '#10b981',
      description: 'EfficientNet with data augmentation',
      finalVal: 0.94,
      finalTrain: 0.98,
      status: 'Optimal (Selected)'
    }
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm font-semibold text-gray-900 mb-2">
            Epoch {payload[0].payload.epoch}
          </p>
          <div className="space-y-1">
            {payload.map((item, index) => {
              const isTraining = item.dataKey.includes('_train');
              const modelKey = item.dataKey.split('_')[0];
              const label = isTraining ? 'Training' : 'Validation';
              
              return (
                <p key={index} className="text-sm flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: models[modelKey].color }}></span>
                    <span className="text-gray-700">{models[modelKey].name} ({label}):</span>
                  </span>
                  <span className="font-semibold">{(item.value * 100).toFixed(1)}%</span>
                </p>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  // Determine which lines to show based on selection
  const getVisibleLines = () => {
    if (selectedModel === 'all') {
      return ['modelA', 'modelB', 'modelC', 'modelD'];
    }
    return [selectedModel];
  };

  const visibleModels = getVisibleLines();

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why This Model?
        </h1>
        <p className="text-lg text-gray-600">
          We trained four different CNN architectures to classify e-waste images. 
          By comparing their validation accuracy curves, you can see why {models.modelD.fullName} (Model D) 
          outperforms all other architectures with the highest validation accuracy and best generalization.
        </p>
      </div>

      {/* Controls and Chart */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Model Performance Comparison</h2>
          
          <div className="flex items-center gap-4">
            {/* Training Toggle */}
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={showTraining}
                onChange={(e) => setShowTraining(e.target.checked)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span>Show Training</span>
            </label>

            {/* Model Dropdown */}
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="all">All Models</option>
              {Object.entries(models).map(([key, model]) => (
                <option key={key} value={key}>{model.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={450}>
          <LineChart data={trainingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="epoch" 
              label={{ value: 'Epoch', position: 'insideBottom', offset: -5 }}
              stroke="#6b7280"
            />
            <YAxis 
              domain={[0.4, 1]}
              tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
              label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }}
              stroke="#6b7280"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              height={36}
              iconType="line"
            />

            {/* Reference line for Model B overfitting - only show when not displaying training curves to avoid clash */}
            {!showTraining && (selectedModel === 'all' || selectedModel === 'modelB') && (
              <ReferenceLine
                x={8}
                stroke="#dc2626"
                strokeDasharray="3 3"
                label={{
                  value: `${models.modelB.name} overfitting begins`,
                  position: 'top',
                  fill: '#dc2626',
                  fontSize: 11
                }}
              />
            )}

            {/* Validation lines */}
            {visibleModels.map((modelKey) => (
              <Line
                key={`${modelKey}_val`}
                type="monotone"
                dataKey={`${modelKey}_val`}
                name={`${models[modelKey].name} (Validation)`}
                stroke={models[modelKey].color}
                strokeWidth={modelKey === 'modelD' ? 3 : 2}
                dot={false}
                activeDot={{ r: 6 }}
                isAnimationActive={true}
                animationDuration={1500}
                animationEasing="ease-in-out"
              />
            ))}

            {/* Training lines (shown when toggled) */}
            {showTraining && visibleModels.map((modelKey) => (
              <Line
                key={`${modelKey}_train`}
                type="monotone"
                dataKey={`${modelKey}_train`}
                name={`${models[modelKey].name} (Training)`}
                stroke={models[modelKey].color}
                strokeWidth={1.5}
                strokeDasharray="5 5"
                dot={false}
                opacity={0.6}
                isAnimationActive={true}
                animationDuration={1500}
                animationEasing="ease-in-out"
              />
            ))}
          </LineChart>
        </ResponsiveContainer>

        {/* Chart Insight */}
        {selectedModel === 'all' && (
          <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-emerald-900 mb-1">Key Observation</p>
                <p className="text-sm text-emerald-800">
                  {models.modelD.name} (green line) clearly outperforms all other models, maintaining the highest validation accuracy 
                  throughout training and reaching {(models.modelD.finalVal * 100).toFixed(0)}% by epoch 13. Notice how it stays stable while {models.modelB.name} (orange) 
                  peaks early then declines due to overfitting.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Model Details - Single Model View */}
      {selectedModel !== 'all' && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{models[selectedModel].name} - {models[selectedModel].fullName}</h2>
              <p className="text-gray-600">{models[selectedModel].description}</p>
            </div>
            {selectedModel === 'modelD' && (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Selected Model</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Final Training Accuracy</p>
              <p className="text-2xl font-bold text-gray-900">
                {(models[selectedModel].finalTrain * 100).toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Final Validation Accuracy</p>
              <p className="text-2xl font-bold text-gray-900">
                {(models[selectedModel].finalVal * 100).toFixed(1)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                selectedModel === 'modelD'
                  ? 'bg-emerald-100 text-emerald-800'
                  : models[selectedModel].status.includes('Severe')
                  ? 'bg-red-100 text-red-800'
                  : models[selectedModel].status.includes('Moderate')
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {models[selectedModel].status}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Info Panels */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Understanding Overfitting */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding Overfitting</h3>
          <p className="text-gray-600 text-sm mb-3">
            Overfitting occurs when a model learns the training data too well, including its noise and peculiarities, 
            rather than learning generalizable patterns. This results in high training accuracy but poor validation accuracy.
          </p>
          <p className="text-gray-600 text-sm">
            In the chart, you can see {models.modelB.name}'s training accuracy climbing to {(models.modelB.finalTrain * 100).toFixed(0)}% while its validation accuracy 
            peaks at {(models.modelB.finalVal * 100).toFixed(0)}% then declines. This divergence is a clear sign of overfitting.
          </p>
        </div>

        {/* Why Model D */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Why {models.modelD.name} Was Selected</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Highest validation accuracy:</span> Achieves {(models.modelD.finalVal * 100).toFixed(0)}% validation accuracy, 
                outperforming all other models.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">Excellent generalization:</span> Training and validation curves 
                remain closely aligned throughout all 20 epochs.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700">
                <span className="font-semibold">No overfitting:</span> Maintains stable performance without 
                the validation degradation seen in {models.modelB.name} and {models.modelC.name}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Model Comparison Summary</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Architecture
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Validation Acc.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Training Acc.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Object.entries(models).map(([key, model]) => (
                <tr 
                  key={key}
                  className={key === 'modelD' ? 'bg-emerald-50' : 'hover:bg-gray-50'}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: model.color }}></div>
                      <span className="font-medium text-gray-900">{model.name}</span>
                      {key === 'modelD' && (
                        <span className="px-2 py-0.5 bg-emerald-600 text-white text-xs rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {model.fullName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-lg font-bold ${key === 'modelD' ? 'text-emerald-600' : 'text-gray-900'}`}>
                      {(model.finalVal * 100).toFixed(1)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {(model.finalTrain * 100).toFixed(1)}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      model.status.includes('Optimal')
                        ? 'bg-emerald-100 text-emerald-800'
                        : model.status.includes('Severe')
                        ? 'bg-red-100 text-red-800'
                        : model.status.includes('Moderate')
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}