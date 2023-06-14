import React from "react";
import Hero from "../components/home-page_components/Hero";
import NavBar from "../components/navbar_components/Navbar";
import EventCreators from "../components/home-page_components/EventCreators";
import TicketFeatures from "../components/home-page_components/TicketFeatures";
import TicketApp from "../components/home-page_components/TicketApp";
import Testimonials from '../components/home-page_components/Testimonials'
import Footer from "../components/footer_components/Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <EventCreators />
      <TicketFeatures />
      <TicketApp />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
