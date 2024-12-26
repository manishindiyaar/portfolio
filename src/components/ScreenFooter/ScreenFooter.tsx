import React from "react";
import { ReactComponent as CodeIcon } from "../../assets/code-icon.svg";
import "./ScreenFooter.css";

const ScreenFooter = () => {
  return (
    <div className="footer-container">
      <p className="website-credits">
        {"Designed and developed by Krushay Bhavsar"}
      </p>
      <p className="view-source hori-flex">
        <CodeIcon />
        <a
          aria-label="View source code"
          href="https://www.github.com/krushaybhavsar/portfolio"
          target="_blank"
          rel="noreferrer"
          className="animated-underline"
        >
          {"View source code"}
        </a>
      </p>
    </div>
  );
};

export default ScreenFooter;
