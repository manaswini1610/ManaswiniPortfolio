
import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import img1 from '../../../public/svgs/html.svg';
import img2 from '../../../public/svgs/css.svg';
import img3 from '../../../public/svgs/javascript.svg';
import img4 from '../../../public/svgs/react.svg';
import img6 from '../../../public/svgs/vercel.svg';


const Skills = () => {
  const imagesRef = useRef(null);

  useEffect(() => {
    const imagesContainer = imagesRef.current;

    // Set a timeline for continuous scrolling
    gsap.timeline({ repeat: -1 }) // Repeat infinitely
      .to(imagesContainer, {
        xPercent: -100, // Move container to the left by 100% of its width
        duration: 10,   // Adjust the duration for smoothness
        ease: 'linear'  // Linear motion for continuous scroll
      })
      .set(imagesContainer, { xPercent: 0 }); // Reset to the original position
  }, []);

  return (
    <div className="skillsContainer">
      <div className="skills">
        <h1>Skills</h1>
      </div>
      <div className="imagesWrapper">
        <div className="images" ref={imagesRef}>
          {/* Original Set of Images */}
          <img src={img1} alt="HTML" />
          <img src={img2} alt="CSS" />
          <img src={img3} alt="JavaScript" />
          <img src={img4} alt="React" />
          <img src={img6} alt="Vercel" />

          {/* Duplicated Set of Images */}
          <img src={img1} alt="HTML" />
          <img src={img2} alt="CSS" />
          <img src={img3} alt="JavaScript" />
          <img src={img4} alt="React" />
          <img src={img6} alt="Vercel" />

          <img src={img1} alt="HTML" />
          <img src={img2} alt="CSS" />
          <img src={img3} alt="JavaScript" />
          <img src={img4} alt="React" />
          <img src={img6} alt="Vercel" />
        </div>


    
      </div>
    </div>

  );
};

export default Skills;
