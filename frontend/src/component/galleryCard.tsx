import React from 'react';

export interface GalleryCardProps {
  image: string;
  category: string;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, category, onClick }) => {
  return (
    <div
      className="relative w-full h-64 overflow-hidden transition-all duration-300 hover:scale-105 group"
      onClick={onClick}
    >
      <img src={image} alt={`${category} image`} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-100%] group-hover:translate-y-0"></div>
    </div>
  );
};

export default GalleryCard;
