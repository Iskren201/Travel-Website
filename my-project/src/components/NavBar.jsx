import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-[#0C111F] text-white">
        <div>
          <Link>
            <h1>Traveling</h1>
          </Link>
        </div>
        <nav>
          <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer" >Home</Link>
          <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer" >Features</Link>
          <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer" >Destinations</Link>
          <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer" >About</Link>
          <Link to="/" spy={true} smooth={true} duration={500} className="cursor-pointer" >Contact</Link>
        </nav>

        <div>
          <h1>Register</h1>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
