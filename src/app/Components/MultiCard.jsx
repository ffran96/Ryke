import React from "react";
import Card from "./Card";
import Timeline from "./Timeline";

export default function MultiCard({ Idiomas, Habilidades }) {
  const TimelineWidth = "w-[375px]";
  return (
      <div className="flex flex-col gap-4">
        <Card Height="h-[442px]" Title="Idiomas">
          <Timeline Width={TimelineWidth} Competencia={Idiomas} />
        </Card>
        <Card Height="h-[442px]" Title="Habilidades">
          <Timeline Width={TimelineWidth} Competencia={Habilidades} />
        </Card>
      </div>
  );
}
