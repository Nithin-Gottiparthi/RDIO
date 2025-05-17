
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "../ui/SectionHeading";
import Logo from "../ui/Logo";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-4">
              <Logo variant="gearCap" size="sm" className="mr-3" />
              <span className="text-rdio-teal font-semibold">Research Design Implement Operate</span>
            </div>
            
            <SectionHeading
              title="What is RDIO?"
              subtitle="India's Innovative Hub for Bridging Academia and Industry"
            />
            
            <p className="text-gray-700 mb-6">
              RDIO is a research and innovation hub founded by Mr. Karthik Nama with a mission to 
              empower students, engineers, and graduates with practical skills that bridge 
              the gap between academic theory and industry requirements.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our innovative programs span across key sectors including Engineering, 
              Embedded Systems, Mechanical, Medical, Management, and Software, providing 
              hands-on experience and practical mastery.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">
                <Link to="/about" className="flex items-center">
                  Learn More About Us <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-white p-6 rounded-xl shadow-lg">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg mb-6">
              <div className="flex justify-center items-center p-6 bg-gradient-to-br from-rdio-teal/10 to-rdio-green/10">
                <Logo variant="color" size="xl" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-rdio-teal mb-1">Our Vision</h3>
                <p className="text-sm text-gray-600">
                  To create a world-class innovation ecosystem that nurtures practical skills and entrepreneurial mindsets.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-rdio-teal mb-1">Our Mission</h3>
                <p className="text-sm text-gray-600">
                  Empower individuals with practical knowledge and skills for real-world success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
