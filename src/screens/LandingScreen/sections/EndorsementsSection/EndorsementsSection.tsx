import "./EndorsementsSection.css";
import { LandingPageSectionProps } from "../../../../types";
import { EndorsementsSectionData } from "../../../../data";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

type EndorsementsSectionProps = {} & LandingPageSectionProps;

const EndorsementsSection = (props: EndorsementsSectionProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.25, once: true });
  const { width } = useWindowDimensions();
  const [data, setData] = useState(EndorsementsSectionData);

  useEffect(() => {
    if (width < 1080 && !data[0].name.includes("Robert")) {
      const temp = data[0];
      data[0] = data[1];
      data[1] = temp;
      setData(data);
    }
  }, [width]);

  const parseBreaks = (text: string) => {
    return text.split("\n").map((str, index) => {
      return (
        <p key={index} className="endorsement-card__endorsement">
          {str}
        </p>
      );
    });
  };

  return (
    <div className="endorsements-section noise" id={props.sectionID}>
      <motion.h1
        className="endorsements-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
        viewport={{ once: true, amount: 1 }}
      >
        endorsements
      </motion.h1>
      <div className="endorsements-section-wrapper">
        <div className="endorsements-section-content" ref={containerRef}>
          {EndorsementsSectionData.map((endorsement, index) => {
            return (
              <motion.div
                key={index}
                className="endorsement-card glass"
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.5s ease-in-out",
                  transitionDelay: `${0.5 + index * 0.1}s`,
                }}
              >
                <div id="left">
                  <img
                    src={endorsement.headshot}
                    alt={endorsement.name}
                    className="endorsement-card__image"
                  />
                  <h3 className="endorsement-card__name">{endorsement.name}</h3>
                  <p className="endorsement-card__title">{endorsement.title}</p>
                </div>
                <div id="right">
                  <div className="endorsement-card__endorsement">
                    {parseBreaks(endorsement.content)}
                  </div>
                  <p className="endorsement-card__context">
                    {endorsement.context}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EndorsementsSection;
