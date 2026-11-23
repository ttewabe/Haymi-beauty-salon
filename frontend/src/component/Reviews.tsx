// File: /src/sections/CustomerReviews.tsx
import React, { useRef, useState } from 'react';
import { reviews } from '../constants';

const CustomerReviews: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === 'right' ? scrollAmount : -scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth',
      });

      setTimeout(updateArrowVisibility, 300);
    }
  };

  const updateArrowVisibility = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const toggleExpand = (id: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedReviews(newExpanded);
  };

  // Initialize arrow visibility
  React.useEffect(() => {
    updateArrowVisibility();
    window.addEventListener('resize', updateArrowVisibility);
    return () => window.removeEventListener('resize', updateArrowVisibility);
  }, []);

  return (
    <section className="bg-black text-white !py-16 relative">
      <div className="w-full mx-auto !px-6 md:!px-30">
        <h3 className="text-center text-4xl font-extrabold !mb-8 uppercase">Customer Reviews</h3>

        {/* Navigation Arrows */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 md:left-18 top-1/2 transform translate-y-1/2 z-10 bg-neutral-800 hover:bg-neutral-700 rounded-full p-3 transition-all duration-200"
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
            onClick={() => scroll('right')}
            className="absolute right-2 md:right-18 top-1/2 transform translate-y-1/2 z-10 bg-neutral-800 hover:bg-neutral-700 rounded-full p-3 transition-all duration-200"
            aria-label="Scroll right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Scrollable Reviews Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide gap-6 pb-4"
          onScroll={updateArrowVisibility}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((r) => {
            const isExpanded = expandedReviews.has(r.id);
            const shouldShowReadMore = r.text.length > 150;
            const displayText = isExpanded
              ? r.text
              : r.text.slice(0, 150) + (r.text.length > 150 ? '...' : '');

            return (
              <div
                key={r.id}
                className={`bg-neutral-900 !p-6 max-w-[200px] md:max-w-[calc(25%-18px)] flex-shrink-0 transition-all duration-300 drop-shadow-[0_1px_5px_rgba(255,215,0,0.6)] ${isExpanded ? 'min-h-[300px]' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-600 flex items-center justify-center">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.date}</div>
                  </div>
                </div>
                <div className="mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-gray-200 mb-3">{displayText}</p>
                {shouldShowReadMore && (
                  <button
                    onClick={() => toggleExpand(r.id)}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
