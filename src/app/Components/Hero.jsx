"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import RRSS from "../data/RRSS";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Hero() {
  const { instagram, youtube, email } = RRSS;

  return (
    <section id={"Hero"} className="select-none relative">
      <video
        className="h-svh  w-svw object-cover"
        src="video-hero.mp4"
        autoPlay
        playsInline
        loop
        muted
      />
      <div className="flex flex-col items-center justify-center gap-3 absolute -bottom-2 md:bottom-2 left-[50%] transform -translate-x-2/4 -translate-y-2/4 z-10">
        <a
          href={`mailto:${email}`}
          rel="no-referrer"
          className="group decoration-none text-inherit flex justify-center items-center gap-4 text-[#ffffff] font-thin text-lg md:text-2xl rounded-full backdrop-blur-sm px-6 py-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          {email}
        </a>

        <div className="flex gap-4">
          <a
            href={"https://www.youtube.com/" + youtube}
            rel="no-referrer"
            target="_blank"
            className="decoration-none text-inherit text-[#ffffff] text-4xl cursor-pointer hover:text-[#c4302b] transition-colors delay-100"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a
            href={"https://www.instagram.com/" + instagram}
            rel="no-referrer"
            target="_blank"
            className="decoration-none text-inherit text-[#ffffff] text-4xl cursor-pointer hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-xl px-[4px] transition-colors delay-100"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[100%] bg-gradient-to-t from-[#000000] from-0% via-[#00000019] via-40% to-[#000000] to-100%" />
    </section>
  );
}
