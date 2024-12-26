import { useState, useEffect, CSSProperties } from "react";
import { Blurhash } from "react-blurhash";
import useWindowDimensions from "../../utils/useWindowDimensions";

type LazyLoadedImageProps = {
  src: string;
  alt: string;
  className?: string;
  hash: string;
  index: number;
};

const LazyLoadedImage = (props: LazyLoadedImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { width } = useWindowDimensions();
  const [containerStyle, setContainerStyle] = useState<CSSProperties>({});

  useEffect(() => {
    if (!imageLoaded) {
      const image = new Image();
      image.src = props.src;
      image.onload = () => {
        setImageLoaded(true);
      };
    }
  }, [imageLoaded, props.src]);

  useEffect(() => {
    if (imageLoaded) {
      setContainerStyle({
        width: "100%",
        height: "100%",
      });
    } else if (width) {
      if (width <= 800) {
        setContainerStyle({
          width: "74.21981vw",
          height: "55.6648575vw",
        });
      } else {
        setContainerStyle({
          width: "36.550152vw",
          height: "27.412614vw",
        });
      }
    }
  }, [width, imageLoaded]);

  return (
    <div
      className={"lazy-loaded-image-container " + props.index}
      style={{
        ...containerStyle,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Blurhash
        hash={props.hash}
        className={
          props.className + " blurhash" + (imageLoaded ? " loaded" : "")
        }
        resolutionX={32}
        resolutionY={32}
        punch={1}
        width={"100%"}
        height={"100%"}
      />
      <img
        loading="lazy"
        src={props.src}
        alt={props.alt}
        className={props.className}
      />
    </div>
  );
};

export default LazyLoadedImage;
