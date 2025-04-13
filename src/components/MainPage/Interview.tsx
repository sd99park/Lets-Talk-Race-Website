import React from "react";
import "./Interview.css";

// TODO: Check that this and other IFrames works correctly when on wifi
const Interview: React.FC = () => {
  return (
    <div className="main-page-interview">
      <h1 className="interview-title">
        Our Interview With Dr. Jemar Tisby, July 2023
      </h1>
      <div className="interview-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WXTBF0UwMg0?si=KtIqslpNO6xGlPSs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Interview;
