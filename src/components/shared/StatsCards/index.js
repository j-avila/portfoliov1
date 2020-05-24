import React from "react";
import "./StatsCard.scss";

const StatsCard = ({ data }) => {
  const {
    type,
    logo,
    user,
    dataOne,
    iconOne,
    dataTwo,
    iconTwo,
    avatar,
    tipOne,
    tipTwo,
    url,
  } = data;
  return (
    <div className="card">
      <div className="avatar">
        {avatar ? (
          <img src={avatar} alt={type} />
        ) : (
          <img
            src="https://image.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-573725629.jpg"
            alt={type}
          />
        )}
      </div>
      <div className="content">
        <div className="logo">
          <img src={require(`../../../assets/img/${logo}`)} alt={type} />
        </div>
        <a href={url}>
          <h4>{user}</h4>
        </a>
        <p className="stats">
          <span>
            <i className={`fa ${iconOne}`}></i>
            {dataOne}
            {tipOne && <span className="tooltip">{tipOne}</span>}
          </span>

          <span>
            <i className={`fa ${iconTwo}`}></i>
            {dataTwo}
            {tipTwo && <span className="tooltip">{tipTwo}</span>}
          </span>
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
