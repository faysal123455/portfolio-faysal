import React from "react";
import { Calendar, CheckCircle } from "lucide-react";
import Animated from "./Animated";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Administrateur Système DevOps (alternance)",
      company: "Ministère de l’Enseignement Supérieur • Supméca, Saint-Ouen",
      period: "Mars 2025 – Juin 2025",
      description: [
        "Mise en place d’une infrastructure cloud privée à base d’OpenStack (MicroStack) sur VMware.",
        "Automatisation du déploiement des services avec Ansible, Docker, Terraform.",
        "Mise en place d’une stack de supervision Prometheus + Grafana.",
        "Documentation technique complète, sécurisation des accès SSH, gestion des utilisateurs et journaux système.",
      ],
    },
    {
      title: "Développeur Web (alternance)",
      company: "Pernod Ricard France (Siège Paris)",
      period: "Janvier 2023 – Janvier 2024",
      description: [
        "Participation au développement du portail interne de données (Data Portal).",
        "Intégration d’API internes, dashboard interactif avec React et Node.js.",
        "Déploiement continu via GitLab CI/CD, et conteneurisation avec Docker.",
        "Collaboration avec des équipes data et techniques dans un environnement Agile.",
      ],
    },
    {
      title: "Projets personnels & certifications",
      company:
        "Réalisation de projets techniques DevOps et suivi de formations certifiantes",
      period: "",
      description: [
        "Projet : Déploiement CI/CD avec GitHub Actions + Docker Hub + VPS cloud.",
        "Certificat : Gestion de projet agile (Simplon, 2023).",
        "Missions techniques personnelles : FastAPI, Zabbix, Locky, Vault, portainer.io…",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <Animated direction="up" delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Expériences Professionnelles
            </h2>
            <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6">
              Alternances et projets concrets dans le domaine du DevOps, cloud et développement
            </p>
          </div>
        </Animated>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <Animated
              key={index}
              direction="up"
              delay={150 + index * 200}
              duration={600}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-navy-100 transition-transform duration-300 hover:transform hover:scale-[1.01]">
                <div className="p-6 md:p-8">
                  <Animated direction="left" delay={200}>
                    <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-navy-600 mt-2">{exp.company}</p>
                        )}
                      </div>
                      {exp.period && (
                        <div className="mt-2 md:mt-0 flex items-center bg-navy-50 px-4 py-2 rounded-full">
                          <Calendar className="h-4 w-4 text-navy-700 mr-2" />
                          <p className="text-navy-700 font-medium">
                            {exp.period}
                          </p>
                        </div>
                      )}
                    </div>
                  </Animated>

                  <div className="space-y-3">
                    {exp.description.map((item, i) => (
                      <Animated
                        key={i}
                        direction="right"
                        delay={300 + i * 100}
                        duration={500}
                      >
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-navy-800">{item}</p>
                        </div>
                      </Animated>
                    ))}
                  </div>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
