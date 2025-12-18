import React from "react";
import style from "../src/Css/UserProfile.module.css";

const ModuleCss = () => {
  return (
    <>
      <div>
        <h1 className={style.heading}>User Profile</h1>
        <div className={style.imgContainer}>
        <img src="https://imgs.search.brave.com/bD6zaQYkR0OshNlvT4TpTM9mWysoCaGr2ivhph9EYKs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA3/MDYwNTYwNi9waG90/by9pbWdfMTY5Mi1q/cGcuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXZpUWw1SDRI/aGw1bEQyaXBIUmlI/QmFPQS1fQ0dVUFlo/RkY1SGthUGV2Yzg9" alt="Placeholder Image" />
        </div>
        <div>
          <h4>Naman Yadav</h4>
          <p>Frontend Developer</p>
        </div>
      </div>
    </>
  );
};

export default ModuleCss;
