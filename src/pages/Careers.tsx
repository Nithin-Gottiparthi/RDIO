
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, ListCheck } from "lucide-react";

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  college: z.string().min(2, {
    message: "College name is required.",
  }),
  position: z.string().min(2, {
    message: "Please select a position.",
  }),
  message: z.string().optional(),
});

const Careers = () => {
  const [activeTab, setActiveTab] = useState("engineering");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      college: "",
      position: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Application submitted!",
      description: "We'll get back to you soon.",
    });
    form.reset();
  }

  const internshipCategories = {
    engineering: [
      {
        title: "Embedded Systems Intern",
        duration: "3 months",
        stipend: "₹10,000/month",
        skills: ["Microcontrollers", "C/C++", "Circuit Design"],
        deadline: "June 30, 2024",
        description: "Work on cutting-edge embedded systems projects for various industrial applications."
      },
      {
        title: "IoT Development Intern",
        duration: "6 months",
        stipend: "₹12,000/month",
        skills: ["Arduino", "Raspberry Pi", "Python", "MQTT"],
        deadline: "May 15, 2024",
        description: "Develop IoT solutions for smart agriculture, healthcare, and industrial automation."
      },
      {
        title: "Robotics Engineering Intern",
        duration: "4 months",
        stipend: "₹15,000/month",
        skills: ["ROS", "Python", "Machine Learning", "Mechanical Design"],
        deadline: "July 10, 2024",
        description: "Design and implement robotic systems for various real-world applications."
      }
    ],
    medical: [
      {
        title: "Medical Devices Intern",
        duration: "4 months",
        stipend: "₹12,000/month",
        skills: ["Biomedical Engineering", "Electronics", "Medical Knowledge"],
        deadline: "June 15, 2024",
        description: "Assist in the development and testing of innovative medical devices."
      },
      {
        title: "Healthcare IoT Intern",
        duration: "3 months",
        stipend: "₹10,000/month",
        skills: ["IoT", "Health Informatics", "Data Analysis"],
        deadline: "May 30, 2024",
        description: "Work on connected healthcare solutions that improve patient monitoring and care."
      }
    ],
    management: [
      {
        title: "Project Management Intern",
        duration: "6 months",
        stipend: "₹12,000/month",
        skills: ["MS Project", "Agile Methodologies", "Documentation"],
        deadline: "June 5, 2024",
        description: "Assist in managing technical projects from conceptualization to deployment."
      },
      {
        title: "Business Development Intern",
        duration: "3 months",
        stipend: "₹10,000/month",
        skills: ["Market Research", "Communication", "Analytical Skills"],
        deadline: "May 20, 2024",
        description: "Help identify market opportunities and develop business strategies for technological innovations."
      }
    ]
  };

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Former Embedded Systems Intern",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "My internship at RDIO was transformative. I worked on real-world projects that enhanced my technical skills and problem-solving abilities. The mentorship I received was invaluable for my career growth."
    },
    {
      name: "Rahul Verma",
      role: "Former IoT Development Intern",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "RDIO provided me with hands-on experience in cutting-edge IoT technologies. The collaborative environment and challenging projects prepared me well for industry demands."
    },
    {
      name: "Ananya Patel",
      role: "Former Project Management Intern",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote: "The exposure to diverse projects and technologies at RDIO helped me understand the intersection of technology and business. I gained valuable insights into project management methodologies."
    }
  ];

  return (
    <Layout>
      {/* Hero section with gradient background */}
      <div className="bg-gradient-to-r from-rdio-teal to-rdio-green text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers & Internships</h1>
            <p className="text-xl opacity-90">
              Launch your career with hands-on experience in innovation and research
            </p>
          </div>
        </div>
      </div>
      
      {/* Opportunities Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Internship Opportunities" 
            subtitle="Begin your professional journey with practical experience in cutting-edge technologies"
            center={true}
          />
          
          <div className="flex flex-wrap justify-center mb-8">
            <Button
              variant={activeTab === "engineering" ? "default" : "outline"}
              className={`m-1 ${activeTab === "engineering" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveTab("engineering")}
            >
              Engineering
            </Button>
            <Button
              variant={activeTab === "medical" ? "default" : "outline"}
              className={`m-1 ${activeTab === "medical" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveTab("medical")}
            >
              Medical
            </Button>
            <Button
              variant={activeTab === "management" ? "default" : "outline"}
              className={`m-1 ${activeTab === "management" ? "bg-rdio-teal" : "border-rdio-teal text-rdio-teal"}`}
              onClick={() => setActiveTab("management")}
            >
              Management
            </Button>
          </div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            {internshipCategories[activeTab].map((internship, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                variants={itemVariants}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-xl text-gray-800">{internship.title}</h3>
                    <Badge className="bg-rdio-teal">{internship.duration}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{internship.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {internship.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                    <div className="flex items-center">
                      <Calendar className="mr-1" size={14} />
                      <span>Deadline: {internship.deadline}</span>
                    </div>
                    <span className="font-medium text-rdio-teal">{internship.stipend}</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <Button className="w-full bg-rdio-teal hover:bg-rdio-teal/90">Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Application Process" 
            subtitle="Follow these steps to apply for our internship programs"
            center={true}
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-rdio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rdio-teal">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Submit Application</h3>
                <p className="text-gray-600">Complete the online application form with your details and attach your resume.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-rdio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rdio-teal">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Assessment</h3>
                <p className="text-gray-600">Complete a brief technical assessment or assignment relevant to your field.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-rdio-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rdio-teal">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Interview</h3>
                <p className="text-gray-600">Selected candidates will be invited for a technical and cultural fit interview.</p>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-4">Eligibility Criteria</h3>
                <ul className="space-y-3">
                  {[
                    "Currently enrolled in an undergraduate or graduate program in a relevant field",
                    "Strong academic background with a minimum CGPA of 7.0 or 70%",
                    "Basic knowledge of the field you're applying for",
                    "Excellent communication and teamwork skills",
                    "Ability to commit to the full duration of the internship"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ListCheck className="text-rdio-teal mr-2 mt-1" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Intern Testimonials" 
            subtitle="Hear from our former interns about their experience at RDIO"
            center={true}
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-600 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Apply Now" 
            subtitle="Submit your application for our internship programs"
            center={true}
          />
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College/University</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your college name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position Applied For</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the position you're applying for" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you're interested in this position"
                          className="min-h-32"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-rdio-teal hover:bg-rdio-teal/90">
                  Submit Application
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
