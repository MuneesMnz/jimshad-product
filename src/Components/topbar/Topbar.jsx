import "./topbar.scss";
import { BiLogoGmail } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`topbar ${menuOpen && "active"}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo{" "}
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+91 97472 56118</span>
          </div>
          <div className="itemContainer">
            <BiLogoGmail className="icon" />
            <span>mnz@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="menu-big">
            <ul>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#portfolio">About</a>
              </li>
              <li>
                <a href="#works">Products</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
