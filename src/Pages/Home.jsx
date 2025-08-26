import React from "react";
import Hero from "../components/Hero";
import HowWeWork from "../components/HowWeWork";
import Technologyservices from "../components/TechnologyServices";
import JoinUs from "../components/JoinUs";
import LearnMore from "../components/LearnMore";
import Projects from "../components/Projects";



const Home = () => {
  return (
  <div>
    <Hero/>
    <HowWeWork/>
    <Technologyservices/>
    <Projects/>
    <LearnMore/>
    <JoinUs/>

  </div>
  );
};

export default Home;
