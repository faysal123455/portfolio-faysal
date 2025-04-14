
import React from 'react';
import { Code, Brain, Smile, MessageSquare, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sentence Emotion Predictor",
      description: "Developed an RNN-based NLP model to predict sentence emotions with 82% accuracy.",
      icon: <Smile className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "RNN", "TensorFlow", "Keras"],
      github: "https://github.com/AHBRIJESH/Sentence_Emotion_Predictor.git"
    },
    {
      title: "Handwriting Style Converter",
      description: "Created a GAN model to convert handwriting styles in real-time with 89% accuracy.",
      icon: <Code className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "GAN", "Computer Vision", "PyTorch"]
    },
    {
      title: "Face Recognition Auto Attendance System",
      description: "Developed a CNN-based AI system for automatic attendance tracking in enterprises. Integrated Flask and MySQL, reducing manual effort by 60% with 87% recognition accuracy.",
      icon: <Layers className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "CNN", "Flask", "MySQL", "TensorFlow"]
    },
    {
      title: "Academic Grade Predictor",
      description: "Developed a predictive analytics model for the education industry to assess student performance based on study patterns. Used Machine Learning to achieve 92% accuracy, assisting educators in curriculum adjustments.",
      icon: <Brain className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "Machine Learning", "Data Analysis", "Scikit-learn"]
    },
    {
      title: "Suicidal Prevention Chatbot",
      description: "Developing an AI-driven mental health chatbot to detect distress signals in conversations. Using Seq2Seq and Natural Language Processing to provide empathetic responses and support users in mental health awareness initiatives.",
      icon: <MessageSquare className="h-8 w-8 text-navy-600" />,
      skills: ["Python", "NLP", "Seq2Seq", "TensorFlow", "Mental Health"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Projects</h2>
          <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
          <p className="text-navy-700 mt-6">Showcasing my work and technical accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            project.github ? (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index}
                className="block hover:no-underline"
              >
                <Card 
                  className="border border-navy-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-3">{project.icon}</div>
                    <CardTitle className="text-navy-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-navy-700 text-sm mb-6">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="bg-navy-50 text-navy-700 border-navy-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ) : (
              <Card 
                key={index}
                className="border border-navy-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                <CardHeader className="pb-2">
                  <div className="mb-3">{project.icon}</div>
                  <CardTitle className="text-navy-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-navy-700 text-sm mb-6">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="bg-navy-50 text-navy-700 border-navy-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
