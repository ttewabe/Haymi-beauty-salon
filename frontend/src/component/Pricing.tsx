import React from 'react';
import { MENU_ITEMS } from '../constants'; // Adjust path as needed
import Images from '../component/Image';
import { useLocation, useNavigate } from 'react-router-dom';

const Pricing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (location.pathname !== '/') {
      navigate('/#contacts');
    } else {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section
      className="relative !py-20 bg-fixed bg-cover bg-center z-50 !overflow-x-hidden"
      style={{ backgroundImage: `url(${Images.welcome})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="flex flex-col items-center mx-auto space-y-16 relative z-50 !pb-24 !mt-24">
        <div className="md:!w-[80%] !w-[90%]">
          <div className="bg-gray-900/90 mx-auto text-white !px-12 !pb-12 !py-12 drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]">
            <h2 className="text-4xl font-bold text-white mb-4 text-center font-bold uppercase">
              Service menu
            </h2>
            <div className="flex items-center  justify-center !mb-4">
              <span className="text-yellow-500 text-3xl mr-2">~</span>
              <span className="text-yellow-500 text-3xl mr-2">~</span>
              <span className="text-yellow-500 text-3xl mr-2">~</span>
              <span className="text-xl text-yellow-500">⭐</span>
            </div>

            <div className="space-y-4 !mb-8 text-gray-300">
              <h3 className="text-3xl font-semibold text-center text-orange-500 !mb-6">
                Healthy Hair Services for All Hair Types
              </h3>
              <p className="text-lg text-center leading-relaxed">
                Haymi Salon offers a variety of professional hair care services that will leave you
                looking and feeling beautiful.
              </p>
            </div>

            {/* Menu Sections */}
            <div className="space-y-8 !mt-8">
              {MENU_ITEMS.map((item) => (
                <div key={item.category} className=" !pb-6 last:border-b-0">
                  <h3 className="text-2xl font-bold text-white uppercase !mb-4 tracking-wide">
                    {item.category}
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    {item.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex flex-col gap-2 md:flex-row items-start md:items-center max-[768px]:border-b max-[768px]:!pb-4 max-[768px]:!mb-4 !py-1 max-[768px]:border-gray-500"
                      >
                        <span className="!mr-8 max-[768px]:flex-1 text-lg text-left">
                          {service.name}
                        </span>
                        <span className="hidden md:block flex-1 border-b border-dotted border-gray-400 "></span>
                        <span className="md:text-right font-semibold text-orange-400 min-w-[100px]">
                          {service.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex w-full justify-center text-3x1">
              <button
                className="mt-8 bg-amber-600 text-white  !px-6 !py-3 rounded-sm cursor-pointer hover:bg-white hover:text-black border text-4xl font-bold  drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]"
                onClick={handleBookNow}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
