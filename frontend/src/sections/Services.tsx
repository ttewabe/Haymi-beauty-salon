import React, { useEffect, useRef, useState } from 'react';
import { services } from '../constants';
import ServiceCard from '../component/serviceCard';
import styles from '../styles/services.module.css';

const Services: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef<number | null>(null);
  const isScrollingRef = useRef(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  };

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (scrollContainerRef.current && !isScrollingRef.current) {
          isScrollingRef.current = true;
          scrollRight();
          setTimeout(() => {
            isScrollingRef.current = false;
          }, 500);
        }
      }, 10000);
    };

    startAutoScroll();

    // Clean up on unmount
    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  // Update current index based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      checkScrollPosition();

      if (scrollContainerRef.current) {
        const scrollPos = scrollContainerRef.current.scrollLeft;
        const itemWidth = 320; // Approximate width of each card with gap
        const newIndex = Math.round(scrollPos / itemWidth) % services.length;
        setCurrentIndex(newIndex >= 0 ? newIndex : services.length + newIndex);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      // Initial check
      checkScrollPosition();

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className="bg-black text-white !py-12 md:!py-14 !px-4 md:!px-30">
      <div className="w-full mx-auto">
        <div className="text-center !mb-12 md:!mb-16 flex flex-col gap-3">
          <p className="text-amber-500 font-medium md:text-base uppercase tracking-wider !text-2xl">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide mt-2">What We Do</h2>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-18 bg-amber-600 hover:bg-amber-700 text-white rounded-full w-10 h-10 items-center justify-center z-10 shadow-lg transition-all"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-15 bg-amber-600 hover:bg-amber-700 text-white rounded-full w-10 h-10 items-center justify-center z-10 shadow-lg transition-all"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Services grid with horizontal scrolling */}
          <div
            ref={scrollContainerRef}
            className={`flex overflow-x-auto ${styles.snapX} !pb-4 md:!pb-8 ${styles.scrollbarHide}  gap-10 w-full !pl-12 drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)] `}
          >
            {services.map((s) => (
              <div
                key={s.id}
                className={`flex-shrink-0 w-52 md:w-60 ${styles.snapStart} mr-6 last:mr-0`}
              >
                <ServiceCard img={s.img} title={s.title} id={s.id} category={s.category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
