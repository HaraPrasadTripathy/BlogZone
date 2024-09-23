import React from 'react';
import { Container } from '../components';
import '../App.css'
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
  const darkMode = useSelector((state) => state.auth.darkMode);

  return (
    <section className={`w-full py-16 ${darkMode ? 'background-animation-dark slide text-white' : 'background-animation slide text-gray-900'}`}>
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Contact Information */}
          <div className="md:w-1/2 p-4 order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-2xl">
              <strong>Email:</strong> support@example.com
            </p>
            <p className="text-2xl">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p className="text-2xl">
              <strong>Address:</strong>
              1234 Street Name,
              City, State, ZIP Code,
              Country
            </p>
            <p className="text-2xl">
              <strong>Business Hours:</strong>{" "}
              Monday - Friday: 9:00 AM - 6:00 PM (EST)
              Saturday: 10:00 AM - 4:00 PM (EST)
              Sunday: Closed
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-sky-500" />
              </a>
              <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} className="text-2xl hover:text-red-500" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-red-500" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 p-4 flex justify-center items-center order-1 md:order-2">
            <img
              src="Screenshot_2024-09-01_130400-removebg-preview.png" // Ensure this path is correct
              alt="Contact Us"
              className="w-full h-auto rounded-lg"
              style={{ height: "32rem", width:"38rem" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
