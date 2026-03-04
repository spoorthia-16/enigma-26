import "./styles/EventList.css";
import EventContainer from "./EventContainer";
import laser from "/events/laser.jpg";
import "./styles/Workshop.css";
import workshopImg from "/events/workshop.jpg";

const shows = [
  {
    id: 1,
    imgloc: laser,
    name: "Laser Show",
    date: "20/04",
    loc: "Auditorium",
    desciption: `Brace yourselves to behold the speculating fusion of Art and Technology. Join us for a night of hypnotic bliss through captivating lights.`,
    head: ["Vidwath K T", "Keerthi H B"],
    contact: ["7019347171", "8296292335"],
    details: [
      {
        heading: "Description",
        desc: [
          `1. Laser show will be a 45-minute spectacle, with 30 minutes dedicated to laser 
          show and 15 minutes to the beam segment.`,
          `2. Laser show is crafted to follow specific themes set by the organizing 
          committee.  `,
          `The theme includes `,
          `A) Captivating stories centered around famous government organizations.`,
          `B) Historical heroes. `,
          `C) Beloved old Kannada actors. `,
          `D) The spirit of friendship. `,
          `4. Entire musical soundtrack accompanying the beam show will consist entirely 
          of the EDM genre. `,
        ],
      },
      {
        heading: "Guidelines",
        desc: [
          `1. Only students of Malnad College of Engineering who are currently pursuing B.E  will be allowed to enter the show.`,
          `2. Students are required to present both their college ID card and ticket or band before entering the show.`,
          `3. Attendees must refrain from engaging in any behavior that may jeopardize their safety or the safety of others during the show.`,
          `4. Running, pushing or any form of horseplay is strictly prohibited in the viewing area. `,
          `5. Alcoholic beverages or any intoxicating substances are strictly forbidden in the vicinity of the laser show, neither bringing nor consumption is allowed.`,
          `6. Event organizers assume no liability for any injuries, damages, or adverse effects resulting from attending the laser show, unless caused by gross negligence or willful misconduct on the part of the organizers. `,
          `7. Attendees are expected to conduct themselves in a responsible and respectful manner throughout the duration of the laser show. Any disruptive behavior, including verbal abuse, harassment, or vandalism will result in immediate removal from the premises without any refund of the ticket amount. `,
          `8. By attending the laser show, attendees agree to abide by all terms and conditions outlined herein and any additional instructions provided by organizers or college management.`,
        ],
      },
    ],
  },
];

const workshops = [
  {
    id: 2,
    imgloc: workshopImg,
    name: "Data analytics and Financial Management",
    date: "19/04",
    loc: "Alumni Hall",
    desciption: `Unlock the power of data visualization! Join our workshop on Data Analytics and Financial Management to master dynamic dashboards and compelling storytelling. From fundamentals to advanced techniques, elevate your data analytics skills and captivate your audience. Certificates provided. Hosted by The Malnad Technical Club in collaboration with Teachnook.`,
    head: ["Sathvik Rao", "Pavan B"],
    contact: ["6361146962", "9741375061"],
    register: "https://linktr.ee/MalnadTechnicalClub",
    details: [],
  },
];

const Shows = () => {
  return (
    <>
      <h1 className="show-heading">Pronite</h1>
      {shows.map((data, index) => {
        return (
          <EventContainer
            content={{
              imgURL: data.imgloc,
              eventName: data.name,
              eventDate: data.date,
              eventLoc: data.loc,
              eventDesc: data.desciption,
              eventDetails: data.details,
              eventHeads: data.head,
              eventContact: data.contact,
              register: data.register,
            }} key={index}
          />
        );
      })}
      <h1 className="show-heading" >Workshop</h1>

      {workshops.map((data, index) => {
        return (
          <EventContainer
            content={{
              imgURL: data.imgloc,
              eventName: data.name,
              eventDate: data.date,
              eventLoc: data.loc,
              eventDesc: data.desciption,
              eventDetails: data.details,
              eventHeads: data.head,
              eventContact: data.contact,
              register: data.register,
            }} id="workshop" key={index}
          />
        );
      })}
    </>
  );
};

export default Shows;
