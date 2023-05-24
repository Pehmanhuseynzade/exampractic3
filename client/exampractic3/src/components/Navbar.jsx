import React from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div style={{color:"black"}}>
            <p>We believe we helps people</p>
            <p>for happier lives</p>
          </div>
          <div>
            <img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="navimage" />
          </div>
          <div style={{display:"flex",gap:"10px"}}>
            <Link><p style={{color:"black",position:"relative",top:"22px"}}>+880 123 12 658 439</p></Link>
            <button style={{color:"white",backgroundColor:"#f6214b",padding:"20px",borderColor:"white"}}><i class="fa-solid fa-phone"></i></button>
          </div>
        </nav>
        <div>
          <ul>
            <Link>
              <li>Home</li>
            </Link>
            <Link>
              <li>Imgration</li>
            </Link>
            <Link>
              <li>Course</li>
            </Link>
            <Link>
              <li>Country</li>
            </Link>
            <Link to= 'add'>
              <li>Add@</li>
            </Link>
            <Link>
              <li>Contact</li>
            </Link>
            <Link>
              <li>Elements</li>
            </Link>
            <Link>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Navbar;
