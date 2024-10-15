import React from "react";

import "./List.css";
import Ticket from "../Ticket/Ticket";
import IconImage from "../IconImage";

let cardCount = 0;

export default function TicketList(props) {
  const listTitleMap = {
    Backlog: "./icons/Backlog.svg",
    Todo: "./icons/To-do.svg",
    "In progress": "./icons/in-progress.svg",
    Done: "./icons/Done.svg",
    Cancelled: "./icons/Cancelled.svg",
  };
  const priorityImageMap = {
    0: "./icons/No-priority.svg",
    1: "./icons/low-priority.svg",
    2: "./icons/medium-priority.svg",
    3: "./icons/high-priority.svg",
    4: "./icons/urgent-priority-colour.svg",
  };

  return (
    <>
      <div className="list-container">
        <div className="list-header">
          <div className="list-header-left">
            {
              {
                status: (
                  <>
                    {
                      <div className="list-icon">
                        <IconImage src={listTitleMap[props.listTitle]} />
                      </div>
                    }
                  </>
                ),
                user: <></>,
                priority: (
                  <>
                    {
                      <div className="card-tag-icon">
                        <IconImage src={priorityImageMap[props.listTitle]} />
                      </div>
                    }
                  </>
                ),
              }[props.groupValue]
            }

            <div className="list-title">
              {
                {
                  priority: (
                    <>
                      {props.priorityList
                        ? props.priorityList.map((priorityProperty) =>
                            priorityProperty.priority === props.listTitle ? (
                              <>{priorityProperty.name}</>
                            ) : null
                          )
                        : null}
                    </>
                  ),
                  status: <>{props.listTitle}</>,
                  user: <>{props.listTitle}</>,
                }[props.groupValue]
              }
            </div>
            <div className="list-sum">{cardCount}</div>
          </div>
          <div className="list-header-right">
            <div className="list-add-item">
              <IconImage src={"./icons/add.svg"} />
            </div>
            <div className="list-option-item">
              <IconImage src={"./icons/3-dot.svg"} />
            </div>
          </div>
        </div>

        <div className="list-card-items">
          {props.ticketDetails.map((ticket) => {
            if (ticket.status === props.listTitle) {
              cardCount++;
              return <Ticket cardDetails={ticket} />;
            } else if (ticket.priority === props.listTitle) {
              cardCount++;
              return <Ticket cardDetails={ticket} />;
            } else if (ticket.userObj.name === props.listTitle) {
              cardCount++;
              return <Ticket cardDetails={ticket} />;
            }
            return null;
          }, (cardCount = 0))}
        </div>
      </div>
    </>
  );
}
