import React from "react";
import { Code, Brain, Smile, MessageSquare, Layers } from "lucide-react";
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
      title: "Sentence Emotion Predictor",
      description:
        "Built an RNN-based NLP model to predict sentence emotions with 82% accuracy. Processes real-world conversational text, classifies emotions into categories like happy, sad, angry, etc., and integrates into chatbots or feedback systems to improve user engagement.",
      icon: <Smile className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "RNN", "TensorFlow", "Keras"],
      github: "https://github.com/AHBRIJESH/Sentence_Emotion_Predictor.git",
    },
    {
      title: "Handwriting Style Converter",
      description:
        "Created a GAN-based system to convert handwriting styles in real-time with 89% accuracy. This tool enables documents to be written in personalized or historical handwriting styles, enhancing document design and offering creative expression in digital forms.",
      icon: <Code className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "GAN", "Computer Vision", "PyTorch"],
      github: "https://github.com/AHBRIJESH/Handwritten-Digit-Predection.git",
    },
    {
      title: "Face Recognition Auto Attendance System",
      description:
        "Developed a CNN-based AI system for automatic attendance tracking in enterprises. Integrated Flask and MySQL to log users efficiently, reducing manual effort by 60% and achieving 87% recognition accuracy. Features include dashboard analytics and real-time monitoring.",
      icon: <Layers className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "CNN", "Flask", "MySQL", "TensorFlow"],
      github:
        "https://github.com/AHBRIJESH/Face_Recognition_Auto_Attendance_System.git",
    },
    {
      title: "Academic Grade Predictor",
      description:
        "Built a machine learning model to predict academic grades based on study patterns, attendance, and participation. Achieved 92% accuracy and assists educators in tailoring interventions. Provides detailed performance reports and identifies at-risk students early.",
      icon: <Brain className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"],
      github: "https://github.com/AHBRIJESH/Academic_Grade_Predictor.git",
    },
    {
      title: "Suicidal Prevention Chatbot",
      description:
        "Developing an AI-driven mental health chatbot that detects distress signals and responds empathetically. Uses NLP and Seq2Seq to analyze conversations, offering support and escalating to professionals if necessary. Includes sentiment tracking and anonymized reports.",
      icon: <MessageSquare className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "Seq2Seq", "TensorFlow", "Mental Health"],
      github: "https://github.com/AHBRIJESH/Sucide_Mitigation_Chatbot.git",
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
