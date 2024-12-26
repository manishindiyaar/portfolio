import "./LandingScreen.css";
import IntroSection from "./sections/IntroSection/IntroSection";
import Navbar from "../../components/Navbar/Navbar";
import { Coord } from "../../types";
import ExperienceSection from "./sections/ExperienceSection/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import SkillsSection from "./sections/SkillsSection/SkillsSection";
import EndorsementsSection from "./sections/EndorsementsSection/EndorsementsSection";

type LandingScreenProps = {
  interactiveBlobIsEnabled: boolean;
  moveInteractiveBlob: () => void;
  blobCurrXY: Coord;
};

const LandingScreen = (props: LandingScreenProps) => {
  return (
    <div
      className="landing-screen"
      onMouseMove={
        props.interactiveBlobIsEnabled ? props.moveInteractiveBlob : undefined
      }
      onTouchMove={
        props.interactiveBlobIsEnabled ? props.moveInteractiveBlob : undefined
      }
    >
      <Navbar />
      <IntroSection
        sectionID="intro"
        blobCurrXY={props.blobCurrXY}
        iblobEnabled={props.interactiveBlobIsEnabled}
      />
      <ExperienceSection sectionID="experience" />
      <ProjectsSection sectionID="projects" />
      <SkillsSection sectionID="skills" />
      <EndorsementsSection sectionID="endorsements" />
      <ContactSection sectionID="contact" />
    </div>
  );
};

export default LandingScreen;
