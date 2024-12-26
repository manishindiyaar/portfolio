import React, { useState } from "react";
import "./ProjectsSection.css";
import {
  LandingPageSectionProps,
  ProjectCarouselCard,
} from "../../../../types";
import BlobBackground from "../../../../components/BlobBackground/BlobBackground";
import Carousel from "../../../../components/Carousel/Carousel";
import { ProjectsSectionData } from "../../../../data";
import ProjectModalContent from "../../../../components/Modal/ProjectModalContent";
import Modal from "../../../../components/Modal/Modal";
import { motion } from "framer-motion";

type ProjectsSectionProps = {} & LandingPageSectionProps;

const ProjectsSection = (props: ProjectsSectionProps) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContentData, setModalContentData] = useState<
    ProjectCarouselCard | undefined
  >(undefined);

  return (
    <>
      <div className="projects-section noise" id={props.sectionID}>
        <BlobBackground
          blobCurrXY={{ x: 0, y: 0 }}
          iblobEnabled={false}
          opacity={0.25}
        />
        <motion.h1
          className="projects-section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
          viewport={{ once: true, amount: 1 }}
        >
          featured projects
        </motion.h1>
        <Carousel
          data={ProjectsSectionData}
          setModalShow={setModalShow}
          setModalContentData={setModalContentData}
        />
      </div>
      <Modal
        modalContent={<ProjectModalContent projectData={modalContentData} />}
        setShow={setModalShow}
        show={modalShow}
      />
    </>
  );
};

export default ProjectsSection;
