import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const Results = () => {
  const [activeTab, setActiveTab] = useState('comparison-table');
  const modelData = [
    {
      model: 'GA + Gradient Boosting',
      accuracy: 0.82,
      rocAuc: 0.90,
      precision0: 0.81,
      precision1: 0.83,
      f1Score0: 0.79,
      f1Score1: 0.84
    },
    {
      model: 'GA + XGBoost',
      accuracy: 0.86,
      rocAuc: 0.91,
      precision0: 0.85,
      precision1: 0.87,
      f1Score0: 0.84,
      f1Score1: 0.87
    },
    {
      model: 'GA + Logistic Regression',
      accuracy: 0.85,
      rocAuc: 0.91,
      precision0: 0.88,
      precision1: 0.83,
      f1Score0: 0.82,
      f1Score1: 0.87
    },
    {
      model: 'GA + SVM',
      accuracy: 0.85,
      rocAuc: 0.92,
      precision0: 0.91,
      precision1: 0.82,
      f1Score0: 0.82,
      f1Score1: 0.88
    },
    {
      model: 'LASSO + Gradient Boosting',
      accuracy: 0.84,
      rocAuc: 0.90,
      precision0: 0.82,
      precision1: 0.85,
      f1Score0: 0.81,
      f1Score1: 0.85
    },
    {
      model: 'LASSO + XGBoost',
      accuracy: 0.86,
      rocAuc: 0.89,
      precision0: 0.88,
      precision1: 0.85,
      f1Score0: 0.84,
      f1Score1: 0.88
    },
    {
      model: 'LASSO + Logistic Regression',
      accuracy: 0.82,
      rocAuc: 0.92,
      precision0: 0.84,
      precision1: 0.81,
      f1Score0: 0.79,
      f1Score1: 0.85
    },
    {
      model: 'LASSO + SVM',
      accuracy: 0.85,
      rocAuc: 0.92,
      precision0: 0.88,
      precision1: 0.84,
      f1Score0: 0.83,
      f1Score1: 0.87
    }
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Confusion matrix data for each model
  const confusionMatrices = {
    'GA + Gradient Boosting': {
      trueNegative: 82,
      falsePositive: 19,
      falseNegative: 17,
      truePositive: 82
    },
    'GA + XGBoost': {
      trueNegative: 85,
      falsePositive: 15,
      falseNegative: 13,
      truePositive: 87
    },
    'GA + Logistic Regression': {
      trueNegative: 88,
      falsePositive: 12,
      falseNegative: 17,
      truePositive: 83
    },
    'GA + SVM': {
      trueNegative: 91,
      falsePositive: 9,
      falseNegative: 18,
      truePositive: 82
    },
    'LASSO + Gradient Boosting': {
      trueNegative: 82,
      falsePositive: 18,
      falseNegative: 15,
      truePositive: 85
    },
    'LASSO + XGBoost': {
      trueNegative: 88,
      falsePositive: 12,
      falseNegative: 15,
      truePositive: 85
    },
    'LASSO + Logistic Regression': {
      trueNegative: 84,
      falsePositive: 16,
      falseNegative: 19,
      truePositive: 81
    },
    'LASSO + SVM': {
      trueNegative: 88,
      falsePositive: 12,
      falseNegative: 16,
      truePositive: 84
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Research Results
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h1>
          <p className="text-xl text-gray-600">Comparative Analysis of GA and LASSO-based Models</p>
        </div>

        {/* Enhanced In-page Navigation */}
        <nav className="bg-white shadow-lg rounded-xl mb-12 sticky top-4 z-50 backdrop-blur-lg bg-opacity-90">
          <div className="max-w-7xl mx-auto">
            <ul className="flex items-center justify-between px-4 py-3 space-x-4 overflow-x-auto">
              {[
                { id: 'comparison-table', label: 'Overview' },
                { id: 'accuracy', label: 'Accuracy' },
                { id: 'roc-auc', label: 'ROC-AUC' },
                { id: 'precision', label: 'Precision' },
                { id: 'f1-score', label: 'F1-Score' },
                { id: 'confusion-matrices', label: 'Confusion Matrices' }
              ].map(({ id, label }) => (
                <li key={id} className="flex-shrink-0">
                  <button 
                    onClick={() => scrollToSection(id)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Model Comparison Table */}
        <section id="comparison-table" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500">
              <h2 className="text-2xl font-bold text-white">Model Performance Comparison</h2>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Accuracy</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ROC AUC</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prec.(0)</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Prec.(1)</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">F1(0)</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">F1(1)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {modelData.map((model, idx) => (
                    <tr 
                      key={idx} 
                      className={`
                        ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        transition-colors duration-200 hover:bg-blue-50
                      `}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.model}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.accuracy.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.rocAuc.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.precision0.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.precision1.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.f1Score0.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.f1Score1.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Chart Sections with Enhanced Styling */}
        {['accuracy', 'roc-auc', 'precision', 'f1-score'].map((metric, index) => (
          <section 
            key={metric} 
            id={metric} 
            className="mb-16 scroll-mt-24"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500">
                <h2 className="text-2xl font-bold text-white">
                  {metric === 'accuracy' && 'Model Accuracy'}
                  {metric === 'roc-auc' && 'ROC-AUC Score'}
                  {metric === 'precision' && 'Precision Scores'}
                  {metric === 'f1-score' && 'F1-Scores'}
                </h2>
              </div>
              <div className="p-6">
                <div className="h-[500px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart 
                      data={modelData} 
                      margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                      <XAxis 
                        dataKey="model" 
                        angle={-45} 
                        textAnchor="end" 
                        height={80} 
                        interval={0}
                        tick={{ fill: '#4B5563' }}
                      />
                      <YAxis 
                        domain={
                          metric === 'roc-auc' ? [0.85, 0.95] :
                          metric === 'precision' ? [0.75, 0.95] :
                          [0.75, 0.9]
                        }
                        tick={{ fill: '#4B5563' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          borderRadius: '0.5rem',
                          border: 'none',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      {metric === 'accuracy' && (
                        <Bar dataKey="accuracy" fill="#3B82F6" name="Accuracy" />
                      )}
                      {metric === 'roc-auc' && (
                        <Bar dataKey="rocAuc" fill="#8B5CF6" name="ROC-AUC" />
                      )}
                      {metric === 'precision' && (
                        <>
                          <Bar dataKey="precision0" fill="#10B981" name="Class 0" />
                          <Bar dataKey="precision1" fill="#F59E0B" name="Class 1" />
                        </>
                      )}
                      {metric === 'f1-score' && (
                        <>
                          <Bar dataKey="f1Score0" fill="#EC4899" name="Class 0" />
                          <Bar dataKey="f1Score1" fill="#8B5CF6" name="Class 1" />
                        </>
                      )}
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Confusion Matrices with Enhanced Styling */}
        <section id="confusion-matrices" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
            <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500">
              <h2 className="text-2xl font-bold text-white">Confusion Matrices</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(confusionMatrices).map(([model, matrix]) => (
                  <div 
                    key={model} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="px-4 py-3 bg-gradient-to-r from-gray-100 to-gray-200">
                      <h3 className="text-lg font-semibold text-gray-800">{model}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                        <div className="bg-green-100 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                          <div className="font-bold text-green-800 mb-1">True Negative</div>
                          <div className="text-2xl font-bold text-green-600">{matrix.trueNegative}</div>
                        </div>
                        <div className="bg-red-100 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                          <div className="font-bold text-red-800 mb-1">False Positive</div>
                          <div className="text-2xl font-bold text-red-600">{matrix.falsePositive}</div>
                        </div>
                        <div className="bg-red-100 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                          <div className="font-bold text-red-800 mb-1">False Negative</div>
                          <div className="text-2xl font-bold text-red-600">{matrix.falseNegative}</div>
                        </div>
                        <div className="bg-green-100 rounded-lg p-4 text-center hover:shadow-lg transition-shadow duration-300">
                          <div className="font-bold text-green-800 mb-1">True Positive</div>
                          <div className="text-2xl font-bold text-green-600">{matrix.truePositive}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results; 