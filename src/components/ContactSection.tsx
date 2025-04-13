
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const form = e.currentTarget;
      
      // Submit the form directly for formsubmit.co processing
      form.submit();
      
      // Since we're doing a full form submission, we'll show the success message
      // but the page will likely navigate away based on _next configuration
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
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
                  <a href="mailto:ahbrijesh2004@gmail.com" className="text-navy-700 hover:text-navy-500 transition-colors">
                    ahbrijesh2004@gmail.com
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
            
            <form 
              onSubmit={handleSubmit} 
              className="space-y-4" 
              action="https://formsubmit.co/ahbrijesh2004@gmail.com" 
              method="POST"
            >
              {/* Hidden inputs for formsubmit.co configuration */}
              <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  name="name"
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
                  name="email"
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
                  name="subject"
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
                  name="message"
                  placeholder="Enter your message" 
                  rows={4} 
                  required 
                  className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-navy-700 hover:bg-navy-800 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
