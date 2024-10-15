import React from "react";

import "./Ticket.css";

export default function Ticket(props) {
  const priorityImageMap = {
    0: "./icons/No-priority.svg",
    1: "./icons/low-priority.svg",
    2: "./icons/medium-priority.svg",
    3: "./icons/high-priority.svg",
    4: "./icons/urgent-priority-colour.svg",
  };
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id">{props.cardDetails.id}</div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title">{props.cardDetails.title}</div>
        <div className="card-tag">
          {
            <div className="card-tag-icon">
              <img
                src={priorityImageMap[props.cardDetails.priority]}
                alt=""
                height={18}
                width={18}
              />
            </div>
          }

          {props.cardDetails.tag.map((tag, index) => {
            return (
              <div key={index} className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
