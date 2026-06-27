"use client";
import Video from "./Video";
import Videos from "../data/Videobook";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function DesktopVideoGallery({ H3Classname }) {
  const params = useParams();
  const { slug } = params;

  return (
    <article>
      {Videos.map(({ title, src, slug }) => (
        <div key={title} className="md:basis-auto flex flex-col gap-2">
          <div
            className={
              params.slug + ".mp4" == src
                ? "bg-[#dcd9d1] box-content p-[6px] rounded-[12px] transition-all ease-in-out duration-300 shadow-sm drop-shadow-sm shadow-[#dcd9d1]"
                : ""
            }
          >
            <Video Source={`/${src}`} Href={`/ultimos-trabajos/${slug}`} />
          </div>

          <Link href={`/ultimos-trabajos/${slug}`}>
            <h3 className={` ${H3Classname} max-w-[400px] m-auto text-md uppercase text-center cursor-pointer`}>
              {title}
            </h3>
          </Link>
        </div>
      ))}
    </article>
  );
}
