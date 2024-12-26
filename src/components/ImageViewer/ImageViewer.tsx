import React, { useState } from "react";
import "./ImageViewer.css";
import { motion } from "framer-motion";

type ImageViewerProps = {
  setSelectedImageId: React.Dispatch<
    React.SetStateAction<{ id: string; index: number } | null>
  >;
  src: string;
  show: boolean;
};

const ImageViewer = (props: ImageViewerProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      className={"image-viewer" + (props.show ? " show" : "")}
      onClick={() => props.setSelectedImageId(null)}
    >
      {props.src !== "" && (
        <>
          {!loaded && <div className="spinner" />}
          {/* {loaded && ( */}
          <img
            src={props.src}
            style={{ maxWidth: loaded ? "100%" : "0" }}
            alt="selected"
            className="image-viewer__image"
            onLoad={(e) => {
              setLoaded(true);
            }}
          />
          {/* )} */}
        </>
      )}
    </motion.div>
  );
};

export default ImageViewer;
