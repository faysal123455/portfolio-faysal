import React from "react";
import { Book, Star, Users, Award } from "lucide-react";
import Animated from "./Animated";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <Animated direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Formation</h2>
            <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
          </div>
        </Animated>

        {/* Formation 1 */}
        <Animated direction="up" delay={150}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-navy-100 mb-10">
            <div className="p-6 md:p-8">
              <Animated direction="left" delay={200}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      Bac+3/4 Administrateur Systèmes DevOps
                    </h3>
                    <p className="text-navy-600 mt-1">
                      Simplon.co – Montreuil, France (2024 – 2025)
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 bg-navy-50 px-4 py-2 rounded-full">
                    <p className="text-navy-700 font-medium">Diplôme validé</p>
                  </div>
                </div>
              </Animated>

              <div className="space-y-4">
                {[
                  {
                    icon: <Book className="h-5 w-5 text-navy-700" />,
                    text: "Compétences acquises : OpenStack, Docker, Kubernetes, Terraform, Ansible, CI/CD (GitHub, Jenkins, GitLab), Monitoring avec Prometheus & Grafana.",
                  },
                  {
                    icon: <Star className="h-5 w-5 text-navy-700" />,
                    text: "Infrastructure cloud simulée, automatisation des déploiements, sécurisation des accès SSH et configuration réseau.",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-navy-700" />,
                    text: "Travail en équipe sur des projets d’infrastructure DevOps avec soutenance finale.",
                  },
                ].map((item, idx) => (
                  <Animated key={idx} direction="right" delay={300 + idx * 150}>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">{item.icon}</div>
                      <p className="text-navy-800">{item.text}</p>
                    </div>
                  </Animated>
                ))}
              </div>
            </div>
          </div>
        </Animated>

        {/* Formation 2 */}
        <Animated direction="up" delay={500}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-navy-100 mb-10">
            <div className="p-6 md:p-8">
              <Animated direction="left" delay={550}>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-navy-900">
                      Bac+2 Développeur Web & Web Mobile (alternance)
                    </h3>
                    <p className="text-navy-600 mt-1">
                      Simplon – Aulnay-sous-Bois, France (2022 – 2024)
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 bg-navy-50 px-4 py-2 rounded-full">
                    <p className="text-navy-700 font-medium">Diplôme validé</p>
                  </div>
                </div>
              </Animated>

              <div className="space-y-4">
                {[
                  {
                    icon: <Book className="h-5 w-5 text-navy-700" />,
                    text: "Compétences : HTML/CSS, JavaScript, Node.js, MongoDB, React, Git, API REST.",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-navy-700" />,
                    text: "Développement de projets web en équipe, méthode agile, gestion de projet.",
                  },
                ].map((item, idx) => (
                  <Animated key={idx} direction="right" delay={600 + idx * 150}>
                    <div className="flex items-start">
                      <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">{item.icon}</div>
                      <p className="text-navy-800">{item.text}</p>
                    </div>
                  </Animated>
                ))}
              </div>
            </div>
          </div>
        </Animated>

        {/* Autres formations */}
        <Animated direction="up" delay={900}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-navy-100">
            <div className="p-6 md:p-8">
              <Animated direction="left" delay={950}>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy-900">
                    Autres formations
                  </h3>
                </div>
              </Animated>

              <ul className="list-disc pl-6 space-y-2 text-navy-800">
                <li>
                  Certification en gestion de projet agile – Simplon, 2023
                </li>
                <li>
                  Formation Intégrateur & Développeur Web – Simplon, 2022
                </li>
                <li>
                  Niveau Baccalauréat (comptabilité) – British Council Bangladesh, 2018–2019
                </li>
              </ul>
            </div>
          </div>
        </Animated>
      </div>
    </section>
  );
};

export default EducationSection;
