import Layout from "@/components/layout/Layout";
import { MapPin, Award, Wrench, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Labs = () => {
  const [activeTab, setActiveTab] = useState("labs");
  
  const labs = [
    {
      location: "Telangana",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 24,
      description: "Our flagship lab focused on embedded systems and IoT innovation",
      address: "Hyderabad Technology Park, Telangana"
    },
    {
      location: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 18,
      description: "Research center for mechanical engineering and automation",
      address: "Innovation Hub, Visakhapatnam"
    },
    {
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      projects: 15,
      description: "Focused on medical technology and healthcare innovation",
      address: "Chennai Medical Tech Park, Tamil Nadu"
    },
  ];

  const projects = [
    {
      name: "Digital Fuel Meter",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Embedded Systems",
      description: "An advanced digital system for real-time monitoring of fuel consumption and efficiency in vehicles.",
      year: "2021",
      client: "Automotive Research Association"
    },
    {
      name: "Drainage Pipe Inspection and Cleaning Robot",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Robotics",
      description: "Autonomous robot designed to inspect and clean drainage pipes in urban infrastructure.",
      year: "2020",
      client: "Municipal Corporation"
    },
    {
      name: "Drowsiness Detection System",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Machine Learning",
      description: "AI-powered system that detects driver drowsiness and alerts them to prevent accidents.",
      year: "2022",
      client: "Transport Safety Association"
    }
  ];

  const prototypes = [
    {
      name: "IoT-Based Smart Agriculture System",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Development"
    },
    {
      name: "Wearable Health Monitor",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Prototyping"
    },
    {
      name: "Renewable Energy Optimization System",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Testing"
    },
    {
      name: "Smart Water Quality Monitor",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Research"
    }
  ];

  const awards = [
    {
      name: "Bonjour India 2018 Award",
      organization: "Indo-French Collaboration Initiative",
      year: "2018",
      description: "Recognized for innovation in sustainable technology solutions"
    },
    {
      name: "ACMA CEO Visit Recognition",
      organization: "Automotive Component Manufacturers Association",
      year: "2018",
      description: "Honored for advances in automotive technology research"
    },
    {
      name: "MSME R&D Sector Expo Award",
      organization: "Ministry of Micro, Small & Medium Enterprises",
      year: "2019",
      description: "Showcased as exemplary research & development organization"
    }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case "labs":
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {labs.map((lab, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow"
                variants={itemVariants}
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
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{lab.description}</h3>
                  <p className="text-sm text-gray-600">{lab.address}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case "projects":
        return (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
              >
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-full">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-rdio-teal bg-rdio-teal/10 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Year: {project.year}</span>
                      <span>Client: {project.client}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case "prototypes":
        return (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {prototypes.map((prototype, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
                variants={itemVariants}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={prototype.image}
                    alt={prototype.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">{prototype.name}</h3>
                  <span className="inline-block px-2 py-1 text-xs bg-rdio-teal/10 text-rdio-teal rounded-full">
                    {prototype.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      case "awards":
        return (
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-rdio-teal"
                variants={itemVariants}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{award.name}</h3>
                    <p className="text-gray-600 mb-3">{award.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{award.organization}</span>
                      <span>{award.year}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Award className="text-rdio-teal" size={40} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Labs & Projects</h1>
            <p className="text-xl opacity-90">
              Explore our state-of-the-art facilities and innovative projects driving technological advancement
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {[
              { id: "labs", label: "Our Labs" },
              { id: "projects", label: "Key Projects" },
              { id: "prototypes", label: "Prototype Gallery" },
              { id: "awards", label: "Awards & Recognition" }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                className={`${activeTab === tab.id ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="mb-12">
            {renderContent()}
          </div>
          
          {/* CTA section */}
          <Card className="mt-12 bg-gradient-to-br from-rdio-teal/10 to-rdio-green/10 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="heading-md mb-4">Collaborate with RDIO</h3>
              <p className="mb-6 max-w-2xl mx-auto text-gray-700">
                Interested in working with our research labs or collaborating on a project? 
                We're always looking for partners who share our passion for innovation.
              </p>
              <Button className="btn-primary">
                Contact for Collaboration
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Labs;
