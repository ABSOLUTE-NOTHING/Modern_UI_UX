import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap items-center justify-center gap-7 mb-10">
          {benefits.map((itm) => (
            <div
              key={itm.id}
              className="p-0.5 block relative bg-no-repeat bg-[length:200%_240%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${itm.iconUrl})`,
              }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none ">
                <h5 className="h5 mb-5">{itm.title}</h5>
                <p className="body-2 mb-6 text-n-3">{itm.text}</p>
                <div className="flex items-center mt-auto">
                  <img src={itm.iconUrl} width={48} alt={itm.title} />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {itm.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{
                  clipPath: "url(#benefits)",
                }}
              >
                <div className="absolute inset-0.5 opacity-0 transition-opacity hover:opacity-30">
                  {itm.imageUrl && (
                    <img
                      src={itm.imageUrl}
                      width={380}
                      height={362}
                      alt={itm.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
