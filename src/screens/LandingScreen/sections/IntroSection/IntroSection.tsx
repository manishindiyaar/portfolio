import React from "react";
import "./IntroSection.css";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import { Coord, LandingPageSectionProps } from "../../../../types";
import { ReactComponent as RightArrow } from "../../../../assets/arrow-right.svg";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

type IntroSectionProps = {
  blobCurrXY: Coord;
  iblobEnabled: boolean;
} & LandingPageSectionProps;

const IntroSection = (props: IntroSectionProps) => {
  return (
    <div className="intro-section noise" id={props.sectionID}>
      <BlobBackground
        blobCurrXY={props.blobCurrXY}
        iblobEnabled={props.iblobEnabled}
      />
      <div className="isec__left">
        <motion.div
          className="text-container"
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0,
            },
          }}
          initial={{
            opacity: 0,
            y: -75,
          }}
        >
          <motion.h1
            className="title"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            hey, i'm Manish.
          </motion.h1>
          <motion.h2
            className="subtitle"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 0.75,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            <Link
              to={"/#skills"}
              smooth
              className="intro-link animated-underline"
            >
              ai developer
            </Link>
            <div className="bullet-dot" />
            <a
              aria-label="Georgia Tech"
              className="intro-link animated-underline"

              href="https://www.universalai.in/"
              target="_blank"
              rel="noreferrer"
            >
              cs student
            </a>
            <div className="bullet-dot" />
            
            <Link
              to="/"
              smooth
              className="intro-link animated-underline"
            >
              founder
            </Link>
          </motion.h2>
          <motion.div
            className="cta-container"
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                delay: 1,
              },
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
          >
            <Link
              className="cta-button fill-transition-btn"
              to="/#experience"
              smooth
            >
              discover my journey <RightArrow className="cta-icon" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="isec__right"></div>
    </div>
  );
};

export default IntroSection;
