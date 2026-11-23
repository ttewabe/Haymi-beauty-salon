// File: /src/sections/Hero.tsx
import React, { useEffect, useState } from 'react';
import { slides } from '../constants';
import { useLocation, useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const handleLearnMore = () => {
    if (location.pathname !== '/') {
      navigate('/#services');
    } else {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section className="relative h-screen pt-16 md:-mt-16 text-white">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 text-white ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${s.image})`,
              filter:
                i === index ? 'grayscale(10%) brightness(80%)' : 'grayscale(30%) brightness(60%)',
            }}
          />

          {s.id === 1 ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-black/60 md:from-black/40 md:to-black/60" />
              <div className="relative w-full h-full flex items-center justify-center md:!justify-end px-4 md:px-6">
                <div className="w-full md:w-1/2 text-white flex flex-col !gap-3 md:!gap-4 text-center md:text-left">
                  <p className="text-amber-400 font-medium tracking-widest text-lg md:text-2xl">
                    {s.titleLine1}
                  </p>
                  <h1 className="text-2xl md:text-6xl text-white font-extrabold leading-tight whitespace-pre-wrap">
                    {s.title}
                  </h1>
                  <p className="mt-4 md:mt-6 text-sm md:text-base max-w-lg text-white  mx-auto md:mx-0">
                    {s.description}
                  </p>
                  <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
                    <button
                      className="bg-amber-600 text-white !px-5 !py-2 md:!px-6 md:!py-3 rounded-md uppercase font-semibold !cursor-pointer hover:bg-white hover:text-black text-sm md:text-base"
                      onClick={handleLearnMore}
                    >
                      {s.cta}
                    </button>
                    <span className="uppercase tracking-wider text-sm md:text-base text-white">
                      {s.phone}
                    </span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent md:from-black/60 md:via-black/30 md:to-transparent" />
              <div className="relative !max-w-7xl mx-auto h-full flex items-center px-4 md:px-6 !ml-0 md:!ml-14">
                <div className="w-full md:w-1/2 text-white md:pl-6 flex flex-col gap-3 md:gap-4 text-center md:text-left">
                  <p className="text-amber-400 font-medium tracking-widest text-lg md:text-2xl">
                    {s.titleLine1}
                  </p>
                  <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight whitespace-pre-wrap">
                    {s.title}
                  </h1>
                  <p className="mt-4 md:mt-6 text-sm md:text-base max-w-lg text-gray-200 mx-auto md:mx-0">
                    {s.description}
                  </p>
                  <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
                    <button
                      className="bg-amber-600 text-white !px-5 !py-2 md:!px-6 md:!py-3 rounded-md uppercase font-semibold !cursor-pointer hover:bg-white hover:text-black text-sm md:text-base"
                      onClick={handleLearnMore}
                    >
                      {s.cta}
                    </button>
                    <span className="uppercase tracking-wider text-sm md:text-base">{s.phone}</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-6 h-1 md:w-8 md:h-2 rounded-full ${i === index ? 'bg-amber-600' : 'bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
