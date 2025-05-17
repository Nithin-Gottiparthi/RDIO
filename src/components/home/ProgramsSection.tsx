
import { Lightbulb, FlaskConical, Wrench, Users, BookOpen, Microscope } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "../ui/SectionHeading";

interface ProgramCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProgramCard = ({ icon, title, description }: ProgramCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-t-4 border-rdio-teal group hover:-translate-y-1 duration-300">
      <div className="bg-rdio-teal/10 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-rdio-teal/20 transition-colors">
        <div className="text-rdio-teal">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to="/programs"
        className="text-rdio-teal hover:text-rdio-darkGreen font-medium inline-flex items-center"
      >
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Lightbulb size={24} />,
      title: "RDIO Research Excellence Program",
      description:
        "A comprehensive program focused on developing research skills and methodologies for innovation.",
    },
    {
      icon: <BookOpen size={24} />,
      title: "Curriculum Collaboration Program",
      description:
        "Bridging academic institutions and industry needs through specialized curriculum development.",
    },
    {
      icon: <Microscope size={24} />,
      title: "Innovate & Intern Program",
      description:
        "Gain hands-on experience while working on innovative projects under expert guidance.",
    },
    {
      icon: <Wrench size={24} />,
      title: "Prototyping Program",
      description:
        "Turn ideas into reality with our comprehensive prototyping resources and mentorship.",
    },
    {
      icon: <Users size={24} />,
      title: "Science and Cultural Program",
      description:
        "Explore the intersection of science, technology, and culture through engaging activities.",
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Technical Skill Development",
      description:
        "Master practical technical skills through hands-on training and expert-led workshops.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Programs Offered"
          subtitle="Discover our range of innovative programs designed to bridge the gap between academia and industry"
          center={true}
        />

        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At RDIO, we offer diverse programs across Engineering, Embedded Systems, Mechanical, Medical, Management, and Software sectors. Each program is designed to provide practical skills, industry exposure, and real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-primary">
            <Link to="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
