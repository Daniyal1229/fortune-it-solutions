import React, { useState, useMemo } from 'react';
import { Search, Filter, Camera, HardDrive, Wifi, Monitor } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  priceRange: string;
  image?: string;
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    // Dome Cameras
    {
      id: 1,
      name: 'HD Dome Camera 2MP',
      category: 'Dome',
      description: 'High-definition dome camera with night vision and motion detection. Perfect for indoor surveillance.',
      priceRange: '₹3,000 - ₹5,000'
    },
    {
      id: 2,
      name: '4K Dome Camera',
      category: 'Dome',
      description: 'Ultra-high definition 4K dome camera with advanced AI features and wide-angle view.',
      priceRange: '₹8,000 - ₹12,000'
    },
    {
      id: 3,
      name: 'PTZ Dome Camera',
      category: 'Dome',
      description: 'Pan-Tilt-Zoom dome camera with remote control capabilities and 360-degree coverage.',
      priceRange: '₹15,000 - ₹25,000'
    },

    // Bullet Cameras
    {
      id: 4,
      name: 'Outdoor Bullet Camera 2MP',
      category: 'Bullet',
      description: 'Weatherproof outdoor bullet camera with infrared night vision up to 30 meters.',
      priceRange: '₹4,000 - ₹6,000'
    },
    {
      id: 5,
      name: '4K Bullet Camera',
      category: 'Bullet',
      description: 'High-resolution 4K bullet camera with advanced motion detection and audio recording.',
      priceRange: '₹10,000 - ₹15,000'
    },
    {
      id: 6,
      name: 'Wireless Bullet Camera',
      category: 'Bullet',
      description: 'Wireless bullet camera with WiFi connectivity and mobile app control.',
      priceRange: '₹6,000 - ₹9,000'
    },

    // PTZ Cameras
    {
      id: 7,
      name: 'PTZ Security Camera',
      category: 'PTZ',
      description: 'Professional PTZ camera with 20x optical zoom and auto-tracking capabilities.',
      priceRange: '₹25,000 - ₹40,000'
    },
    {
      id: 8,
      name: 'Outdoor PTZ Camera',
      category: 'PTZ',
      description: 'Weatherproof outdoor PTZ camera with night vision and vandal-proof design.',
      priceRange: '₹30,000 - ₹50,000'
    },

    // Wireless Cameras
    {
      id: 9,
      name: 'WiFi Security Camera',
      category: 'Wireless',
      description: 'Wireless security camera with two-way audio and cloud storage options.',
      priceRange: '₹3,500 - ₹6,000'
    },
    {
      id: 10,
      name: 'Solar Powered Camera',
      category: 'Wireless',
      description: 'Solar-powered wireless camera with battery backup and mobile notifications.',
      priceRange: '₹8,000 - ₹12,000'
    },

    // DVR Systems
    {
      id: 11,
      name: '4 Channel DVR',
      category: 'DVR',
      description: '4-channel Digital Video Recorder with 1TB storage and mobile viewing app.',
      priceRange: '₹8,000 - ₹12,000'
    },
    {
      id: 12,
      name: '8 Channel DVR',
      category: 'DVR',
      description: '8-channel DVR with 2TB storage, motion detection, and remote access.',
      priceRange: '₹12,000 - ₹18,000'
    },
    {
      id: 13,
      name: '16 Channel DVR',
      category: 'DVR',
      description: '16-channel professional DVR with 4TB storage and advanced recording features.',
      priceRange: '₹20,000 - ₹30,000'
    },

    // NVR Systems
    {
      id: 14,
      name: '4 Channel NVR',
      category: 'NVR',
      description: '4-channel Network Video Recorder for IP cameras with PoE support.',
      priceRange: '₹10,000 - ₹15,000'
    },
    {
      id: 15,
      name: '8 Channel NVR',
      category: 'NVR',
      description: '8-channel NVR with 2TB storage and advanced network features.',
      priceRange: '₹15,000 - ₹25,000'
    },

    // Networking Devices
    {
      id: 16,
      name: 'PoE Network Switch',
      category: 'Networking Device',
      description: '8-port PoE network switch for powering IP cameras over Ethernet cables.',
      priceRange: '₹5,000 - ₹8,000'
    },
    {
      id: 17,
      name: 'Wireless Router',
      category: 'Networking Device',
      description: 'High-speed wireless router with advanced security features for CCTV networks.',
      priceRange: '₹3,000 - ₹6,000'
    },
    {
      id: 18,
      name: 'Network Cable Kit',
      category: 'Networking Device',
      description: 'Complete network cable kit with connectors and tools for CCTV installation.',
      priceRange: '₹2,000 - ₹4,000'
    }
  ];

  const categories = ['All', 'Dome', 'Bullet', 'PTZ', 'Wireless', 'DVR', 'NVR', 'Networking Device'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Dome':
      case 'Bullet':
      case 'PTZ':
      case 'Wireless':
        return <Camera className="w-6 h-6" />;
      case 'DVR':
      case 'NVR':
        return <HardDrive className="w-6 h-6" />;
      case 'Networking Device':
        return <Wifi className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive catalog of high-quality CCTV cameras, recording systems, and networking equipment.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(product.category)}
                        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-green-600">
                        {product.priceRange}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our experts can help you select the perfect security solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Expert Advice
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Request Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
