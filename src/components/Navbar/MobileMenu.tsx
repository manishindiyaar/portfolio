import { useState } from "react";
import "./MobileMenu.css";
import { HashLink as HLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-menu">
        <button
          name="Toggle Menu"
          aria-label="Toggle Menu"
          className={
            "hamburger mobile-menu-btn glass" + (open ? " active" : "")
          }
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={"mobile-menu-content glass" + (open ? " active" : "")}>
          <HLink
            to={"/#intro"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            about
          </HLink>
          <div className="divider" />
          <HLink
            to={"/#experience"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            journey
          </HLink>
          <div className="divider" />
          <HLink
            to={"/#projects"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            projects
          </HLink>
          <div className="divider" />
          <HLink
            to={"/#skills"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            skills
          </HLink>
          <div className="divider" />
          <HLink
            to={"/#endorsements"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            endorsements
          </HLink>
          <div className="divider" />
          <HLink
            to={"/#contact"}
            smooth
            className="navbar__menu-item "
            onClick={() => setOpen(false)}
          >
            contact
          </HLink>
          <div className="divider" />
          <Link to={"/photography"} className="navbar__menu-item">
            photography
          </Link>
          {/* <Link to={"/blog"} className="navbar__menu-item">
            blogs
          </Link> */}
          <div className="divider" />
          <div
            className="navbar__menu-item"
            onClick={() => {
              setOpen(false);
              window.open(
                window.origin + "/assets/Krushay_Bhavsar_Resume.pdf",
                "_blank"
              );
            }}
          >
            resume
          </div>
        </div>
        <div
          className={"mobile-menu-overlay" + (open ? " active" : "")}
          onClick={() => setOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
