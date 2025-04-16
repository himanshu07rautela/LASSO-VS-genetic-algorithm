const About = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">About the Research</h1>

        {/* Research Overview */}
        <section className="mb-16">
          <h2 className="section-title">Project Overview</h2>
          <div className="card">
            <p className="text-gray-600 mb-6">
              This research project investigates the comparative effectiveness of Genetic Algorithms
              and LASSO regression in cardiovascular disease detection. Our study aims to provide
              insights into the strengths and limitations of these approaches in medical data analysis.
            </p>
          </div>
        </section>

        {/* Researchers */}
        <section className="mb-16">
          <h2 className="section-title">Research Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex flex-col items-center">
                <img 
                  src="/Himanshu Rautela.png" 
                  alt="Himanshu Rautela" 
                  className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-4">Himanshu Rautela</h3>
                <p className="text-gray-600 mb-4">
                  Lead Researcher
                </p>
                <p className="text-gray-600 text-center">
                  Student IIIT Kota
                </p>
              </div>
            </div>
            <div className="card">
              <div className="flex flex-col items-center">
                <img 
                  src="/manas rajpal.jpeg" 
                  alt="Manas Rajpal" 
                  className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-4">Manas Rajpal</h3>
                <p className="text-gray-600 mb-4">
                  Co-Researcher
                </p>
                <p className="text-gray-600 text-center">
                  Student IIIT Kota
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="mb-16">
          <h2 className="section-title">Research Mentors</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex flex-col items-center">
                <img 
                  src="/Dr parikshit kishor singh.jpeg" 
                  alt="Dr. Parikshit Kishor Singh" 
                  className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-4">Dr. Parikshit Kishor Singh</h3>
                <p className="text-gray-600 mb-4">
                  Research Supervisor
                </p>
                <p className="text-gray-600 text-center">
                  HOD(ECE) IIIT Kota
                </p>
              </div>
            </div>
            <div className="card">
              <div className="flex flex-col items-center">
                <img 
                  src="/Mr Snehanshu Sekhar.jpg" 
                  alt="Mr. Snehanshu Sekhar" 
                  className="w-48 h-48 rounded-full object-cover mb-6 shadow-lg"
                />
                <h3 className="text-xl font-semibold mb-4">Mr. Snehanshu Sekhar</h3>
                <p className="text-gray-600 mb-4">
                  Research Co-Supervisor
                </p>
                <p className="text-gray-600 text-center">
                  BIT Mesra
                </p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Acknowledgments */}
        <section>
          <h2 className="section-title">Acknowledgments</h2>
          <div className="card">
            <p className="text-gray-600 mb-4">
              We would like to acknowledge the contributions of:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>IIIT Kota for providing research facilities and support</li>
              <li>UCI Machine Learning Repository for the dataset</li>
              <li>Our research mentors for their valuable guidance</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 