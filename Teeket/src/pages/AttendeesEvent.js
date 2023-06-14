import React from "react";
import Navbar from "../components/navbar_components/Navbar";
import Footer from "../components/footer_components/Footer";
import Attendees from "../components/attendees_components/Attendees";
import HeroAttendee from "../components/attendees_components/HeroAttendee";

function AttendeesEvent() {
  return (
    <div>
      <Navbar />
      <HeroAttendee />
      <Attendees />
      <Footer />
    </div>
  );
}

export default AttendeesEvent;
