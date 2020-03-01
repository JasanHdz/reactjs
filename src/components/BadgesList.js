import React from "react";
import "./styles/BadgesCard.css";
import twitterLogo from "../images/twitter-48.png";
import { Link } from "react-router-dom";

const BadgesList = props => {
  return (
    <Link
      className="text-reset text-decoration-none"
      to={`/badges/${props.id}/edit`}
    >
      <div className="Card__container">
        <div className="Card__img">
          <img
            className="Card__img-avatar"
            src={props.avatarUrl}
            alt="Avatar"
          ></img>
        </div>
        <div>
          <p className="font-weight-bold">
            {props.firstName} {props.lastName}
          </p>
          <div className="Card__twitter">
            <Link to={`//www.twitter.com/${props.twitter}`} target="_blank">
              <img
                className="Card__twitterLogo"
                src={twitterLogo}
                alt="logoTwitter"
              />
              <p className="Card__twitter">@{props.twitter}</p>
            </Link>
          </div>
          <p className="Card__jobTitle">Job Title: {props.jobTitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default BadgesList;
