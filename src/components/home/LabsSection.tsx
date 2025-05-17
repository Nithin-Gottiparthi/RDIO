
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "../ui/SectionHeading";

const LabsSection = () => {
  const labs = [
    {
      location: "Telangana",
      image: "https://images.unsplash.com/photo-1487958449943-2429e9be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 24,
    },
    {
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 18,
    },
    {
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 15,
    },
  ];

  const projects = [
    {
      name: "Digital Fuel Meter",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Embedded Systems",
    },
    {
      name: "Drowsiness Detection System",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning",
    },
    {
      name: "Smart Healthcare Monitor",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Medical Technology",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Labs & Projects"
          subtitle="Explore our state-of-the-art labs and innovative projects across different locations"
          center={true}
        />

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RDIO maintains advanced research and development facilities across multiple locations in India, 
            enabling students and researchers to work on cutting-edge projects with industry-standard equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {labs.map((lab, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={lab.image}
                  alt={`RDIO Lab in ${lab.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="mr-1 text-rdio-teal" />
                    <span>{lab.location}</span>
                  </div>
                  <p className="text-sm text-gray-200">{lab.projects} Projects</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="heading-md text-center mb-8">Featured Projects</h3>
          <div className="text-center mb-8">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our project portfolio showcases the innovative work being done across various technology domains,
              with a focus on practical applications and industry relevance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-rdio-teal bg-rdio-teal/10 rounded-full">
                    {project.category}
                  </span>
                  <h4 className="font-semibold text-gray-800">{project.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-primary">
            <Link to="/labs">Explore All Labs & Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LabsSection;
