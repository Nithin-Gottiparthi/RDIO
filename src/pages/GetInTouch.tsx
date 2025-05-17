import React from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion"; // Ensure you import motion

const GetInTouch = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "We've received your message and will get back to you soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section with animation */}
      <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl opacity-90">
              We'd love to hear from you. Reach out to us for any inquiries or feedback.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Please describe how we can help you" rows={5} required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information and Map */}
          <div className="space-y-8 animate-fade-in [animation-delay:0.2s]">
            {/* Contact Details */}
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:rdiohub@gmail.com" className="text-primary hover:underline">
                        rdiohub@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+917386471784" className="text-primary hover:underline">
                        +91-7386471784
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Instagram className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Social Media</p>
                      <a 
                        href="https://www.instagram.com/rdio_hub" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline"
                      >
                        @RDIO_HUB
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p>RDIO Hub, Khammam,<br />Telangana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-md overflow-hidden h-80">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60931.12101778924!2d80.09439309654115!3d17.249148426856832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a34440210d93157%3A0x9a826a1cd479f074!2sKhammam%2C%20Telangana!5e0!3m2!1sen!2sin!4v1653044896945!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RDIO Hub Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetInTouch;
