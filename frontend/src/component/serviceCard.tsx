import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/services.module.css';

interface ServiceCardProps {
  img: string;
  title: string;
  id: string | number;
  category: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ img, title, id, category }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`relative w-full h-84 cursor-pointer ${styles.perspective1000}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 ${styles.transformStylePreserve3d} ${isFlipped ? styles.rotateY180 : ''}`}
      >
        {/* Front of card */}
        <div className={`absolute inset-0 ${styles.backfaceHidden} overflow-hidden`}>
          <div className="w-full h-full relative">
            <img src={img} alt={title} className="w-full h-full object-cover" />
            <div className="absolute bottom-7 left-7 bg-black !p-4">
              <span className="uppercase flex-wrap text-sm tracking-wider text-white font-medium">
                {title}
              </span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 ${styles.backfaceHidden} ${styles.rotateY180} bg-amber-600 flex items-center justify-center p-6`}
        >
          <div className="text-center text-white">
            <button
              className="bg-black text-white !px-5 !py-2 rounded text-xs uppercase tracking-wider font-semibold hover:bg-white hover:text-black transition-colors"
              onClick={() => navigate(`/gallery?category=${encodeURIComponent(category)}`)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
