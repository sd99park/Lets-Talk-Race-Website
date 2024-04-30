import SP from "../../../img/SP_Headshot.jpg";
import DP from "../../../img/DP_Headshot.jpg";
import JH from "../../../img/JH_Headshot.jpg";
import OW from "../../../img/OW_Headshot.jpeg";
import PA from "../../../img/PA_Headshot.jpg";
import SH from "../../../img/SH_Headshot.jpg";

import * as constants from "../../../constants/ProfilePageConstants";

import ProfileCard from "./ProfileCard";
import "./ProfilePage.css";
import React from "react";

const ProfilePage: React.FC = () => {
  return (
    <>
      <h1 className="profile-page-title">Leadership</h1>
      <div className="card-wrapper">
        <ProfileCard
          image={SP}
          name={constants.SP_name}
          title={constants.SP_title}
          bio1={constants.SP_bio1}
          summary={constants.SP_descr}
        />
        <ProfileCard
          image={DP}
          name={constants.DP_name}
          title={constants.DP_title}
          bio1={constants.DP_bio1}
          bio2={constants.DP_bio2}
          summary={constants.DP_descr}
        />
        <ProfileCard
          image={PA}
          name={constants.PA_name}
          title={constants.PA_title}
          bio1={constants.PA_bio1}
          bio2={constants.PA_bio2}
          bio3={constants.PA_bio3}
          bio4={constants.PA_bio4}
          summary={constants.PA_descr}
        />
        <ProfileCard
          image={SH}
          name={constants.SH_name}
          title={constants.SH_title}
          bio1={constants.SH_bio1}
          summary={constants.SH_descr}
        />
        <ProfileCard
          image={JH}
          name={constants.JH_name}
          title={constants.JH_title}
          bio1={constants.JH_bio1}
          summary={constants.JH_descr}
        />
        <ProfileCard
          image={OW}
          name={constants.OW_name}
          title={constants.OW_title}
          bio1={constants.OW_bio1}
          bio2={constants.OW_bio2}
          summary={constants.OW_descr}
        />
      </div>
    </>
  );
};

export default ProfilePage;
