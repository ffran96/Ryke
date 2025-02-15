"use client";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ContactToggle({ instagram, youtube, email }) {
  const [ShowRRSS, setShowRRSS] = useState(false);

  return (
    <div
      className={`${
        ShowRRSS ? "right-0" : "-right-16"
      } fixed transition-all duration-300 ease-in-out top-1/2 transform -translate-y-1/2 bg-[#00000099] rounded-tl-2xl rounded-bl-2xl w-16 h-48 pl-2 flex flex-col gap-6  justify-center items-center`}
    >
      <a
        href={"https://www.instagram.com/" + instagram}
        rel="no-referrer"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-white text-[34px]"
          icon={faInstagram}
        />
      </a>
      <a
        href={"https://www.youtube.com/" + youtube}
        rel="no-referrer"
        target="_blank"
      >
        <FontAwesomeIcon className="text-white text-3xl" icon={faYoutube} />
      </a>
      <a href={`mailto:${email}`} rel="no-referrer">
        <FontAwesomeIcon className="text-white text-3xl" icon={faEnvelope} />
      </a>
      <div
        onClick={() => setShowRRSS(!ShowRRSS)}
        className="absolute -left-[26px] py-6 px-2 rounded-tl-2xl rounded-bl-2xl bg-[#00000099]"
      >
        <FontAwesomeIcon
          className={`${ShowRRSS && "rotate-180"} transition-all duration-300`}
          icon={faAngleLeft}
        />
      </div>
    </div>
  );
}
