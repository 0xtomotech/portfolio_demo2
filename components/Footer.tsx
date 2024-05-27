import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Footer = () => {
  return (
    <footer className="w-full py-20 pb-10" id="contact">
      <div className="absolute -bottom-8 left-0 min-h-24 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help achieve
          your goals.
        </p>
        <a href="mailto:0xtomotech@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 0xtomotech
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
