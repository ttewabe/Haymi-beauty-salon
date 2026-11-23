import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import Images from '../component/Image';
import GalleryCard from '../component/galleryCard';
import { categories } from '../constants';

const Gallery: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const validCategory = categories.find((cat) => cat.name === initialCategory)
    ? initialCategory
    : 'Haircuts & Trims';
  const [selectedCategory, setSelectedCategory] = useState<string>(
    validCategory || 'Haircuts & Trims'
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categoriesContainerRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<ReturnType<typeof window.setInterval> | null>(null);
  const isUserScrollingRef = useRef<boolean>(false);
  const isHoveringRef = useRef<boolean>(false);
  const scrollDirectionRef = useRef<'left' | 'right'>('right');

  // Prevent scrolling on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (!categoriesContainerRef.current || isUserScrollingRef.current || isHoveringRef.current)
        return;

      const container = categoriesContainerRef.current;
      const scrollAmount = 3;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (scrollDirectionRef.current === 'right') {
        if (container.scrollLeft >= maxScroll - 10) {
          scrollDirectionRef.current = 'left';
        } else {
          container.scrollLeft += scrollAmount;
        }
      } else {
        if (container.scrollLeft <= 10) {
          scrollDirectionRef.current = 'right';
        } else {
          container.scrollLeft -= scrollAmount;
        }
      }
    };

    autoScrollRef.current = setInterval(startAutoScroll, 80);

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  // Mouse event handlers
  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
  };

  // Handle user scroll interactions
  const handleUserScroll = () => {
    if (!isUserScrollingRef.current) {
      isUserScrollingRef.current = true;

      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }

      const timeoutId = setTimeout(() => {
        isUserScrollingRef.current = false;

        const startAutoScroll = () => {
          if (
            !categoriesContainerRef.current ||
            isUserScrollingRef.current ||
            isHoveringRef.current
          )
            return;

          const container = categoriesContainerRef.current;
          const scrollAmount = 3;
          const maxScroll = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScroll - 10) {
            scrollDirectionRef.current = 'left';
          } else if (container.scrollLeft <= 10) {
            scrollDirectionRef.current = 'right';
          }

          if (scrollDirectionRef.current === 'right') {
            container.scrollLeft += scrollAmount;
          } else {
            container.scrollLeft -= scrollAmount;
          }
        };

        autoScrollRef.current = setInterval(startAutoScroll, 80);
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  };

  // Handle category button click
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSearchParams({});
  };

  // Handle image click to open modal
  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Handle backdrop click to close modal
  // const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  //   if (e.target === e.currentTarget) {
  //     handleCloseModal();
  //   }
  // };

  const filteredImages = categories.find((cat) => cat.name === selectedCategory)?.images || [];

  return (
    <>
      <div
        className="min-h-screen relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${Images.galleryFixed})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

        <div className="flex flex-col justify-center items-center !pb-12 sm:!pb-16 md:!pb-20 lg:!pb-32 !mt-16 sm:!mt-20 md:!mt-22">
          <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold bg-black text-white text-center uppercase tracking-wide !py-6 sm:!py-8 w-full">
            Gallery
          </h1>

          {/* Categories Container with Horizontal Scroll */}
          <div className="relative z-50 !mt-12 sm:!mt-16 md:!mt-20 lg:!mt-28 container max-w-full sm:max-w-[90%] md:max-w-5xl !p-4 sm:!p-6 md:!p-8 lg:!p-12 bg-black/85 flex flex-col items-center box-border">
            <div
              ref={categoriesContainerRef}
              onScroll={handleUserScroll}
              onWheel={handleUserScroll}
              onTouchMove={handleUserScroll}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="flex justify-start w-full gap-4 sm:gap-6 !mb-6 sm:!mb-8 overflow-x-auto scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`flex-shrink-0 text-white text-sm sm:text-base md:text-lg uppercase font-bold cursor-pointer !pb-2 transition-colors whitespace-nowrap ${
                    selectedCategory === category.name ? 'border-b-2 border-white' : ''
                  } hover:border-b-2 hover:border-white`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {filteredImages.map((image, index) => (
                <GalleryCard
                  key={index}
                  image={image}
                  category={
                    selectedCategory ||
                    categories.find((cat) => cat.images.includes(image))?.name ||
                    'Uncategorized'
                  }
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[101]"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-full w-full h-auto">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 cursor-pointer z-[101] right-4 text-white hover:text-gray-300 transition-colors"
            >
              <IoClose size={40} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain max-h-[60vh] md:max-h-[70vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
