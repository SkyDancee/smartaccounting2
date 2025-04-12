import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import SmoothScrollLink from './SmoothScrollLink';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-custom py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              SMART ACCOUNT AND CO
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="/" label="Главная" />
            <NavLink href="/services" label="Услуги" />
            <NavLink href="/prices" label="Цены" />
            <NavLink href="/#principles" label="Наши принципы" />
            <NavLink href="/contact" label="Контакты" />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 mt-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink href="/" label="Главная" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/services" label="Услуги" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/prices" label="Цены" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/#principles" label="Наши принципы" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="/contact" label="Контакты" onClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

// Desktop navigation link component
const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => {
  const isHashLink = href.includes('#');
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className="text-gray-600 hover:text-primary relative group transition-colors duration-300"
      >
        {label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-gray-600 hover:text-primary relative group transition-colors duration-300"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

// Mobile navigation link component
const MobileNavLink: React.FC<{ href: string; label: string; onClick: () => void }> = ({ href, label, onClick }) => {
  const isHashLink = href.includes('#');
  
  if (isHashLink) {
    return (
      <SmoothScrollLink 
        href={href} 
        className="text-gray-800 hover:text-primary py-2 block transition-colors duration-300"
        onClick={onClick}
      >
        {label}
      </SmoothScrollLink>
    );
  }

  return (
    <Link 
      href={href} 
      className="text-gray-800 hover:text-primary py-2 block transition-colors duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header; 