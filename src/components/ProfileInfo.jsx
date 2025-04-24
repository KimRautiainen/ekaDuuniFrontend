import React, { useContext } from "react";
import "./ProfileInfo.css";
import ProfileContext from "../contexts/ProfileContext";
import ReactMarkdown from "react-markdown";

const ProfileInfo = () => {
  const { profile } = useContext(ProfileContext);
  const bio = profile?.profile?.bio;

  return (
    <div className="profile-wrapper1">
      <div className="profile-info">
        <div className="content">
          <div className="heading-row">
            <h3>
              <span className="accent">//</span> Nopea esittely minusta
            </h3>
            <p className="markdown-bio">
              <ReactMarkdown>
                {bio || "Ei esittelytekstiä vielä lisätty."}
              </ReactMarkdown>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
