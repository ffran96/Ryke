"use client";

import { useMemo, useRef, useState } from "react";
import Video from "./Video";
import Videos from "../data/Videobook";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DesktopVideoGallery() {
  const params = useParams();
  const [sortBy, setSortBy] = useState("chronological");

  const relatedVideos = useMemo(() => {
    const videos = [...Videos].filter(({ slug }) => slug !== params.slug);

    if (sortBy === "asc") {
      return videos.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "desc") {
      return videos.sort((a, b) => b.title.localeCompare(a.title));
    }

    if (sortBy === "artist") {
      return videos.sort((a, b) =>
        getArtist(a.title).localeCompare(getArtist(b.title))
      );
    }

    return videos.reverse();
  }, [params.slug, sortBy]);

  return (
    <section className="watch-related-list space-y-3" aria-label="Videos relacionados">
      <div className="flex items-center justify-between gap-3">
        <p className="watch-title text-sm font-semibold text-[#ffffff]">
          Relacionados
        </p>
        <div className="watch-muted flex items-center gap-2 text-xs font-medium text-[#f2efe899]">
          Ordenar por
          <Select
            onValueChange={setSortBy}
            value={sortBy}
          >
            <SelectTrigger className="watch-select-trigger w-[142px]">
              <SelectValue placeholder="Orden" />
            </SelectTrigger>
            <SelectContent className="watch-select-content">
              <SelectItem value="chronological">Cronológico</SelectItem>
              <SelectItem value="asc">Ascendente</SelectItem>
              <SelectItem value="desc">Descendente</SelectItem>
              <SelectItem value="artist">Artista</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
        {relatedVideos.map((video) => (
          <RelatedVideoCard key={video.title} video={video} />
        ))}
      </div>
    </section>
  );
}

function getArtist(title) {
  return title.split(" - ")[0].replaceAll("'", "").trim();
}

function RelatedVideoCard({ video }) {
  const videoRef = useRef(null);
  const href = `/ultimos-trabajos/${video.slug}`;

  return (
    <article
      className="watch-related-card group grid grid-cols-[165px_1fr] gap-3 rounded-[8px] p-2 transition-colors duration-300 hover:bg-[#ffffff12] sm:grid-cols-[180px_1fr] xl:grid-cols-[190px_1fr]"
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => videoRef.current?.stop()}
      onFocus={() => videoRef.current?.play()}
      onBlur={() => videoRef.current?.stop()}
    >
      <Link className="overflow-hidden rounded-[8px]" href={href}>
        <Video
          ref={videoRef}
          Source={`/${video.src}`}
          Class="aspect-video w-full"
          Controlled
        />
      </Link>

      <Link className="min-w-0 py-0.5" href={href}>
        <h3 className="watch-title line-clamp-2 text-[15px] font-semibold leading-5 text-[#ffffff] transition-colors duration-300 group-hover:text-[#dcd9d1]">
          {video.title}
        </h3>
        <p className="watch-muted mt-1 text-xs leading-5 text-[#f2efe899]">
          Enrique Ferri
        </p>
        <p className="watch-muted text-xs leading-5 text-[#f2efe899]">
          Videoclip · Proyecto audiovisual
        </p>
      </Link>
    </article>
  );
}
