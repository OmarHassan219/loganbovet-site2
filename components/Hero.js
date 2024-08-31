"use client";
import { useEffect } from "react";
import Typed from "typed.js";

// To add soc icon under subtitle
/*
          <div className="homesoc">
              <a target="_blank" href="https://www.linkedin.com/in/logan-bovet/">
                  <span className="ion ion-social-linkedin" />
              </a>
          </div>
*/

const Hero = ({ mouse }) => {
  useEffect(() => {
    new Typed(".typed-subtitle", {
      strings: ["Responsable Informatique/Support.", "Software.", "Hardware.","Réseau."],
      loop: true,
      typeSpeed: 110,
    });
  }, []);
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <div className="h-title glitch-effect" data-text="Logan BOVET">
              <span>Logan BOVET</span>
            </div>
            <span className="typed-subtitle" />
          </div>
          <div className="homesoc">
            <p><a target="_blank" href="https://www.linkedin.com/in/logan-bovet/"><span className="ion ion-social-linkedin" /></a></p>
          </div>
        </div>
        
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};
export default Hero;
