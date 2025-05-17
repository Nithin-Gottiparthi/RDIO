
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Lightbulb, FlaskConical, Wrench, Users, BookOpen, Microscope } from "lucide-react";

interface ProgramDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  outcomes: string[];
}

const ProgramDetail = ({ icon, title, description, features, outcomes }: ProgramDetailProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
      <div className="md:flex">
        <div className="p-8 md:w-2/3">
          <div className="flex items-center mb-4">
            <div className="bg-rdio-teal/10 p-3 rounded-full mr-4">
              <div className="text-rdio-teal">{icon}</div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          </div>
          
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-rdio-teal">Key Features</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rdio-teal mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 text-rdio-teal">Learning Outcomes</h4>
              <ul className="space-y-2">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rdio-teal mr-2">•</span>
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3 bg-gradient-to-br from-rdio-teal to-rdio-green flex items-center justify-center p-8 text-white">
          <div className="text-center">
            <div className="text-5xl mb-4">
              {icon}
            </div>
            <h4 className="text-xl font-semibold mb-2">Ready to Join?</h4>
            <p className="mb-4">Apply now for the {title}</p>
            <button className="px-4 py-2 bg-white text-rdio-teal rounded-md font-medium hover:bg-gray-100 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      icon: <Lightbulb size={32} />,
      title: "RDIO Research Excellence Program",
      description: "A comprehensive program focused on developing research skills and methodologies for innovation across various technology domains.",
      features: [
        "Mentorship from industry experts and researchers",
        "Access to state-of-the-art research facilities",
        "Opportunity to work on real-world research problems",
        "Publication and patent support",
      ],
      outcomes: [
        "Ability to conduct independent research",
        "Technical paper writing skills",
        "Critical thinking and problem-solving abilities",
        "Research methodology mastery",
      ]
    },
    {
      icon: <BookOpen size={32} />,
      title: "Curriculum Collaboration Program",
      description: "Bridging academic institutions and industry needs through specialized curriculum development and implementation.",
      features: [
        "Industry-aligned course content development",
        "Faculty development programs",
        "Lab establishment and modernization",
        "Student assessment frameworks",
      ],
      outcomes: [
        "Industry-ready curriculum implementation",
        "Enhanced teaching methodologies",
        "Practical skill development integration",
        "Continuous improvement frameworks",
      ]
    },
    {
      icon: <Microscope size={32} />,
      title: "Innovate & Intern Program",
      description: "Gain hands-on experience while working on innovative projects under expert guidance in a real-world setting.",
      features: [
        "Paid internship opportunities",
        "Project-based learning experience",
        "Industry mentor allocation",
        "Portfolio development support",
      ],
      outcomes: [
        "Practical work experience",
        "Project management skills",
        "Technical skill enhancement",
        "Industry networking opportunities",
      ]
    },
    {
      icon: <Wrench size={32} />,
      title: "Prototyping Program",
      description: "Turn ideas into reality with our comprehensive prototyping resources, facilities, and expert mentorship.",
      features: [
        "Access to prototyping labs and equipment",
        "Design thinking workshops",
        "Material and component support",
        "Testing and validation facilities",
      ],
      outcomes: [
        "Product development skills",
        "Prototyping techniques mastery",
        "Design iteration experience",
        "Manufacturing knowledge",
      ]
    },
    {
      icon: <Users size={32} />,
      title: "Science and Cultural Program",
      description: "Explore the intersection of science, technology, and culture through engaging activities and collaborative projects.",
      features: [
        "Science communication workshops",
        "Cultural exchange initiatives",
        "Interdisciplinary project opportunities",
        "Community outreach activities",
      ],
      outcomes: [
        "Science communication skills",
        "Cultural awareness in technology",
        "Community engagement experience",
        "Collaboration across disciplines",
      ]
    },
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Programs Offered</h1>
            <p className="text-xl opacity-90">
              Discover our range of innovative programs designed to bridge the gap between academia and industry
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto">
              At RDIO, we offer diverse programs across Engineering, Embedded Systems, Mechanical, Medical, Management, and Software sectors. Each program is designed to provide practical skills, industry exposure, and real-world experience.
            </p>
          </div>

          {programs.map((program, index) => (
            <ProgramDetail
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
              features={program.features}
              outcomes={program.outcomes}
            />
          ))}
          
          <div className="bg-white p-8 rounded-xl shadow-md mt-12">
            <h3 className="heading-md mb-6 text-center">Customized Programs for Organizations</h3>
            <p className="text-center text-gray-700 mb-8">
              We also offer customized programs for organizations looking to enhance their workforce skills or develop specific capabilities. Contact us to discuss your requirements.
            </p>
            <div className="text-center">
              <button className="btn-primary">
                Request Custom Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Programs;
