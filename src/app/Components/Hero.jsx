"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import RRSS from "../data/RRSS";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default function Hero() {
  const { instagram, youtube, email } = RRSS;

  return (
    <section id={"Hero"} className="select-none relative h-svh text-[#ffffff]">
      <div className="flex flex-col items-center justify-center gap-3 absolute -bottom-2 md:bottom-2 left-[50%] transform -translate-x-2/4 -translate-y-2/4 z-10">
        <a
          href={`mailto:${email}`}
          rel="no-referrer"
          className="group decoration-none text-inherit flex justify-center items-center gap-3 text-[#ffffff] font-medium text-sm sm:text-base md:text-lg rounded-full border border-[#ffffff33] bg-[#00000024] backdrop-blur-sm px-5 py-2 cursor-pointer drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#ffffff99] hover:bg-[#dcd9d1] hover:text-[#000000] hover:scale-[1.03]"
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
    </section>
  );
}
