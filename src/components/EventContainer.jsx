import "./styles/EventContainer.css";
import { useState } from "react";
import DisplayCard from "./DisplayCard";

const EventContainer = (props) => {
  const [buttonClick, setButtonClick] = useState(false);
  let image = props.content.imgURL;
  let eventName = props.content.eventName;
  let eventDate = props.content.eventDate;
  let eventLoc = props.content.eventLoc;
  let eventDesc = props.content.eventDesc;
  let eventDetails = props.content.eventDetails;
  let heads = props.content.eventHeads;
  let contact = props.content.eventContact;
  let register = props?.content.register ? props.content.register : null;

  return (
    <>
      <div className="container-design">
        <img src={image} alt={eventName} />
        <div className="container-desc">
          <h2>{eventName}</h2>
          <p className='event-type'>{eventDate}</p>
          <p className='event-type'>{eventLoc}</p>
          <p className="event-desc">{eventDesc}</p>
          <button onClick={() => setButtonClick(true)}>Know More</button>
        </div>
      </div>
      <DisplayCard
        trigger={buttonClick}
        setTrigger={setButtonClick}
        desc={{
          img: image,
          name: eventName,
          date: eventDate,
          loc: eventLoc,
          desc: eventDesc,
          details: eventDetails,
          heads: heads,
          phone: contact,
          register: register,
        }}
      />
    </>
  );
};

export default EventContainer;
