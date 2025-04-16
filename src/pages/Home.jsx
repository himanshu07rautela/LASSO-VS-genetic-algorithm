import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Genetic Algorithm vs LASSO in CVD Detection Algorithms
            </h1>
            <p className="text-xl mb-8">
              A comparative study of machine learning approaches for cardiovascular disease detection
            </p>
            <Link to="/results" className="btn bg-white text-primary-600 hover:bg-gray-100">
              View Results
            </Link>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">Research Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Genetic Algorithm Approach</h3>
              <p className="text-gray-600">
                Our research explores the effectiveness of genetic algorithms in feature selection
                and model optimization for CVD detection, comparing its performance against
                traditional LASSO regression methods.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">LASSO Regression</h3>
              <p className="text-gray-600">
                We investigate the performance of LASSO regression in identifying significant
                predictors for cardiovascular disease, analyzing its strengths and limitations
                in medical data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings Preview */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="section-title">Key Findings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Accuracy Comparison</h3>
              <p className="text-gray-600">
                Detailed analysis of model accuracy across different approaches
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Feature Selection</h3>
              <p className="text-gray-600">
                Comparison of selected features and their importance
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <p className="text-gray-600">
                ROC-AUC curves and precision-recall analysis
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 