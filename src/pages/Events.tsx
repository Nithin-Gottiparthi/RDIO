
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLink, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const Events = () => {
  const [activeGalleryTab, setActiveGalleryTab] = useState("tisf");

  const galleryItems = {
    tisf: [
      {
        id: 2,
        title: "Winners Hackathon",
        image: "/images/hackathon.JPG",
        date: "December 2024"
      },
      {
        id: 3,
        title: "Student Celebrations",
        image: "/images/hackathon1.JPG",
        date: "March 16, 2024"
      },
      {
        id: 4,
        title: "Award Ceremony",
        image: "/images/hackathon2.JPG",
        date: "March 17, 2024"
      },
      {
        id: 5,
        title: "Award Ceremony",
        image: "/images/karthik.JPG",
        date: "March 17, 2024"
      },
      {
        id: 6,
        title: "Award Ceremony",
        image: "/images/hck1.JPG",
        date: "March 17, 2024"
      },
      {
        id: 7,
        title: "Award Ceremony",
        image: "/images/hck2.JPG",
        date: "March 17, 2024"
      },
      {
        id: 8,
        title: "Award Ceremony",
        image: "/images/hck3.JPG",
        date: "March 17, 2024"
      },
      {
        id: 9,
        title: "Award Ceremony",
        image: "/images/hck4.JPG",
        date: "March 17, 2024"
      },
      {
        id: 10,
        title: "Award Ceremony",
        image: "/images/hck5.JPG",
        date: "March 17, 2024"
      },
      {
        id: 11,
        title: "Award Ceremony",
        image: "/images/hck6.JPG",
        date: "March 17, 2024"
      },
    ],
    previous: [
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img10.jpg",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img1.png",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img2.jpg",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img3.webp",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img4.png",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img6.png",
        date: "November 10, 2023"
      },
      {
        id: 12,
        title: "RDIO Expo 2023",
        image: "/images/img5.jpg",
        date: "November 11, 2023"
      },
      {
        id: 13,
        title: "Innovation Workshop",
        image: "/images/hckp2.JPG",
        date: "September 5, 2023"
      },
      {
        id: 14,
        title: "Tech Symposium",
        image: "/images/hckp3.JPG",
        date: "July 22, 2023"
      },
      {
        id: 15,
        title: "Tech Symposium",
        image: "/images/hckp4.JPG",
        date: "July 22, 2023"
      },
      {
        id: 16,
        title: "Tech Symposium",
        image: "/images/hckp5.JPG",
        date: "July 22, 2023"
      },
      {
        id: 17,
        title: "Tech Symposium",
        image: "/images/hckp6.JPG",
        date: "July 22, 2023"
      },
      {
        id: 18,
        title: "Tech Symposium",
        image: "/images/hckp7.JPG",
        date: "July 22, 2023"
      },
      {
        id: 19,
        title: "Tech Symposium",
        image: "/images/hckp8.JPG",
        date: "July 22, 2023"
      },
      {
        id: 20,
        title: "Tech Symposium",
        image: "/images/hckp9.JPG",
        date: "July 22, 2023"
      },
      {
        id: 21,
        title: "Tech Symposium",
        image: "/images/hckp10.JPG",
        date: "July 22, 2023"
      },
      {
        id: 22,
        title: "Tech Symposium",
        image: "/images/hckp11.JPG",
        date: "July 22, 2023"
      },
      {
        id: 23,
        title: "Tech Symposium",
        image: "/images/hckp12.JPG",
        date: "July 22, 2023"
      },
      {
        id: 24,
        title: "Tech Symposium",
        image: "/images/hckp13.JPG",
        date: "July 22, 2023"
      },
    ],
    kids: [
      {
        id: 1,
        title: "Kids Carnival",
        image: "/images/kids-carnival.JPG",
        date: "August 2024"
      },
      {
        id: 25,
        title: "Kids Carnival",
        image: "/images/kds1.JPG",
        date: "August 2024"
      },
      {
        id: 26,
        title: "Kids Carnival",
        image: "/images/kds2.JPG",
        date: "August 2024"
      },
      {
        id: 27,
        title: "Kids Carnival",
        image: "/images/kds3.JPG",
        date: "August 2024"
      },
      {
        id: 28,
        title: "Kids Carnival",
        image: "/images/kds4.JPG",
        date: "August 2024"
      },
      {
        id: 29,
        title: "Kids Carnival",
        image: "/images/kds5.JPG",
        date: "August 2024"
      },
      {
        id: 30,
        title: "Kids Carnival",
        image: "/images/kds6.JPG",
        date: "August 2024"
      },
      {
        id: 31,
        title: "Kids Carnival",
        image: "/images/kds7.JPG",
        date: "August 2024"
      },
      {
        id: 32,
        title: "Kids Carnival",
        image: "/images/kds8.JPG",
        date: "August 2024"
      },
      {
        id: 33,
        title: "Kids Carnival",
        image: "/images/kds9.JPG",
        date: "August 2024"
      },
      {
        id: 34,
        title: "Kids Carnival",
        image: "/images/kds10.JPG",
        date: "August 2024"
      },
      {
        id: 35,
        title: "Kids Carnival",
        image: "/images/kds11.JPG",
        date: "August 2024"
      },
      {
        id: 36,
        title: "Kids Carnival",
        image: "/images/kds12.JPG",
        date: "August 2024"
      },
      {
        id: 37,
        title: "Kids Carnival",
        image: "/images/kds13.JPG",
        date: "August 2024"
      },
    ]

  };

  return (
    <Layout>
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tech Events</h1>
            <p className="text-xl opacity-90">
              Celebrating innovation and scientific excellence across India
            </p>
          </div>
        </div>
      </div>

      {/* TISF 2024 Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Telangana International Science Festival 2024"
            subtitle="Empowering Tomorrow's Innovators, Sustaining Telangana's Progress"
            center={true}
          />

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mission & Vision</h3>
              <p className="text-gray-700 mb-4">
                The Telangana International Science Festival aims to celebrate scientific innovation, foster collaboration, and inspire the next generation of researchers and innovators. Our vision is to position Telangana as a global hub for scientific excellence and sustainable development.
              </p>
              <p className="text-gray-700 mb-6">
                TISF brings together students, researchers, industry leaders, and policymakers to address pressing challenges and showcase groundbreaking solutions that will shape our future.
              </p>
              <div className="flex items-center text-rdio-teal">
                <Calendar className="mr-2" size={20} />
                <span className="font-medium">March 15-17, 2024</span>
                <span className="mx-3">|</span>
                <MapPin className="mr-2" size={20} />
                <span className="font-medium">Hyderabad Convention Center</span>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/img27.jpg"
                alt="TISF 2024"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* FUTURA-2024 */}
          <div className="bg-gray-50 rounded-xl p-8 my-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">FUTURA-2024 Talent Scouting Initiative</h3>
                <p className="text-gray-600">Discovering tomorrow's scientific leaders across Telangana</p>
              </div>
              <Button className="bg-rdio-teal hover:bg-rdio-teal/90 mt-4 md:mt-0">
                Learn More <ExternalLink size={16} className="ml-1" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="border-t-4 border-rdio-teal">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2">Local Participation</h4>
                  <p className="text-gray-600">
                    Students from schools and colleges across all districts of Telangana participate in local science competitions and submit their innovative project proposals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-rdio-teal">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2">Regional Selection</h4>
                  <p className="text-gray-600">
                    Selected projects advance to regional competitions where participants receive mentorship from industry experts and academic professionals.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-rdio-teal">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-2">Hyderabad Finals</h4>
                  <p className="text-gray-600">
                    The top talents showcase their refined projects at the TISF grand finale in Hyderabad, competing for recognition and support for further development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Event Gallery"
            subtitle="Explore moments from TISF and previous RDIO expos"
            center={true}
          />

          <div className="flex flex-wrap justify-center mb-8">

            <Button
              variant={activeGalleryTab === "tisf" ? "default" : "outline"}
              className={`m-1 ${activeGalleryTab === "tisf" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveGalleryTab("tisf")}
            >
              Hackathon
            </Button>
            <Button
              variant={activeGalleryTab === "kids" ? "default" : "outline"}
              className={`m-1 ${activeGalleryTab === "kids" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveGalleryTab("kids")}
            >
              Kids Carnival
            </Button>
            <Button
              variant={activeGalleryTab === "previous" ? "default" : "outline"}
              className={`m-1 ${activeGalleryTab === "previous" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveGalleryTab("previous")}
            >
              Previous Events
            </Button>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeGalleryTab}
          >
            {galleryItems[activeGalleryTab].map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
              >
                <div className="relative h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-rdio-teal/10 to-rdio-green/10 border-none">
            <CardContent className="p-8 text-center">
              <h3 className="heading-md mb-4">Register for Upcoming Events</h3>
              <p className="mb-6 max-w-2xl mx-auto text-gray-700">
                Don't miss the opportunity to be part of our innovative events and exhibitions.
                Register today to secure your place in the future of innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="btn-primary">
                  Register for TISF 2024
                </Button>
                <Button variant="outline" className="border-rdio-teal text-rdio-teal hover:bg-rdio-teal hover:text-white">
                  View All Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
