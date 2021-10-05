import React, {useState, useEffect} from 'react'
import logo from './images/Netflix.png';
import smiley from './images/smiley.png';
import './Nav.css';

const Nav = () => {
    const [ show, handleShow] = useState(false)
    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
              handleShow(true)
          } else handleShow(false);
      });
        return () => {
     window.removeEventListener("scroll")
        }
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src={logo} alt="Netflix Logo"/>
            <img className="nav_avatar" src={smiley} alt="smiley Logo"/>
        </div>
    )
}

export default Nav
