import React from 'react';
import { 
  FiCreditCard, FiDatabase, FiBox, FiShoppingBag, FiStar, 
  FiBarChart2, FiGlobe, FiZap, FiGrid, FiCodepen, FiAward,
  FiTrendingUp, FiDollarSign, FiLayers, FiTool, FiBookOpen
} from 'react-icons/fi';

// Partners configuration
const PARTNERS = [
  { name: 'VIKO', icon: <FiZap className="text-primary" size={24} /> },
  { name: 'PANASONIC', icon: <FiTool className="text-gray-700" size={24} /> },
  { name: 'LENGERSKOE', icon: <FiBox className="text-primary" size={24} /> },
  { name: 'FRESH DENT', icon: <FiStar className="text-blue-400" size={24} /> },
  { name: 'BEST PARFUM', icon: <FiAward className="text-primary" size={24} /> },
  { name: 'TEKLED', icon: <FiLayers className="text-gray-600" size={24} /> },
  { name: 'TEK AVIZE', icon: <FiGrid className="text-primary" size={24} /> },
  { name: 'ASYA AVIZE', icon: <FiCodepen className="text-blue-600" size={24} /> },
  { name: 'DIDOX+', icon: <FiBookOpen className="text-primary" size={24} /> },
  { name: '1C', icon: <FiDatabase className="text-blue-500" size={24} /> },
  { name: 'E-IMZO', icon: <FiGlobe className="text-primary" size={24} /> },
  { name: 'UZUM', icon: <FiBarChart2 className="text-blue-700" size={24} /> },
  { name: 'KAPITAL BANK', icon: <FiCreditCard className="text-primary" size={24} /> },
  { name: 'HAMKORBANK', icon: <FiTrendingUp className="text-blue-600" size={24} /> },
  { name: 'SOLIQ QO\'MITASI', icon: <FiDollarSign className="text-primary" size={24} /> },
  { name: 'UNIVERSAL BANK', icon: <FiShoppingBag className="text-blue-500" size={24} /> },
];

interface PartnersMarqueeProps {
  className?: string;
}

const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 bg-gray-50 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши партнёры</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ООО "SMART ACCOUNT AND CO" гордится сотрудничеством с ведущими компаниями и организациями
          </p>
        </div>
      </div>

      <div className="relative">
        {/* First row - moving left */}
        <div className="flex overflow-hidden mb-8 py-4 group relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-marquee-left whitespace-nowrap group-hover:pause-animation">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 bg-white px-8 py-5 mx-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-custom hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {partner.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee-left whitespace-nowrap group-hover:pause-animation" aria-hidden="true">
            {PARTNERS.map((partner, index) => (
              <div 
                key={`row1-duplicate-${index}`} 
                className="flex-shrink-0 bg-white px-8 py-5 mx-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-custom hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {partner.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
        
        {/* Second row - moving right */}
        <div className="flex overflow-hidden py-4 group relative">
          {/* Left gradient overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          
          <div className="flex animate-marquee-right whitespace-nowrap group-hover:pause-animation">
            {[...PARTNERS].reverse().map((partner, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 bg-white px-8 py-5 mx-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-custom hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {partner.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee-right whitespace-nowrap group-hover:pause-animation" aria-hidden="true">
            {[...PARTNERS].reverse().map((partner, index) => (
              <div 
                key={`row2-duplicate-${index}`} 
                className="flex-shrink-0 bg-white px-8 py-5 mx-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-custom hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    {partner.icon}
                  </div>
                  <span className="text-lg font-semibold text-gray-700">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee; 