import React from 'react';
import './navbar.css';
import { useState } from 'react';
import '../../global.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [link,setLink]=useState("Home")
  const [toggle, setToggle] = useState(false)

  const handleclick = (e)=>{
      setLink(e)
    }
  const handleNavClick = () => {
    setToggle(!toggle)
  }



  return (
    
    <div className="navbarContainer">

      <div className="logo">
        <h2>Portfolio</h2>
      </div>

      <div className="lists">
        <li onClick={() => handleclick("Home")} ><a href='#about' className= {link ==="Home"? 'active' :""}>Home</a></li>
        <li onClick={() => handleclick("Skills")} ><a href='#skills' className= {link ==="Skills"? 'active' :""}>Skills</a></li>
        <li onClick={() => handleclick("Experience")} ><a href='#experience' className= {link ==="Experience"? 'active' :""}>Experience</a></li>
        <li onClick={() => handleclick("Projects")} ><a href='#projects' className= {link ==="Projects"? 'active' :""}>Projects</a></li>
        <li onClick={() => handleclick("Contact")} ><a href='#contact' className= {link ==="Contact"? 'active' :""}>Contact</a></li>
      </div> 

      <div className="button">
        <a href='#contact'><p className='para1'>
          Hire Me
        </p>
        </a>

      </div>
      <div style={{position:'relative'}}>
      <GiHamburgerMenu size={25} onClick={()=> handleNavClick()}/>
      {toggle && 
      <div className="hamburger">
        <li onClick={() => handleclick("Home")} ><a href='#about' className= {link ==="Home"? 'active' :""}>Home</a></li>
        <li onClick={() => handleclick("Skills")} ><a href='#skills' className= {link ==="Skills"? 'active' :""}>Skills</a></li>
        <li onClick={() => handleclick("Experience")} ><a href='#experience' className= {link ==="Experience"? 'active' :""}>Experience</a></li>
        <li onClick={() => handleclick("Projects")} ><a href='#projects' className= {link ==="Projects"? 'active' :""}>Projects</a></li>
        <li onClick={() => handleclick("Contact")} ><a href='#contact' className= {link ==="Contact"? 'active' :""}>Contact</a></li>
      </div> 
}
      </div>

    </div>
  )
}

export default Navbar