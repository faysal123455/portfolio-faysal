
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full mb-8 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-bold mb-4">A H BRIJEESH</h2>
          
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com/AHBRIJESH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahbrijeesh2004@gmail.com"
              className="hover:text-navy-300 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex space-x-6 text-navy-300 mb-8">
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#education" className="hover:text-white transition-colors duration-300">Education</a>
            <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors duration-300">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>
          
          <div className="text-navy-400 text-sm">
            <p>&copy; {new Date().getFullYear()} A H Brijeesh. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
