import { useState } from "react";
import "./ProfileCard.css";

const ProfileCard = ({ description, name, title, image, summary }) => {
  const [smallProfile, setSmallProfile] = useState(true);

  return (
    <>
      {smallProfile ? (
        <>
          <div className="card-container">
            <div className="card-img">
              <img src={image} alt="ProfilePic" />
            </div>
            <h2 className="card-name">{name}</h2>
            <p className="card-title">{title}</p>
            <p className="card-summary">{summary}</p>
            <div className="card-button-position">
              <button
                className="card-button"
                onClick={() => {
                  setSmallProfile(false);
                }}
              >
                Read more
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="centered-container">
          <div>
            <div className="full-container">
              <div className="top-container">
                <img src={image} alt="ProfilePic" className="full-img" />
                <div className="full-name-title">
                  <h2 className="full-name">{name}</h2>
                  <p className="full-title">{title}</p>
                </div>
              </div>
              <button
                className="full-button"
                onClick={() => {
                  setSmallProfile(true);
                }}
              >
                X
              </button>
            </div>
            <p className="full-description">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileCard;
