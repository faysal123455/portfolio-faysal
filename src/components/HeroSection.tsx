import React from "react";
import Animated from "./Animated";
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
          <div className="lg:col-span-7">
            <Animated direction="left">
              <div className="flex items-center mb-6">
                <div className="mr-4 hidden sm:block">
                  <Avatar className="h-24 w-24 border-4 border-navy-300">
                    <AvatarImage
                      src="/public/lovable-uploads/professional_photo_faysal.png" // 🔁 Place ici ton image réelle dans /public
                      alt="Faysal Sarker"
                    />
                    <AvatarFallback>FS</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-4">
                    Faysal SARKER
                  </h1>
                  <h2 className="text-xl md:text-2xl font-medium text-navy-600 mb-6">
                    Cybersécurité & Cloud • Ingénierie DevOps
                  </h2>
                </div>
              </div>
            </Animated>

            <Animated delay={150} direction="up">
              <p className="text-lg text-navy-800 mb-8 max-w-2xl">
                Actuellement en Master Cybersécurité & Cloud Computing, je suis passionné par les environnements techniques,
                l'automatisation (Ansible, Terraform, CI/CD), la conteneurisation (Docker, Kubernetes) et les infrastructures cloud (OpenStack, VMware).
                Je recherche une alternance à partir de septembre 2025 (1 sem. école / 3 sem. entreprise), pour contribuer à des projets concrets et innovants.
              </p>
            </Animated>

            <Animated delay={300} direction="up">
              <div className="flex flex-wrap gap-4">
                <Button className="bg-navy-700 hover:bg-navy-800 text-white">
                  <a href="/Faysal_SARKER_CV.pdf" download="Faysal_SARKER_CV.pdf">
                    Télécharger mon CV
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-navy-600 text-navy-700 hover:bg-navy-100"
                >
                  <a href="#contact">Me contacter</a>
                </Button>
              </div>
            </Animated>

            <Animated delay={450} direction="down">
              <div className="mt-16 hidden md:block">
                <a
                  href="#education"
                  className="flex items-center justify-center w-10 h-10 mx-auto rounded-full border border-navy-300 text-navy-600 hover:bg-navy-100 transition-colors duration-300"
                  aria-label="Scroll down"
                >
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </Animated>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Animated delay={600} direction="right">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-300 to-navy-500 transform rotate-3 scale-105 opacity-30 blur-sm"></div>
                <div className="rounded-2xl bg-white p-6 shadow-lg relative overflow-hidden border border-navy-100">
                  <div className="flex flex-col space-y-4">
                    <div className="sm:hidden flex justify-center mb-4">
                      <Avatar className="h-24 w-24 border-4 border-navy-300">
                        <AvatarImage
                          src="/public/lovable-uploads/professional_photo_faysal.png"
                          alt="Faysal Sarker"
                        />
                        <AvatarFallback>FS</AvatarFallback>
                      </Avatar>
                    </div>

                    {[
                      {
                        icon: <MapPin className="h-5 w-5 text-navy-700" />,
                        text: "Montreuil, Île-de-France, France",
                      },
                      {
                        icon: <Mail className="h-5 w-5 text-navy-700" />,
                        text: (
                          <a
                            href="mailto:faisaladnan700@gmail.com"
                            className="text-navy-800 hover:text-navy-600"
                          >
                            faisaladnan700@gmail.com
                          </a>
                        ),
                      },
                      {
                        icon: <Phone className="h-5 w-5 text-navy-700" />,
                        text: "06 62 06 40 83",
                      },
                      {
                        icon: <GraduationCap className="h-5 w-5 text-navy-700" />,
                        text: "Bac+3/4 Admin. Systèmes DevOps – Simplon.co",
                      },
                      {
                        icon: <Award className="h-5 w-5 text-navy-700" />,
                        text: "En cours : Master Cybersécurité & Cloud",
                      },
                    ].map((item, idx) => (
                      <Animated
                        key={idx}
                        delay={600 + idx * 100}
                        direction="right"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="bg-navy-100 p-3 rounded-full">
                            {item.icon}
                          </div>
                          <span className="text-navy-800">{item.text}</span>
                        </div>
                      </Animated>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
