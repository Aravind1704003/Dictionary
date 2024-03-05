import React from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub,FaLinkedin  }
from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdMail } from "react-icons/io";
import './Aboutme.css'

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <hr/>
      <br/>
      <p>
        Welcome to the Dictionary app! This app is designed to help you explore
        the meanings, pronunciations, and examples of various words. Whether
        you're a language enthusiast, student, or just curious about words, this
        dictionary has got you covered.
      </p>
      <p>
        Created by Aravind, a passionate developer with a love for language
        and learning. Feel free to explore and expand your vocabulary with the
        Dictionary app.
      </p>
      <p>
        If you have any suggestions or feedback, please don't hesitate to reach
        out. Happy exploring!
      </p><div className="icons">
        
        <p><a href="https://github.com/Aravind1704003"><FaGithub /></a></p>
        <p><a href="https://www.linkedin.com/in/aravind-aravind-aa898b251"><FaLinkedin /></a></p>
        <p><a href="https://aravind1704003.github.io/portfolio-new/"><CgProfile /></a></p>
        <p><a href="mailto:aravind1704003@gmail.com"><IoMdMail /></a></p>
      </div>
    </div>
  );
};

export default AboutMe;
