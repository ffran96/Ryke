"use client";

import { useMemo, useRef, useState } from "react";
import Video from "./Video";
import Videos from "../data/Videobook";
import { useParams, useRouter } from "next/navigation";
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
          <Select onValueChange={setSortBy} value={sortBy}>
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
  const router = useRouter();
  const videoRef = useRef(null);
  const pointerStartRef = useRef({ x: 0, y: 0, moved: false });
  const href = `/ultimos-trabajos/${video.slug}`;

  const playVideo = () => {
    videoRef.current?.play();
  };

  const stopVideo = () => {
    document.documentElement.classList.remove("is-pressing-video");
    videoRef.current?.stop();
  };

  const handlePointerDown = (event) => {
    document.documentElement.classList.add("is-pressing-video");
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      moved: false,
    };
    playVideo();
  };

  const handlePointerMove = (event) => {
    const deltaX = Math.abs(event.clientX - pointerStartRef.current.x);
    const deltaY = Math.abs(event.clientY - pointerStartRef.current.y);

    if (deltaX > 10 || deltaY > 10) {
      pointerStartRef.current.moved = true;
    }
  };

  const handlePointerUp = () => {
    stopVideo();

    if (!pointerStartRef.current.moved) {
      router.push(href);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    router.push(href);
  };

  return (
    <article
      className="watch-related-card group grid cursor-pointer grid-cols-[165px_1fr] gap-3 rounded-[8px] p-2 transition-colors duration-300 hover:bg-[#ffffff12] sm:grid-cols-[180px_1fr] xl:grid-cols-[190px_1fr] [-webkit-touch-callout:none]"
      onBlur={stopVideo}
      onContextMenu={(event) => event.preventDefault()}
      onFocus={playVideo}
      onKeyDown={handleKeyDown}
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onPointerCancel={stopVideo}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="link"
      tabIndex={0}
    >
      <div className="overflow-hidden rounded-[8px]">
        <Video
          ref={videoRef}
          Source={`/${video.src}`}
          Class="aspect-video w-full"
          Controlled
        />
      </div>

      <div className="min-w-0 py-0.5">
        <h3 className="watch-title line-clamp-2 text-[15px] font-semibold leading-5 text-[#ffffff] transition-colors duration-300 group-hover:text-[#dcd9d1]">
          {video.title}
        </h3>
        <p className="watch-muted mt-1 text-xs leading-5 text-[#f2efe899]">
          Enrique Ferri
        </p>
        <p className="watch-muted text-xs leading-5 text-[#f2efe899]">
          Videoclip · Proyecto audiovisual
        </p>
      </div>
    </article>
  );
}
