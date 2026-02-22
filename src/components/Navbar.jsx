import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navClasses = `fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 bg-[#f8f9fb]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] rounded-full py-2.5 px-8 border border-black/100`;

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Avis', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={navClasses}>
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}Manel-dent.jpg`}
            alt="Logo"
            className="w-10 h-10 md:w-11 md:h-11 object-contain mix-blend-multiply"
            onError={(e) => e.target.style.display = 'none'}
          />
          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-serif text-slate-800 font-medium tracking-wide">Cabinet dentaire</span>
            <span className="text-[10px] md:text-xs text-slate-500 font-sans uppercase tracking-wider">Dr. Firas Tabka</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm transition-colors ${isActive ? 'font-medium text-slate-800' : 'font-medium text-slate-500 hover:text-slate-800'
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#39938c] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="ml-4 px-6 py-2.5 bg-[#40968c] text-white rounded-full font-medium transition-colors hover:bg-[#327a72] text-sm shadow-sm"
          >
            Prendre RDV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-slate-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-4 bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 lg:hidden"
          >
            <div className="p-6 flex flex-col space-y-4">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors ${isActive ? 'text-[#39938c]' : 'text-slate-600 hover:text-[#39938c]'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-[#40968c] text-white px-6 py-3 rounded-full font-medium text-center shadow-sm mt-4 inline-block"
              >
                Prendre un rendez-vous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
