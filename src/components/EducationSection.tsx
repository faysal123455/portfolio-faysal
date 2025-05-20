import React from "react";
import { Book, Star, Users, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Education</h2>
          <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-navy-100">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  BE CSE | Rajiv Gandhi College of Engineering
                </h3>
                <p className="text-navy-600 mt-1">
                  Pursuing Bachelor's in Computer Science Engineering
                </p>
              </div>
              <div className="mt-2 md:mt-0 bg-navy-50 px-4 py-2 rounded-full">
                <p className="text-navy-700 font-medium">CGPA: 8.2</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">
                  <Book className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-navy-800">
                    Completed the seventh semester and currently in the eighth
                    semester
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">
                  <Star className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-navy-800">
                    Demonstrates strong academic performance with a focus on
                    technical and analytical skills
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-navy-800">
                    Collaborates with peers and faculty on academic projects,
                    group discussions, and research initiatives
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-navy-100 p-2 rounded-full">
                  <Award className="h-5 w-5 text-navy-700" />
                </div>
                <div>
                  <p className="text-navy-800">
                    Relevant coursework: Data Structures, Algorithms, Database
                    Management, Machine Learning, Artificial Intelligence,
                    Computer Networks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
