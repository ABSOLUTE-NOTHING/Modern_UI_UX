import React from "react";
import Section from "./Section";
import { smallSphere, stars } from "../assets";

const Pricing = () => {
  return (
    <Section className={`overflow-hidden`} id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img src={smallSphere} width={255} height={255}  alt="Sphere" />
            <div>
                <img src={stars} alt="" />
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
