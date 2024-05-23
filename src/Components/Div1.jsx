import { useState } from 'react'
import '../Css/Div1.css'
const Div1 = () => {
  return (
    <>
  <nav>
    {/* Hamburger menu button */}
    <button className="hamburger" id="hamburger">
      {/* <img src="images/icons8-hamburger-menu.svg" alt="hamburger menu" /> */}
    </button>
    {/* Navigation links */}
    <div className="nav-links" id="navLinks">
      <ul className="flex">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#serv">SERVICES</a>
        </li>
        <li>
          <a href="#port">PORTFOLIO</a>
        </li>
        <li>
          <a href="#blog">READ BLOG</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
        <li>
          <a href="#support">SUPPORT</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="search">
    <div className="search-left">
      <h1>
        <span>THE</span>SPACIOUS
      </h1>
      <p>
        ONE OF THE BEST AND CLEANEST WORDPRESS THEME FOR AGENCIES AND ONLINE
        PORTFOLIOS
      </p>
    </div>
    <div className="search-right">
      <input type="text" placeholder="Search for products" />
      <div className="social">
        <p>
          <i>Follow us on Social Media</i>
        </p>
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-google-plus-g" />
        <i className="fa-brands fa-youtube" />
      </div>
    </div>
  </div>
</>
  )
}

export default Div1;
