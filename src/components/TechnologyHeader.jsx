import React from "react";

function TechnologyHeader() {
  return (
    <header>
      <h2 className="mb-5 text-5xl text-center leading-[49.92px] max-sm:text-4xl">
        <span className="headerText">Custom Software</span>
        <br />
        <span className="headerText text-[#595858]">Development Technologies</span>
      </h2>
      <p className="subHeaderText mx-auto mt-0 mb-10 text-xl text-center text-black max-w-[600px] max-sm:text-base">
        we have steadily expanded our expertise to <br />include Ruby on Rails,
        Python, Node.js, Golang, and <br />various frontend technologies.
      </p>
    </header>
  );
}

export default TechnologyHeader;
