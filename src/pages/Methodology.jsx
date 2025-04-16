import { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const Methodology = () => {
  const featureImportanceData = [
    { feature: 'oldpeak', importance: 0.16 },
    { feature: 'cp_atypical angina', importance: 0.15 },
    { feature: 'age', importance: 0.14 },
    { feature: 'dataset_Switzerland', importance: 0.11 },
    { feature: 'ca', importance: 0.10 },
    { feature: 'cp_non-anginal', importance: 0.09 },
    { feature: 'slope_flat', importance: 0.07 },
    { feature: 'trestbps', importance: 0.06 },
    { feature: 'sex_Male', importance: 0.05 },
    { feature: 'thal_reversable defect', importance: 0.04 },
    { feature: 'thal_normal', importance: 0.04 },
    { feature: 'cp_typical angina', importance: 0.02 },
    { feature: 'fbs_True', importance: 0.01 }
  ];

  const lassoFeatureData = [
    { feature: 'cp_atypical angina', coefficient: 0.95 },
    { feature: 'dataset_Switzerland', coefficient: 0.65 },
    { feature: 'sex_Male', coefficient: 0.45 },
    { feature: 'oldpeak', coefficient: 0.40 },
    { feature: 'age', coefficient: 0.22 },
    { feature: 'trestbps', coefficient: 0.12 },
    { feature: 'chol', coefficient: 0.18 },
    { feature: 'thalch', coefficient: -0.08 },
    { feature: 'dataset_Hungary', coefficient: -0.05 },
    { feature: 'dataset_VA_Long Beach', coefficient: -0.05 },
    { feature: 'cp_typical angina', coefficient: -0.35 },
    { feature: 'cp_non-anginal', coefficient: -0.38 },
    { feature: 'restecg_normal', coefficient: -0.12 },
    { feature: 'restecg_st-t abnormality', coefficient: -0.05 },
    { feature: 'exang_True', coefficient: 0.42 },
    { feature: 'slope_flat', coefficient: -0.08 },
    { feature: 'slope_upsloping', coefficient: -0.15 },
    { feature: 'thal_normal', coefficient: -0.12 },
    { feature: 'thal_reversable defect', coefficient: 0.22 }
  ];

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Research Methodology</h1>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="section-title">Research Approach</h2>
          <div className="card">
            <div className="flex flex-col items-center mb-8">
              <img 
                src="/project.drawio.png" 
                alt="Research Methodology Diagram" 
                className="max-w-4xl w-full h-auto mb-8 rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 text-gray-600">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Research Process Overview</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">1. Data Collection and Preprocessing</h4>
                  <p>Starting with the UCI Dataset containing 920 subjects and 14 features, we performed comprehensive data preprocessing, resulting in 735 remaining subjects after cleaning and standardization.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">2. Data Split</h4>
                  <p>The preprocessed dataset was split into:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Training data (80% - for model training and validation)</li>
                    <li>Test data (20% - for final model evaluation)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">3. Feature Selection Methods</h4>
                  <p>We implemented two distinct feature selection approaches:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li><span className="font-semibold">Genetic Algorithm:</span> An evolutionary approach that selects optimal feature combinations through iterations of selection, crossover, and mutation</li>
                    <li><span className="font-semibold">LASSO:</span> A regularization technique that performs feature selection by shrinking less important feature coefficients to zero</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">4. Classification Methods</h4>
                  <p>The selected features were used to train four different classification models:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Gradient Boosting</li>
                    <li>XGBoost</li>
                    <li>Logistic Regression</li>
                    <li>SVM (Support Vector Machine)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">5. Model Evaluation</h4>
                  <p>Models were evaluated using 5-fold cross-validation with the following key findings:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li><span className="font-semibold">Best Accuracy:</span> LASSO + XGBoost combination achieved the highest accuracy</li>
                    <li><span className="font-semibold">Best ROC-AUC Score:</span> Genetic Algorithm + Logistic Regression showed superior performance in ROC-AUC metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Collection */}
        <section className="mb-16">
          <h2 className="section-title">Data Collection and Preprocessing</h2>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Dataset</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Source and size of the dataset : 920 subjects and 14 features</li>
              <li>Data cleaning and preprocessing steps : after cleaning 736 subjects remains</li>
              <li>Feature selection criteria : Genetic Algorithm and LASSO</li>
              <li>Data splitting for training and testing : 80% for Training and 20% for Testing</li>
            </ul>
          </div>
        </section>

        {/* Genetic Algorithm Implementation */}
        <section className="mb-16">
          <h2 className="section-title">Genetic Algorithm Feature Selection</h2>
          <div className="card">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Selected Features and Their Importance</h3>
                <p className="text-gray-600 mb-6">
                  The Genetic Algorithm identified and selected the following features as most significant for cardiovascular disease detection, 
                  ranked by their importance scores
                </p>
              </div>

              <div className="h-[600px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={featureImportanceData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      type="number"
                      domain={[0, 0.18]}
                      tickFormatter={(value) => value.toFixed(2)}
                      label={{ value: 'Importance Score', position: 'bottom', offset: 0 }}
                    />
                    <YAxis
                      dataKey="feature"
                      type="category"
                      tick={{ fill: '#4B5563' }}
                      width={140}
                    />
                    <Tooltip
                      formatter={(value) => value.toFixed(3)}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '0.5rem',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar
                      dataKey="importance"
                      fill="#3B82F6"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Findings:</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><span className="font-semibold">Top Features:</span> oldpeak, cp_atypical angina, and age were identified as the most significant predictors</li>
                  <li><span className="font-semibold">Clinical Relevance:</span> The selected features align with medical knowledge about cardiovascular disease risk factors</li>
                  <li><span className="font-semibold">Feature Reduction:</span> The GA successfully reduced the feature set while maintaining predictive power</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* LASSO Implementation */}
        <section className="mb-16">
          <h2 className="section-title">LASSO Feature Selection</h2>
          <div className="card">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Selected Features and Their Coefficients</h3>
                <p className="text-gray-600 mb-6">
                  LASSO (Least Absolute Shrinkage and Selection Operator) performed feature selection by assigning coefficients to features, 
                  with values closer to zero indicating less importance. The following visualization shows the features selected by LASSO 
                  and their corresponding coefficient values.
                </p>
              </div>

              <div className="h-[800px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={lassoFeatureData}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                      type="number"
                      domain={[-1, 1]}
                      tickFormatter={(value) => value.toFixed(2)}
                      label={{ value: 'Coefficient Value', position: 'bottom', offset: 0 }}
                    />
                    <YAxis
                      dataKey="feature"
                      type="category"
                      tick={{ fill: '#4B5563' }}
                      width={140}
                    />
                    <Tooltip
                      formatter={(value) => value.toFixed(3)}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '0.5rem',
                        border: 'none',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Bar
                      dataKey="coefficient"
                      fill={(data) => data.coefficient >= 0 ? '#3B82F6' : '#EF4444'}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Findings:</h4>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><span className="font-semibold">Strongest Positive Predictors:</span> cp_atypical angina, dataset_Switzerland, and sex_Male showed the strongest positive associations</li>
                  <li><span className="font-semibold">Negative Associations:</span> cp_typical angina and cp_non-anginal showed notable negative correlations</li>
                  <li><span className="font-semibold">Feature Selection:</span> LASSO effectively identified both positive and negative predictors while reducing less important features to near-zero coefficients</li>
                  <li><span className="font-semibold">Clinical Interpretation:</span> The coefficients provide insights into both risk factors and protective factors for cardiovascular disease</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Metrics */}
        <section className="mb-16">
          <h2 className="section-title">Evaluation Metrics</h2>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Performance Measures</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Accuracy and precision metrics</li>
              <li>ROC-AUC analysis</li>
              <li>Confusion matrix analysis</li>
              <li>Statistical significance testing</li>
            </ul>
          </div>
        </section>

        {/* Limitations */}
        <section>
          <h2 className="section-title">Limitations and Future Work</h2>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Study Limitations</h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6">
              <li>Dataset limitations : dataset is precise but very limited </li>
              <li>Generalization challenges : Accuracy of genetic algorithm is not able to compete with LASSO or outperform it </li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Future Directions</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Potential improvements : Precision is very strong aspect in medical dataset and Genetic algorithm is providing some promise in that aspect</li>
              <li>Extended research areas : Genetic Algorithm + SVM can be use for canceling out cases because of the high precison in class 0 </li>
              <li>Practical applications : Early Cvd Detection wearables</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Methodology; 