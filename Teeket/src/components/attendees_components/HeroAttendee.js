import React from "react";
import Background from "../../assets/attendees_image/hero-attendee.png";

function HeroAttendee() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180.01deg, #030A2E 0.01%, rgba(5, 12, 47, 0) 15%), 
      url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      class=" rounded-b-[35px] py-[11rem] mt-4 "
    ></div>
  );
}

export default HeroAttendee;
