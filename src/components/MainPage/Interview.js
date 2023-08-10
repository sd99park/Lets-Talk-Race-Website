import "./Interview.css";

const Interview = () => {
  return (
    <div className="main-page-interview">
      <h1 className="interview-title">
        Our Interview With Dr. Jemar Tisby, July 2023
      </h1>
      <dev className="interview-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/x0CR86olpH8?si=QdhSRwXB7OSEyiHJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </dev>
    </div>
  );
};

export default Interview;
