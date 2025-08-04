import React from "react";
import {
  Cloud,
  Server,
  Terminal,
  Code2,
  Layers,
  Settings2,
  Paintbrush2,
  Database,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Animated from "./Animated";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Cloud & Virtualisation",
      icon: <Cloud className="h-8 w-8 text-navy-600" />,
      skills: [
        "Azure (NSG, RG, Load Balancer, Auto-scaling)",
        "VMware",
        "Vagrant",
        "Incus (LXC)",
        "MicroStack (OpenStack)",
        "OpenStack Horizon",
      ],
    },
    {
      title: "Conteneurisation & Orchestration",
      icon: <Server className="h-8 w-8 text-navy-600" />,
      skills: [
        "Docker & Docker Compose",
        "Kubernetes (k3s, Helm)",
        "Docker Swarm",
        "Rancher",
        "Portainer",
        "Redis",
      ],
    },
    {
      title: "Infrastructure as Code & CI/CD",
      icon: <Settings2 className="h-8 w-8 text-navy-600" />,
      skills: [
        "Terraform (IaC)",
        "Ansible",
        "Jenkins",
        "GitHub Actions, GitLab CI, Bitbucket Pipelines",
        "ArgoCD",
      ],
    },
    {
      title: "Langages & Développement",
      icon: <Code2 className="h-8 w-8 text-navy-600" />,
      skills: [
        "Bash",
        "Python",
        "PowerShell",
        "Node.js",
        "FastAPI",
        "API REST",
      ],
    },
    {
      title: "Front-End",
      icon: <Paintbrush2 className="h-8 w-8 text-navy-600" />,
      skills: [
        "HTML / CSS / Sass",
        "JavaScript / TypeScript",
        "React.js",
        "Angular",
        "Bootstrap",
      ],
    },
    {
      title: "Back-End & Bases de Données",
      icon: <Database className="h-8 w-8 text-navy-600" />,
      skills: [
        "Node.js",
        "MySQL",
        "API REST",
      ],
    },
    {
      title: "Outils & Supervision",
      icon: <Layers className="h-8 w-8 text-navy-600" />,
      skills: [
        "Linux (Ubuntu, Debian)",
        "GitHub / GitLab / Bitbucket",
        "Prometheus",
        "Grafana",
        "Node Exporter",
        "AlertManager",
        "Zabbix",
        "Vault",
        "Locky",
      ],
    },
    {
      title: "Sécurité & Accès",
      icon: <ShieldCheck className="h-8 w-8 text-navy-600" />,
      skills: [
        "UFW (pare-feu Ubuntu)",
        "Configuration SSH sécurisée (désactivation root, restriction des accès)",
      ],
    },
    {
      title: "Méthodologies & Outils de gestion",
      icon: <Terminal className="h-8 w-8 text-navy-600" />,
      skills: [
        "Méthode Agile & SCRUM",
        "Jira",
        "Figma",
        "Storybook",
        "Illustrator & Photoshop",
        "WordPress",
        "Rédaction de documentation technique",
        "Analyse et résolution d'incidents",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Compétences Techniques
          </h2>
          <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
          <p className="text-navy-700 mt-6">
            Technologies que je maîtrise et utilise dans mes projets DevOps, Cloud et Développement Full Stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Animated
              key={index}
              delay={index * 150}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="bg-white rounded-lg shadow-md p-6 border border-navy-100 h-full">
                <div className="flex items-center mb-6">
                  <div className="bg-navy-100 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-navy-500 mr-2" />
                      <span className="text-navy-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
