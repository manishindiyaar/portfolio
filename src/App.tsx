import React, { useEffect, useState } from "react";
import "./App.css";
import LandingScreen from "./screens/LandingScreen/LandingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFoundScreen from "./screens/PageNotFoundScreen/PageNotFoundScreen";
import PhotographyScreen from "./screens/PhotographyScreen/PhotographyScreen";
import BlogScreen from "./screens/BlogScreen/BlogScreen";
import { Coord } from "./types";

function App() {
  const interactiveBlobIsEnabled = false;

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
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingScreen
                interactiveBlobIsEnabled={interactiveBlobIsEnabled}
                moveInteractiveBlob={moveInteractiveBlob}
                blobCurrXY={blobCurrXY}
              />
            }
          />
          <Route path="/photography" element={<PhotographyScreen />} />
          <Route
            path="/blog"
            element={
              <BlogScreen
                blobCurrXY={blobCurrXY}
                iblobEnabled={interactiveBlobIsEnabled}
              />
            }
          />
          <Route path="*" element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
