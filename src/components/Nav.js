import React, { useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, setShow] = React.useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setShow (window.scrollY > 100);
      });
    }, []);
    

  return (
      <div className={`nav-container ${show && "nav-container-black"}`}>
        <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='Netflix logo'/>
        <nav>
            <ul className='nav-container-links'>
                <li className='nav-container-links-link'>Home</li>
                <li className='nav-container-links-link'>TV Shows</li>
                <li className='nav-container-links-link'>Movies</li>
                <li className='nav-container-links-link'>New & Popular</li>
                <li className='nav-container-links-link'>My List</li>
                <li className='nav-container-links-link'>Browse by Languages</li>
            </ul>
        </nav>
        <img className='nav-avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU" alt='avatar'/>
    </div>
  )
}

export default Nav