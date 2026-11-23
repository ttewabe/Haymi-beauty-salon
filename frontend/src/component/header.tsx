import Images from './Image';
import { navLinks } from '../constants';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Define TypeScript interface for navLinks
interface NavLink {
  id: number;
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to section based on URL hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1); // e.g., "services" from "#services"
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  // Handle "Book Now" button
  const handleBookNow = () => {
    if (location.pathname !== '/') {
      navigate('/#contacts');
    } else {
      const element = document.getElementById('contacts');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  const headerBg =
    location.pathname === '/gallery' ? '!bg-black' : '!bg-black/95 md:!bg-transparent';

  return (
    <>
      {/* Mobile Header */}
      <header
        className={`w-full fixed top-0 z-[51] ${headerBg} md:absolute md:top-2 block md:hidden`}
      >
        <div className="!py-3 flex items-center justify-center px-4 ">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none absolute left-4"
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          {/* Logo */}
          <Link to="/#home" className="flex-shrink-0 !cursor-pointer">
            <img
              src={Images.mobileLogo}
              alt="Logo"
              className="h-12 w-auto md:h-16 cursor-pointer"
            />
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="bg-black/95 !px-4 !py-4 animate-fadeIn text-4x1 font-bold">
            <nav className="flex flex-col gap-1 text-4x1 font-bold">
              {/* Left Curl */}
              <div
                className="cursor-pointer hover:opacity-80 !px-4 !py-4 border-b border-gray-700"
                onClick={handleBookNow}
              >
                <img
                  src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
                  alt="Decor Right"
                  className="h-12 w-12 rounded-full hover:scale-105 transition"
                />
              </div>
              {navLinks.map((link: NavLink) => (
                <Link
                  key={link.id}
                  to={link.label === 'Gallery' ? '/gallery' : `/#${link.href.slice(1) || 'home'}`}
                  className="block uppercase text-white font-medium !px-4 !py-4 rounded-md transition-all duration-300 hover:bg-[#c5a46d] hover:text-black border-b border-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Right Curl */}
              <div
                className="cursor-pointer hover:opacity-80 !px-4 !py-4 border-b border-gray-700"
                onClick={handleBookNow}
              >
                <img
                  src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
                  alt="Decor Right"
                  className="h-12 w-12 rounded-full hover:scale-105 transition"
                />
              </div>
            </nav>
            {/* Book Now Button for Mobile */}
            <div className="!mt-4 !px-4" onClick={handleBookNow}>
              <button className="w-full !px-4 !py-3 bg-amber-600 text-white rounded-md transition-colors duration-300 hover:bg-white hover:text-black cursor-pointer text-4xl font-bold  drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]">
                BOOK NOW
              </button>
            </div>
          </div>
        )}
        <div className="border-t border-white/10 mt-2" />
      </header>

      {/* Desktop Header */}
      <header
        className={`w-full absolute top-0 z-30 ${headerBg} hidden md:block overflow-x-hidden`}
      >
        <div className="max-w-screen-xl mx-auto !px-2 md:!px-4 !py-4 flex items-center justify-center">
          <nav className="flex items-center justify-center gap-2 md:gap-4 flex-shrink overflow-hidden text-4x1 font-bold">
            {/* Left Curl */}
            <div className="cursor-pointer hover:opacity-80" onClick={handleBookNow}>
              <img
                src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
                alt="Decor Right"
                className="h-12 w-12 rounded-full hover:scale-105 transition"
              />
            </div>
            {/* Navigation Links (Left Side) */}
            {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link: NavLink) => (
              <Link
                key={link.id}
                to={link.label === 'Gallery' ? '/gallery' : `/#${link.href.slice(1) || 'home'}`}
                className="uppercase inline-block text-4x1 font-bold md:text-base text-white font-medium !px-2 md:!px-4 !py-1 md:!py-2 rounded-md transition-colors duration-200 hover:bg-[#c5a46d]"
              >
                {link.label}
              </Link>
            ))}
            {/* Logo */}
            <Link to="/#home" className="flex-shrink-0 !cursor-pointer mx-4">
              <img src={Images.pcLogo} alt="Logo" className="h-10 md:h-12 w-auto cursor-pointer" />
            </Link>
            {/* Navigation Links (Right Side) */}
            {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link: NavLink) => (
              <Link
                key={link.id}
                to={link.label === 'Gallery' ? '/gallery' : `/#${link.href.slice(1) || 'home'}`}
                className="uppercase inline-block text-4x1 font-bold md:text-base text-white font-medium !px-2 md:!px-4 !py-1 md:!py-2 rounded-md transition-colors duration-200 hover:bg-[#c5a46d]"
              >
                {link.label}
              </Link>
            ))}
            {/* Right Curl */}
            <div className="cursor-pointer hover:opacity-80" onClick={handleBookNow}>
              <img
                src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
                alt="Decor Right"
                className="h-12 w-12 rounded-full hover:scale-105 transition"
              />
            </div>
          </nav>
          {/* Book Now Button */}
          <div className="flex-shrink-0 absolute right-4">
            <button
              className="!px-2 md:!px-4 !py-1 md:!py-2  md:text-base text-white rounded-md transition-colors duration-200 hover:bg-yellow-500 hover:text-black cursor-pointer text-4xl font-bold  drop-shadow-[0_4px_10px_rgba(255,215,0,0.6)]"
              onClick={handleBookNow}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="border-t border-white/10 !mt-3" />
      </header>
    </>
  );
};

export default Header;
