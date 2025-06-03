import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Users, Lightbulb, Target, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Layout>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About RDIO</h1>
              <p className="text-xl opacity-90">
                The Research & Innovation Hub - Building a Future of Practical Mastery
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 section-padding">
          <motion.div 
            className="max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-6">
              RDIO (Research Design Implement Operate) is India's premier innovation hub dedicated to bridging the gap between academic theory and real-world industry requirements. Founded by visionary Mr. Karthik Nama, RDIO has established itself as a center of excellence for practical skills development and research innovation.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-700 mb-8">
              Our mission is to empower students, engineers, and unskilled graduates by providing them with hands-on experience, industry connections, and the practical skills needed to succeed in today's rapidly evolving technological landscape.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <span className="bg-rdio-teal/10 text-rdio-teal px-3 py-1 rounded-full text-sm font-medium">Research Excellence</span>
              <span className="bg-rdio-green/10 text-rdio-green px-3 py-1 rounded-full text-sm font-medium">Hands-on Learning</span>
              <span className="bg-rdio-teal/10 text-rdio-teal px-3 py-1 rounded-full text-sm font-medium">Industry Collaboration</span>
              <span className="bg-rdio-green/10 text-rdio-green px-3 py-1 rounded-full text-sm font-medium">Innovation Hub</span>
              <span className="bg-rdio-teal/10 text-rdio-teal px-3 py-1 rounded-full text-sm font-medium">Practical Mastery</span>
            </motion.div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div>
              <h3 className="heading-sm mb-4 flex items-center">
                <Target className="text-rdio-teal mr-2" size={24} />
                Vision & Mission
              </h3>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-3 text-rdio-teal">Our Vision</h4>
                  <p className="mb-6 text-gray-700">
                    To create a world-class innovation ecosystem that nurtures practical skills and entrepreneurial mindsets, positioning India as a global leader in research and technology development.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-rdio-teal">Our Mission</h4>
                  <ul className="list-none space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1">
                        <Lightbulb className="text-rdio-teal" size={14} />
                      </span>
                      <span>Bridge the gap between academic knowledge and industry requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1">
                        <Lightbulb className="text-rdio-teal" size={14} />
                      </span>
                      <span>Provide hands-on training and practical experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1">
                        <Lightbulb className="text-rdio-teal" size={14} />
                      </span>
                      <span>Foster innovation and research excellence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1">
                        <Lightbulb className="text-rdio-teal" size={14} />
                      </span>
                      <span>Develop self-reliant professionals with entrepreneurial skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1">
                        <Lightbulb className="text-rdio-teal" size={14} />
                      </span>
                      <span>Create a collaborative ecosystem between academia and industry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="heading-sm mb-4 flex items-center">
                <Users className="text-rdio-teal mr-2" size={24} />
                Leadership Team
              </h3>
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                      <div className="bg-gradient-to-br from-rdio-teal to-rdio-green h-full flex items-center justify-center">
                        <span className="text-white text-5xl">KN</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-xl font-semibold mb-2">Mr. Karthik Nama</h4>
                    <p className="text-rdio-teal font-medium mb-3">Founder & Director, RDIO</p>
                    <p className="text-gray-700 mb-4">
                      Mr. Karthik Nama is a visionary leader with extensive experience in research, innovation, and education. With a passion for practical learning, he founded RDIO to transform how students and professionals develop skills and apply knowledge in real-world scenarios.
                    </p>
                    <p className="text-gray-700">
                      Under his guidance, RDIO has grown to become a premier innovation hub that collaborates with government bodies, academic institutions, and industry leaders to bridge the gap between theory and practice.
                    </p>
                  </div>
                </div>

                {/* New team member section */}
                <div className="border-t pt-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3">
                      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-br from-rdio-green to-rdio-teal h-full flex items-center justify-center">
                          <span className="text-white text-5xl">SN</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <h4 className="text-xl font-semibold mb-2">Mr. Srikanth Nama</h4>
                      <p className="text-rdio-green font-medium mb-3">Founder & Director, RDIO</p>
                      <p className="text-gray-700 mb-4">
                        Mr. Srikanth Nama is a purpose-driven leader with a background as a Chartered Accountant and a strong belief in the power of practical skills. He founded RDIO to address the limitations of traditional education and ensure learners are equipped for real-world success.
                      </p>
                      <p className="text-gray-700 mb-4">
                        His vision has shaped RDIO into a dynamic platform where theory meets application—empowering individuals across business, technology, and creative fields to unlock their potential through hands-on learning and meaningful skill development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What Makes Us Different */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="heading-md text-center mb-8 flex items-center justify-center">
              <BookOpen className="text-rdio-teal mr-2" size={24} />
              What Makes Us Different
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-rdio-teal">
                <h4 className="font-semibold text-lg mb-3">Practical Approach</h4>
                <p className="text-gray-700">
                  We focus on hands-on learning experiences that prepare students and professionals for real-world challenges, not just theoretical knowledge.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-rdio-green">
                <h4 className="font-semibold text-lg mb-3">Industry Integration</h4>
                <p className="text-gray-700">
                  Our programs are designed in collaboration with industry experts to ensure relevant skills development and job readiness.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-rdio-teal">
                <h4 className="font-semibold text-lg mb-3">Innovative Infrastructure</h4>
                <p className="text-gray-700">
                  State-of-the-art labs and research facilities provide the perfect environment for innovation, prototyping, and skill development.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Collaborations & Recognition */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="heading-md text-center mb-8 flex items-center justify-center">
              <Award className="text-rdio-teal mr-2" size={24} />
              Collaborations & Recognition
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-rdio-teal">Key Collaborations</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-teal font-semibold">01</span>
                    </span>
                    <div>
                      <h5 className="font-medium">MSME</h5>
                      <p className="text-sm text-gray-600">Ministry of Micro, Small & Medium Enterprises</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-teal font-semibold">02</span>
                    </span>
                    <div>
                      <h5 className="font-medium">NITI Aayog</h5>
                      <p className="text-sm text-gray-600">Policy Think Tank of Government of India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-teal font-semibold">03</span>
                    </span>
                    <div>
                      <h5 className="font-medium">Technical Universities</h5>
                      <p className="text-sm text-gray-600">Leading institutions across India</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-teal/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-teal font-semibold">04</span>
                    </span>
                    <div>
                      <h5 className="font-medium">Industry Partners</h5>
                      <p className="text-sm text-gray-600">Across Engineering, Medical, and Software sectors</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-xl font-semibold mb-4 text-rdio-green">Recognition</h4>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-rdio-green/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-green font-semibold">01</span>
                    </span>
                    <div>
                      <h5 className="font-medium">Bonjour India</h5>
                      <p className="text-sm text-gray-600">Featured at the Indo-French collaboration initiative</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-green/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-green font-semibold">02</span>
                    </span>
                    <div>
                      <h5 className="font-medium">ACMA Chennai</h5>
                      <p className="text-sm text-gray-600">Showcased at Automotive Component Manufacturers Association</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-green/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-green font-semibold">03</span>
                    </span>
                    <div>
                      <h5 className="font-medium">MSME Expo New Delhi</h5>
                      <p className="text-sm text-gray-600">Recognized for innovation excellence</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-rdio-green/10 p-1 rounded-full mr-3 mt-1 flex items-center justify-center min-w-[28px] h-7">
                      <span className="text-rdio-green font-semibold">04</span>
                    </span>
                    <div>
                      <h5 className="font-medium">Research & Innovation Awards</h5>
                      <p className="text-sm text-gray-600">Multiple awards for prototyping and student projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-rdio-teal to-rdio-green rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to join the innovation journey?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Discover our programs, explore our labs, or get in touch with us to learn how RDIO can help you bridge the gap between academic knowledge and practical skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/programs" className="bg-white text-rdio-teal px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Explore Programs
              </a>
              <a href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
