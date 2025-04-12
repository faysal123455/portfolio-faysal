import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 flex flex-col justify-center bg-gradient-to-b from-white to-navy-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="mr-4 hidden sm:block">
                <Avatar className="h-24 w-24 border-4 border-navy-300">
                  <AvatarImage
                    src="/lovable-uploads/3beb2243-0086-46e4-9136-a01b49030d8d.png"
                    alt="A H Brijesh"
                  />
                  <AvatarFallback>AHB</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
                  A H BRIJESH
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-navy-600 mb-6">
                  Software Engineer • Machine Learning Enthusiast
                </h2>
              </div>
            </div>

            <p className="text-lg text-navy-800 mb-8 max-w-2xl">
              Enthusiastic entry-level professional seeking a role as Software
              Engineer or Machine Learning Engineer. Eager to contribute to
              innovative projects and collaborate with cross-functional teams,
              demonstrating effective problem-solving skills and utilizing
              strong presentation skills and data analysis abilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-navy-700 hover:bg-navy-800 text-white">
                <a
                  href="/lovable-uploads/5828a445-9e0f-4348-b261-8cfcc3590ce4.png"
                  download="A_H_Brijesh_Resume.png"
                >
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-navy-600 text-navy-700 hover:bg-navy-100"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="mt-16 hidden md:block">
              <a
                href="#education"
                className="flex items-center justify-center w-10 h-10 mx-auto rounded-full border border-navy-300 text-navy-600 hover:bg-navy-100 transition-colors duration-300"
                aria-label="Scroll down"
              >
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-300 to-navy-500 transform rotate-3 scale-105 opacity-30 blur-sm"></div>
              <div className="rounded-2xl bg-white p-6 shadow-lg relative overflow-hidden border border-navy-100">
                <div className="flex flex-col space-y-4">
                  <div className="sm:hidden flex justify-center mb-4">
                    <Avatar className="h-24 w-24 border-4 border-navy-300">
                      <AvatarImage
                        src="/lovable-uploads/3beb2243-0086-46e4-9136-a01b49030d8d.png"
                        alt="A H Brijesh"
                      />
                      <AvatarFallback>AHB</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-navy-700" />
                    </div>
                    <span className="text-navy-800">
                      Kanyakumari, Tamil Nadu, India, 629151
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-navy-700" />
                    </div>
                    <a
                      href="mailto:ahbrijesh2004@gmail.com"
                      className="text-navy-800 hover:text-navy-600"
                    >
                      ahbrijesh2004@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-navy-700" />
                    </div>
                    <span className="text-navy-800">+91 6384665931</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <GraduationCap className="h-5 w-5 text-navy-700" />
                    </div>
                    <span className="text-navy-800">
                      B.E. CSE, Rajiv Gandhi College of Engineering
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy-100 p-3 rounded-full">
                      <Award className="h-5 w-5 text-navy-700" />
                    </div>
                    <span className="text-navy-800">
                      8.2 (up to seventh semester)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
