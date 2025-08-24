import { 
  Camera, 
  Wifi, 
  Settings, 
  Shield, 
  HardDrive, 
  Monitor, 
  Phone, 
  Clock,
  CheckCircle,
  Users
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="w-12 h-12 text-blue-600" />,
      title: 'CCTV Installation',
      description: 'Professional installation of surveillance cameras for residential and commercial properties. We handle everything from basic home security to complex enterprise systems.',
      features: ['Site survey and planning', 'Professional installation', 'System testing and calibration', 'User training']
    },
    {
      icon: <Wifi className="w-12 h-12 text-blue-600" />,
      title: 'Networking Solutions',
      description: 'Complete networking infrastructure setup including IP cameras, network switches, routers, and wireless connectivity solutions.',
      features: ['Network design and planning', 'Cable installation', 'Wireless network setup', 'Network security configuration']
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: 'Annual Maintenance',
      description: 'Comprehensive maintenance contracts including regular system checks, software updates, and preventive maintenance.',
      features: ['Quarterly system inspections', 'Software updates', 'Hardware maintenance', 'Performance optimization']
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Security Consulting',
      description: 'Expert consultation services to help you design the perfect security solution for your specific needs and budget.',
      features: ['Security assessment', 'System design', 'Budget planning', 'Compliance guidance']
    },
    {
      icon: <HardDrive className="w-12 h-12 text-blue-600" />,
      title: 'DVR/NVR Setup',
      description: 'Professional setup and configuration of Digital Video Recorders (DVR) and Network Video Recorders (NVR) systems.',
      features: ['System configuration', 'Storage optimization', 'Remote access setup', 'Backup configuration']
    },
    {
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      title: 'Monitoring Solutions',
      description: '24/7 monitoring services and remote viewing setup for real-time surveillance and incident response.',
      features: ['Remote monitoring setup', 'Mobile app configuration', 'Alert system setup', 'Emergency response']
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: 'Technical Support',
      description: 'Round-the-clock technical support for troubleshooting, system optimization, and emergency assistance.',
      features: ['24/7 helpline', 'Remote troubleshooting', 'On-site support', 'Emergency response']
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: 'Staff Training',
      description: 'Comprehensive training programs for your staff to effectively operate and maintain security systems.',
      features: ['System operation training', 'Maintenance procedures', 'Emergency protocols', 'User management']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive CCTV and security solutions tailored to meet your specific needs. 
              From installation to maintenance, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote on your security needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
