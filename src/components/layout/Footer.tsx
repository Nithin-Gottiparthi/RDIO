
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Logo variant="gearCap" size="md" className="mr-3" />
              <div>
                <h3 className="font-poppins text-2xl font-bold">RDIO</h3>
                <p className="text-gray-400 text-sm">The Research & Innovation Hub</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students and engineers by bridging the gap between academic theory and real-world skills.
            </p>
            <p className="text-gray-400 font-semibold">
              "Practical Mastery"
            </p>
          </div>

          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-rdio-teal transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-400 hover:text-rdio-teal transition-colors">Programs Offered</Link>
              </li>
              <li>
                <Link to="/labs" className="text-gray-400 hover:text-rdio-teal transition-colors">Labs & Projects</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-rdio-teal transition-colors">Events & TISF 2024</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-rdio-teal transition-colors">Internship & Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-rdio-teal transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="text-rdio-teal mr-3 mt-1" size={18} />
                <span className="text-gray-400">rdiohub@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-rdio-teal mr-3 mt-1" size={18} />
                <span className="text-gray-400">+91-7386471784</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-rdio-teal mr-3 mt-1" size={18} />
                <span className="text-gray-400">Khammam, Telangana, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and news.
            </p>
            <form>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-rdio-teal text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-rdio-teal hover:bg-rdio-teal/80 transition-colors rounded-md text-white font-medium"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RDIO. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com/RDIO_HUB" className="text-gray-400 hover:text-rdio-teal transition-colors">
              Twitter
            </a>
            <a href="https://www.linkedin.com/company/rdio" className="text-gray-400 hover:text-rdio-teal transition-colors">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/rdio_hub" className="text-gray-400 hover:text-rdio-teal transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/rdiohub" className="text-gray-400 hover:text-rdio-teal transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
