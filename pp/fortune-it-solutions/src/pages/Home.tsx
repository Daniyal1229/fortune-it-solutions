import { Shield, Camera, Wifi, Settings } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-blue-600" />,
      title: 'CCTV Installation',
      description: 'Professional installation of high-quality surveillance systems for homes and businesses.'
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: 'Networking Solutions',
      description: 'Complete networking infrastructure setup for seamless connectivity.'
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: 'Maintenance & Support',
      description: 'Annual maintenance contracts and 24/7 technical support services.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Security Consulting',
      description: 'Expert consultation for comprehensive security system planning.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FORTUNE IT SOLUTIONS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your Trusted Partner in CCTV & Security Solutions
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-200">
              Professional installation, maintenance, and support for all your security needs. 
              From residential surveillance to enterprise-level security systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Our Services
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About FORTUNE IT SOLUTIONS
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We are a leading provider of comprehensive CCTV and security solutions in the region. 
              With years of experience and a team of certified professionals, we specialize in designing, 
              installing, and maintaining security systems that protect what matters most to you.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose FORTUNE IT SOLUTIONS?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Certified Professionals
              </h3>
              <p className="text-gray-600">
                Our team consists of certified technicians with extensive experience in security systems.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock technical support and emergency services for your peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                We use only premium quality equipment and provide comprehensive warranties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
