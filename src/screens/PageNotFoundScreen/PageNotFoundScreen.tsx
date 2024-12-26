import React, { useEffect, useState } from "react";
import "./PageNotFoundScreen.css";
import BlobBackground from "../../components/BlobBackground/BlobBackground";
import { Coord } from "../../types";
import { ReactComponent as UpRightArrow } from "../../assets/arrow-up-right.svg";

const PageNotFoundScreen = () => {
  const interactiveBlobIsEnabled = true;
  const [targetXY, setTargetXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  const [blobCurrXY, setBlobCurrXY] = useState<Coord>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (interactiveBlobIsEnabled) {
      const update = (e: any) => {
        const { clientX, clientY } = e.touches ? e.touches[0] : e;
        setTargetXY({ x: clientX, y: clientY });
      };
      window.addEventListener("mousemove", update);
      window.addEventListener("touchmove", update);
      return () => {
        window.removeEventListener("mousemove", update);
        window.removeEventListener("touchmove", update);
      };
    }
  }, [interactiveBlobIsEnabled]);

  const moveInteractiveBlob = () => {
    const newX = blobCurrXY.x + (targetXY.x - blobCurrXY.x) / 10;
    const newY = blobCurrXY.y + (targetXY.y - blobCurrXY.y) / 10;
    setBlobCurrXY({ x: newX, y: newY });
  };

  return (
    <div
      className="page-not-found-screen noise"
      onMouseMove={interactiveBlobIsEnabled ? moveInteractiveBlob : undefined}
      onTouchMove={interactiveBlobIsEnabled ? moveInteractiveBlob : undefined}
    >
      <BlobBackground
        iblobEnabled={interactiveBlobIsEnabled}
        blobCurrXY={blobCurrXY}
      />
      <div className="not-found-content-container">
        <h1>{"page not found"}</h1>
        <h3>ah the dreaded 404. let's get you back on track.</h3>
        <button
          name="Back to home"
          aria-label="Back to home"
          className="page-not-found-cta-button fill-transition-btn"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Back to home <UpRightArrow className="cta-icon" />
        </button>
      </div>
    </div>
  );
};

export default PageNotFoundScreen;
