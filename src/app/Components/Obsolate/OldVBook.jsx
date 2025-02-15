"use client";
import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Videos from "../../data/Videobook";
import ContentSection from "../ContentSection";

export default function VBook() {
  return (
    <>
      <ContentSection SectionId={"vbook"}>
        <h2 className=" pt-32 pb-8 text-3xl font-semibold mb-2 px-3 lg:px-0">
          VideoBook
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 col">
          {Videos.map(({id, title}) => (
            <LiteYouTubeEmbed
              key={title}
              id={id}
              title={title}
              poster="maxresdefault"
            />
          ))}
        </div>
      </ContentSection>
    </>
  );
}
