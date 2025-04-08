
import React from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
          <p className="text-navy-700 mt-6">Feel free to reach out for opportunities or just to say hello</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 mb-1">Location</h4>
                  <p className="text-navy-700">Kanyakumari, Tamil Nadu, India, 629151</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 mb-1">Email</h4>
                  <a href="mailto:ahbrijeesh2004@gmail.com" className="text-navy-700 hover:text-navy-500 transition-colors">
                    ahbrijeesh2004@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-navy-100 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <h4 className="font-medium text-navy-900 mb-1">Phone</h4>
                  <p className="text-navy-700">+91 6384665931</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="font-medium text-navy-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/AHBRIJESH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-navy-100 p-3 rounded-full text-navy-700 hover:bg-navy-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-navy-100 p-3 rounded-full text-navy-700 hover:bg-navy-200 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border border-navy-100">
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  required 
                  className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
                  Your Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  required 
                  className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  placeholder="Enter subject" 
                  required 
                  className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message" 
                  rows={4} 
                  required 
                  className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              
              <Button type="submit" className="w-full bg-navy-700 hover:bg-navy-800 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
