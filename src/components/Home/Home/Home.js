import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Project from "../Project/Project";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Timeline from "../Timeline/Timeline";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Timeline />
      <Service />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
