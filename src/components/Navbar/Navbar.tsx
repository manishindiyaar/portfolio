import "./Navbar.css";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { HashLink as HLink } from "react-router-hash-link";
// import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.6 }}
    >
      <div className="navbar__socials-container">
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/manishindiyaar/"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <LinkedIn className="navbar__socials-item linkedin" />
        </a>
        <a
          aria-label="Github"
          href="https://www.github.com/manishindiyaar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Github className="navbar__socials-item github" />
        </a>
        <a
          aria-label="Twitter"
          href="https://twitter.com/humanish_ai"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Twitter className="navbar__socials-item twitter" />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/mindiyaar"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          <Instagram className="navbar__socials-item instagram" />
        </a>
      </div>
      <div className="navbar__menu">
        <HLink
          to={"/#intro"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="About"
        >
          about
        </HLink>
        <HLink
          to={"/#experience"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Experience"
        >
          journey
        </HLink>
      
        <HLink
          to={"/#skills"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Skills"
        >
          skills
        </HLink>
       
        <HLink
          to={"/#contact"}
          smooth
          className="navbar__menu-item animated-underline"
          aria-label="Contact"
        >
          contact
        </HLink>
        {/* <Link
          to={"/photography"}
          className="navbar__menu-item animated-underline"
        >
          moments
        </Link> */}
        {/* <Link
          to={"/blog"}
          className="navbar__menu-item animated-underline"
        >
          blogs
        </Link> */}
        {/* <div
          className="navbar__menu-item animated-underline resume"
          onClick={() => {
            window.open(
              window.origin + "/assets/Krushay_Bhavsar_Resume.pdf",
              "_blank"
            );
          }}
        >
          resume
        </div> */}
      </div>
      <MobileMenu />
    </motion.div>
  );
};

export default Navbar;
