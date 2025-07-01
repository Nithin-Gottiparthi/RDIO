import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "India's Innovation Hub";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let loopTimeout: NodeJS.Timeout;

    function typeLoop() {
      if (!isDeleting) {
        if (currentIndex < targetText.length) {
          setTypedText(targetText.substring(0, currentIndex + 1));
          currentIndex++;
          loopTimeout = setTimeout(typeLoop, 100);
        } else {
          isDeleting = true;
          loopTimeout = setTimeout(typeLoop, 1200); // Pause before deleting
        }
      } else {
        if (currentIndex > 0) {
          setTypedText(targetText.substring(0, currentIndex - 1));
          currentIndex--;
          loopTimeout = setTimeout(typeLoop, 50);
        } else {
          isDeleting = false;
          loopTimeout = setTimeout(typeLoop, 500); // Pause before typing again
        }
      }
    }

    typeLoop();
    return () => clearTimeout(loopTimeout);
  }, []);

  // Created an array of RDIO steps to display
  // const rdioSteps = [
  //   { letter: "R", word: "RESEARCH", color: "bg-rdio-teal" },
  //   { letter: "D", word: "DESIGN", color: "bg-rdio-green" },
  //   { letter: "I", word: "IMPLEMENT", color: "bg-rdio-teal" },
  //   { letter: "O", word: "OPERATE", color: "bg-rdio-green" },
  // ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-rdio-teal transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-rdio-green transform translate-x-1/3 translate-y-1/2 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="flex justify-center mb-6">
          <Logo variant="color" className="mb-6 h-28 w-auto" />
        </div>
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-12">
          The Research & Innovation Hub India
        </h1>
        <div className="max-w-4xl mx-auto text-center">


          <div className="animate-fade-in">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Practical Mastery
            </h1>
            <div className="h-16">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-rdio-teal mb-8">
                RDIO{" "}
                <span className="inline-block">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            {/* RDIO steps */}
            {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
              {rdioSteps.map((step, index) => (
                <div 
                  key={index} 
                  className={`${step.color} text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center`}
                >
                  <span className="font-bold text-lg md:text-xl">{step.letter}</span>
                  <span className="text-xs">{step.word}</span>
                </div>
              ))}
            </div>
             */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Empowering students, engineers, and graduates by bridging the gap between academic theory and real-world skills.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary">
                <Link to="/about" className="flex items-center">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button className="btn-secondary">
                <Link to="/programs">View Programs</Link>
              </Button>
              <Button variant="outline" className="border-white text-gray hover:bg-gray hover:text-gray-900">
                <Link to="/contact">Join Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default HeroSection;
