
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail, Home, GraduationCap, Briefcase, FolderKanban, Medal, Contact } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: <Home className="h-4 w-4 mr-1" /> },
    { name: 'Education', href: '#education', icon: <GraduationCap className="h-4 w-4 mr-1" /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { name: 'Projects', href: '#projects', icon: <FolderKanban className="h-4 w-4 mr-1" /> },
    { name: 'Skills', href: '#skills', icon: <Medal className="h-4 w-4 mr-1" /> },
    { name: 'Contact', href: '#contact', icon: <Contact className="h-4 w-4 mr-1" /> },
  ];

  const socialLinks = [
    { name: 'Github', href: 'https://github.com/AHBRIJESH', icon: <Github className="h-5 w-5" /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/', icon: <Linkedin className="h-5 w-5" /> },
    { name: 'Email', href: 'mailto:ahbrijesh2004@gmail.com', icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-navy-800 flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2 border-2 border-navy-300">
            <img 
              src="/lovable-uploads/3beb2243-0086-46e4-9136-a01b49030d8d.png" 
              alt="A H Brijesh" 
              className="w-full h-full object-cover"
            />
          </div>
          A H <span className="text-navy-600">BRIJESH</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy-800 hover:text-navy-600 font-medium transition-colors duration-200 flex items-center"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-navy-100 text-navy-800 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-navy-800" />
          ) : (
            <Menu className="h-6 w-6 text-navy-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed top-14 inset-x-0 bg-white/90 backdrop-blur-md shadow-md px-4 py-4 md:hidden transition-all duration-300 ease-in-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-navy-800 hover:text-navy-600 font-medium py-2 transition-colors duration-200 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </a>
          ))}

          <div className="flex items-center space-x-4 pt-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-navy-100 text-navy-800 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
