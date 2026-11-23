import React from 'react';
import Images from './Image';
import { useLocation, useNavigate } from 'react-router-dom';

const BelowWarmWelcome: React.FC = () => {
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
      className="relative !py-24"
      style={{
        backgroundImage: `url(${Images.blurBackgroundBelowWarmWelcome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative w-full flex flex-col items-center gap-8 justify-center mx-auto text-center text-white !px-6">
        <h2 className="text-4xl  text-black font-extrabold uppercase">
          Are you ready to Haymi Salon?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-black text-[16px] leading-relaxed tracking-wide">
          Let us create a look that truly reflects you. At Haymi Salon, we design styles that fit
          your personality and help you feel confident and beautiful. Seeing our clients smile after
          their transformation is what we love most.
        </p>
        <button
          className="mt-8 bg-amber-600 !px-6 !py-3 cursor-pointer hover:bg-white hover:text-black uppercase text-4xl font-bold  drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]"
          onClick={handleBookNow}
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default BelowWarmWelcome;
