import React from "react";
import {
  Code,
  Brain,
  Smile,
  MessageSquare,
  Layers,
  BriefcaseBusinessIcon,
  Briefcase,
  BriefcaseConveyorBelt,
  LucideBriefcaseBusiness,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Animated from "./Animated";

const ProjectsSection = () => {
 const projects = [
  {
    title: "Demo DevOps Project",
    description:
      "Pipeline de déploiement automatisé avec GitHub Actions, Docker, Terraform. Projet de démonstration DevOps complet.",
    icon: <Layers className="h-8 w-8 text-navy-600" />,
    skills: ["GitHub Actions", "Docker", "Terraform", "CI/CD"],
    github: "https://github.com/faysal123455/demo_devops",
  },
  {
    title: "Advanced Terraform Infrastructure",
    description:
      "Projet avancé d'infrastructure as code avec Terraform (multi-environnement, modules, cloud-ready).",
    icon: <Code className="h-8 w-8 text-navy-600" />,
    skills: ["Terraform", "Cloud", "IaC", "Modular"],
    github: "https://github.com/faysal123455/advanced-terraform-3099246",
  },
  {
    title: "Next.js AI Chatbot",
    description:
      "Chatbot intelligent développé avec Next.js et intégration d’un modèle IA conversationnel.",
    icon: <Smile className="h-8 w-8 text-navy-600" />,
    skills: ["Next.js", "React", "AI", "JavaScript"],
    github: "https://github.com/faysal123455/nextjs-ai-chatbot",
  },
  {
    title: "Portfoliomatic",
    description:
      "Générateur de portfolio statique avec design réactif. Projet personnel déployé avec Vercel.",
    icon: <Briefcase className="h-8 w-8 text-navy-600" />,
    skills: ["React", "TailwindCSS", "Vercel", "TypeScript"],
    github: "https://github.com/faysal123455/Portfoliomatic",
  },
  {
    title: "DockerHub Automation",
    description:
      "Automatisation de la build et du push d’images Docker via pipeline CI/CD.",
    icon: <Layers className="h-8 w-8 text-navy-600" />,
    skills: ["Docker", "CI/CD", "GitHub Actions"],
    github: "https://github.com/faysal123455/dockerhub",
  },
  {
    title: "Jenkins Playground",
    description:
      "Tests et déploiements automatisés à l’aide de Jenkins dans différents pipelines de build.",
    icon: <Code className="h-8 w-8 text-navy-600" />,
    skills: ["Jenkins", "Pipeline", "DevOps", "Automation"],
    github: "https://github.com/faysal123455/jenkins",
  },
];


  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-navy-50"
    >
      <div className="container mx-auto px-4">
        <Animated>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Projects</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6 text-lg">
              Showcasing my work and technical accomplishments
            </p>
          </div>
        </Animated>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Animated key={index} delay={150 + index * 150} direction="up">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:no-underline h-full"
              >
                <Card className="h-full flex flex-col justify-between border border-navy-100 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl p-2 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-navy-900">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-grow space-y-4">
                    <CardDescription className="text-navy-700 text-sm leading-relaxed flex-grow">
                      {project.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-navy-50/50 text-navy-700 border-navy-200 backdrop-blur-sm font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
