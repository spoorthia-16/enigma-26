import "./styles/DisplayCard.css";

export default function DisplayCard(props) {
  console.log(props);

  return props.trigger ? (
    <div className="card">
      <div className="inner-card">
        <button onClick={() => props.setTrigger(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="event-display">
          <div className="event-register">
            <div className="details">
              <p>Venue: </p>
              <h6>{props.desc.loc}</h6>
              <p>Date: </p>
              <h6>{props.desc.date}</h6>
              <div>
                <p>Contact: </p>
                <h6>{props.desc.phone[0]}</h6>
                <h6>{props.desc.phone[1]}</h6>
              </div>
            </div>
            <div className="register-column">
              <div>
                <p>Event Heads: </p>
                <h6>{props.desc.heads[0]}</h6>
                <h6>{props.desc.heads[1]}</h6>
              </div>
              <br />
              {props.desc.register && (
                <a href={props.desc.register}>Register</a>
              )}
            </div>
          </div>
          <div className="displayCardDesc">
            <h1>{props.desc.name}</h1>
            <h2>Description</h2>
            <p>{props.desc.desc}</p>
            {props.desc.details.map((detail) => {
              return (
                <>
                  <h2>{detail.heading}</h2>
                  {detail.desc.map((content) => {
                    return <p>{content}</p>;
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
