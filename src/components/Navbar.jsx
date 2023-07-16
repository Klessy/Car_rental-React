import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo/logo.png";
import { navLinks } from "../constants/CarData";


function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const openNav = () => {
    setIsNavShowing(!isNavShowing);
  };


  return (
    <>
      <nav>
        <div className={`mobile-navbar ${isNavShowing ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
        </div>
           <ul className="mobile-navbar__links">
           {
             navLinks.map(({title, path}, index) => {
               return(
                 <li key={index} onClick = {openNav}>
                   <NavLink to={path} className = {({isActive}) => isActive ? "active-nav" : ""}>
                     {title}
                   </NavLink>
                 </li>
               )
             })
           }
         </ul>
      </div>

        {/* Desktop */}
        <div className="nav__container">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            {
              navLinks.map(({title, path}, index) => {
                return(
                  <li key={index}>
                    <NavLink to={path} className = {({isActive}) => isActive ? "active-nav" : ""}>
                      {title}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Sign In
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Register
            </Link>
          </div>
          
          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar