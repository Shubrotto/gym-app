import React from "react";
import aboutimage from "../images/about.png";

const About = () => {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          asperiores repellat blanditiis alias ipsa quae temporibus repellendus
          quis veritatis officiis dolorem eaque, illum delectus exercitationem.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
};

export default About;
