import React, { useEffect, useState } from "react";
import "./PhotoAlbum.css";
import { PhotographyAlbum } from "../../types";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ReactComponent as ExpandIcon } from "../../assets/slider-right-arrow.svg";
import { motion, useAnimationControls } from "framer-motion";
import LazyLoadedImage from "../LazyLoadedImage/LazyLoadedImage";
import ImageViewer from "../ImageViewer/ImageViewer";

type PhotoAlbumProps = {
  album: PhotographyAlbum;
  index: number;
};

const PhotoAlbum = (props: PhotoAlbumProps) => {
  const [open, setOpen] = useState(true);
  const controls = useAnimationControls();
  const [selectedImageId, setSelectedImageId] = useState<{
    id: string;
    index: number;
  } | null>(null);

  useEffect(() => {
    if (open) {
      controls.start({ height: "auto" });
    } else {
      controls.start({ height: 0 });
    }
  }, [open, controls]);

  return (
    <motion.div
      className="photo-album"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.75,
          delay: 0.75,
        },
      }}
      viewport={{ once: true, amount: 0 }}
    >
      <div
        className="toggleable-header vert-flex"
        onClick={() => setOpen(!open)}
      >
        <div className="toggleable-header-container hori-flex">
          <ExpandIcon
            className={"expand-icon" + (open ? " open" : "")}
            onClick={() => setOpen(!open)}
          />
          <h2 className="title">{props.album.title.toLowerCase()}</h2>
        </div>
        <div className="divider" />
      </div>
      <motion.div
        style={{
          width: "100%",
          overflow: "hidden",
          transition:
            "all 500ms cubic-bezier(0.230, 1.000, 0.320, 1.000) !important",
        }}
        animate={controls}
      >
        <ResponsiveMasonry
          className="album-masonry-container"
          columnsCountBreakPoints={{ 650: 1, 800: 2 }}
        >
          <Masonry
            gutter={"20px"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            {Array.from({ length: props.album.length }, (_, i) => (
              <motion.div
                key={i}
                className="photo-wrapper"
                onClick={() =>
                  setSelectedImageId({
                    id: props.album.dir + "-" + i,
                    index: i,
                  })
                }
              >
                <LazyLoadedImage
                  index={i}
                  src={`/photography/${props.album.dir}/${i + 1}.jpg`}
                  alt={props.album.title + " " + (i + 1)}
                  className="photo"
                  hash={props.album.links[i]}
                />
              </motion.div>
            ))}
            <div className="image-viewer-bg" />
            <ImageViewer
              setSelectedImageId={setSelectedImageId}
              show={!!selectedImageId}
              src={
                selectedImageId
                  ? `/photography/${props.album.dir}/${
                      selectedImageId.index + 1
                    }.jpg`
                  : ""
              }
            />
          </Masonry>
        </ResponsiveMasonry>
      </motion.div>
    </motion.div>
  );
};

export default PhotoAlbum;
