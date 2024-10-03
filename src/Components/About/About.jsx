import React from 'react'
import './About.css'
import '../../global.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import react from '../../assets/react.svg'
import pdf from '../../assets/resume.pdf';
import image from '../../assets/homePage.png'


const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='detailsContainer'>
        <p className='hi'>Hi I am </p>
        <p className='fullName'>Manthena Manaswini</p>
        <h1 className='role'>Front End Developer</h1>
        <div className='linksContainer'>
        <a href='https://www.instagram.com'><ul><FaInstagram /></ul></a>
          <a href='https://www.linkedin.com'><ul><FaLinkedinIn /></ul></a>
          <a href='https://github.com/manaswini1610/'><ul><FiGithub /></ul></a>
          <a href='https://www.facebook.com/'><ul><FaFacebookF /></ul></a>
        </div>
        <div className='buttonsContainer'>
        <a href='#contact'><p className='hireMe'>
            Hire me
          </p></a>
          <p className='downloadCV'>
            <a href={pdf} download="resume.pdf">Download CV</a>

          </p>
        </div>
      </div>

      <div className='imgaeContainer'>
        <img src={image} className='profileImage'/>
      </div>
    </div>
  )
}

export default About
