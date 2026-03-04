import React from "react";
import "./styles/EventList.css";
import EventContainer from "./EventContainer";
import ParallaxBackground from "./ParallaxBackground";
import {
  nationalData,
  designBuild,
  paperData,
  onlineData,
  funData,
} from "./EventData";

const EventList = ({ children }) => {
  return (
    <ParallaxBackground showTitleBlock={false}>
      <section className="event-heading-design">
        <div id="npp">
          <h1>EVENTS</h1>
          {nationalData.map((data) => {
            return (
              <EventContainer
                content={{
                  imgURL: data.imgloc,
                  eventName: data.name,
                  eventDate: data.date,
                  eventLoc: data.loc,
                  eventDesc: data.desciption,
                  eventDetails: data.details,
                  eventHeads: data.heads,
                  eventContact: data.contact,
                  register: data.registerForm,
                }}
              />
            );
          })}
        </div>

        <div id="design-build">
          <h1>DESIGN AND BUILD EVENT</h1>
          {designBuild.map((data) => {
            return (
              <EventContainer
                content={{
                  imgURL: data.imgloc,
                  eventName: data.name,
                  eventDate: data.date,
                  eventLoc: data.loc,
                  eventDesc: data.desciption,
                  eventDetails: data.details,
                  eventHeads: data.heads,
                  eventContact: data.contact,
                  register: data.registerForm,
                }}
              />
            );
          })}
        </div>
        <div id="paper">
          <h1>PAPER EVENTS</h1>
          {paperData.map((data) => {
            return (
              <EventContainer
                content={{
                  imgURL: data.imgloc,
                  eventName: data.name,
                  eventDate: data.date,
                  eventLoc: data.loc,
                  eventDesc: data.desciption,
                  eventDetails: data.details,
                  eventHeads: data.heads,
                  eventContact: data.contact,
                }}
              />
            );
          })}
        </div>

        <div id="fun">
          <h1>FUN EVENTS</h1>
          {funData.map((data) => {
            return (
              <EventContainer
                content={{
                  imgURL: data.imgloc,
                  eventName: data.name,
                  eventDate: data.date,
                  eventLoc: data.loc,
                  eventDesc: data.desciption,
                  eventDetails: data.details,
                  eventHeads: data.heads,
                  eventContact: data.contact,
                }}
              />
            );
          })}
        </div>
      </section>
      {children}
    </ParallaxBackground>
  );
};

export default EventList;
