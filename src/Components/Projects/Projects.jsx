import React from 'react';
import './Projects.css';
import rfid from '../../assets/rfid.jpeg'
import solarWind from '../../assets/solarWind.png'

const data = [
  {
    name : 'project1',
    content : 'I developed a React application that allowed me to grasp the fundamentals of the framework. Through building reusable components and managing state, I gained practical experience in creating dynamic user interfaces. This hands-on approach not only solidified my understanding of Reacts core concepts but also enhanced my ability to implement responsive and efficient applications.',
    image: '',
    link : 'https://react-project-red-one.vercel.app/', 
    onclick: 'https://github.com/manaswini1610/react-project',
  },
  {
    name : 'project2',
    content :'This project, developed using React and Tailwind CSS, focuses on building a modern, responsive web application with a sleek user interface. React handles the dynamic components and state management, while Tailwind CSS provides efficient, utility-first styling. The project emphasizes interactive UI elements, fast loading times, and adaptability across devices, showcasing the power of these technologies',
    image : '',
    link : 'https://react-project-banking-6d8a.vercel.app/', 
    onclick: 'https://github.com/manaswini1610/react-project-banking/tree/main/bank',
  },
  {
    name : 'project3',
    content : 'Solar and wind cogeneration using back-to-back converters integrates renewable energy sources for efficient power generation. This system employs two converters to connect solar panels and wind turbines, allowing for seamless energy conversion and management. The back-to-back configuration facilitates grid synchronization, enhances power quality, and optimizes energy flow, ultimately promoting sustainable energy solutions and reducing reliance on fossil fuels.',
    image : solarWind,
    link : '', 
    onclick: 'https://google.com',
  },
  {
    name : 'project4',
    content :'RFID-based electronic passport verification using IoT enhances border control efficiency and security. E-passports equipped with RFID chips enable contactless data transfer, allowing quick verification against cloud databases. This system reduces the risk of forgery and speeds up passenger processing times. Real-time monitoring and data analytics further improve border management, making travel smoother and more secure.',
    image : rfid,
    link : '', 
    onclick: 'https://google.com',
  }
]
const Projects = () => {



  const handleClick = (link) => {
    // window.location.href = link;
    window.open(link, '_blank');
  };
  
  return (
    <div className="projects-section">
      <b className='name'>Projects</b>
      <div className='cardContainer'>
        {data.map((item, index) => (
        <div className='oneCard' key={index} onClick={() => handleClick(item.onclick)}>
        <div>
          {item.image ?<img src={item.image} alt={item.name}/> :  
          <div className="iframe-container">
                <iframe
                  src={item.link}
                  title={item.name}
                  className="responsive-iframe"
                />
              </div> }
          
        </div>
        <div>
          <p >
            {item.content}
          </p>
          <p style={{marginTop: '30px'}}><a href={item.link} onClick={(e) => {
                e.stopPropagation();
              }} className='project-button-link'>Know More</a></p>
        </div>
        </div>
        ))}
        
      </div>
      
    </div>
  
  )
}

export default Projects