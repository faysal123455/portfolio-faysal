
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
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-navy-400 to-navy-600 mx-auto rounded-full"></div>
          <p className="text-navy-700 mt-6 text-lg">Showcasing my work and technical accomplishments</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            project.github ? (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index}
                className="block transform hover:scale-[1.02] transition-all duration-300 hover:no-underline"
              >
                <Card className="h-full border border-navy-100 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <CardHeader className="pb-2 space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl p-2 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-navy-900">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <CardDescription className="text-navy-700 text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
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
            ) : (
              <Card 
                key={index}
                className="h-full border border-navy-100 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <CardHeader className="pb-2 space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl p-2 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-navy-700 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
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
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
