import React from 'react';
import Images from './Image';
import { useNavigate } from 'react-router-dom';

const BelowHero: React.FC = () => {
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
      style={{
        backgroundImage: `url(${Images.blurBackgroundBelowWarmWelcome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="!w-full mx-auto !px-6  flex justify-around gap-10 items-center py-20 flex-col md:flex-row">
        <img src={Images.belowHero} alt="below-hero" className="rounded-md md:w-[50%] w-[50%]" />
        <div className="flex flex-col gap-4 items-start !mb-12">
          <h2 className="text-4xl text-center text-black font-extrabold uppercase">
            Time For A Change?
          </h2>
          <p className="mt-6 text-gray-700 text-[16px] leading-relaxed space-y-4 text-justify">
            Welcome to <strong>Haymi Salon</strong>, a friendly hair and beauty salon in Lavon. We
            enjoy meeting new clients and making everyone feel comfortable and relaxed.<br></br>
            Our stylists focus on giving you a look that suits you and brings out your natural
            beauty. Whether you want a small change or a brand-new style, we are here to help.
          </p>
          <button
            className="mt-8 bg-amber-600 text-white !px-6 !py-3 rounded-md cursor-pointer hover:bg-white hover:text-black border text-4xl font-bold  drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BelowHero;
