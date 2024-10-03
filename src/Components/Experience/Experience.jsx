import React from 'react';
import './Experience.css';
import book from '../../assets/book.png';
import btech from '../../assets/btech.png';
import computer from '../../assets/computer.png';
import freelancer from '../../assets/freelancer.png';

const Experience = () => {
  return (
    <div className="timeline-container">
      <div>
         <div className="heading">
          <h1>Experience</h1>
         </div>
        </div>
      <div className="timeline">
        
        
        <div className="timeline-item left">
          <div className="content">
            <h2>Diploma</h2>
            <p>Diploma in Electrical and Electronics Engineering</p>
            <p>Trinity college of Engineerig and Technology </p>
            <span>2017 - 2020</span>
            <div className='smallLineLeft'><img className='pointerLeft' src={book} alt='book'/></div>
          </div>
        </div>
        <div className="timeline-item left">
          <div className="content">
            <h2>Graduation</h2>
            <p>Bachelor's in Electrical and Electronics Engineering</p>
            <p>Trinity college of Engineerig and Technology </p>
            <span>2020 - 2023</span>
            <div className='smallLineLeft'><img className='pointerLeft' src={btech} alt='btech'/></div>
          </div>
        
        </div>
        <div className='centerLine'>

        </div>

       
        <div className="timeline-item right">
          <div className="content">
            <h2>Freelancer</h2>
            <p>Freelance Projects - React, JavaScript, HTML, CSS</p>
            <span>2023</span>
            <div className='smallLineRight'><img className='pointerRight' src={freelancer}/></div>
          </div>
        </div>
        <div className="timeline-item right">
          <div className="content">
            <h2>Analyst</h2>
            <p>Working as an Analyst in the Teleperformance in the Google Process</p>
            <span>2023-Present</span>
            <div className='smallLineRight'><img className='pointerRight' src={computer}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
