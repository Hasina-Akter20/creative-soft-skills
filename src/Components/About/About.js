import React from "react";
import img from "../../images/about-img.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="container about-div">
        <div className="w-50 pt-5">
          <img src={img} alt="" />
        </div>
        <div className="w-50 about-text ">
          <h1>About Creative Soft Skills</h1>
          <p>
            Creative Soft Skills is an Erasmus+ project aiming to produce a
            methodology able to identify, strengthen and recognize artists’ soft
            skills and facilitate the connection between artists and the labour
            market through the certification of creative soft skills. The
            project is therefore directed to artists of any kind of art (from
            visual to classical arts) at the early stage of their career and
            organizations dedicated to training, developing and promoting
            sustainable competitiveness through creative soft skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
