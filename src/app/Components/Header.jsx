"use client";
import Link from "next/link";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Enlaces from "../data/links";
import ThemeToggle from "./ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [HandleClick, setHandleClick] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const isWatchPage = pathname.startsWith("/ultimos-trabajos/");

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > window.innerHeight - 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!HandleClick && (
        <header
          data-past-hero={isPastHero}
          data-watch-page={isWatchPage}
          className="flex items-center justify-between 3xl:px-28 2xl:justify-between fixed px-6 top-0 w-full h-[67px] z-50 backdrop-blur-lg"
        >
          <Link onClick={() => setHandleClick(false)} href="/">
            <Logo />
          </Link>
          <nav className="flex items-center gap-4">
            {!HandleClick && (
              <ul className="hidden 2xl:flex [&>li]:select-none">
                {Enlaces.map(({ id, link, name }) => (
                  <li key={id}>
                    <Link
                      className="text-slate-100 text-xl px-4 py-4 uppercase"
                      href={`/${link}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <ThemeToggle className="hidden 2xl:flex" />
            <div className="" onClick={() => setHandleClick(!HandleClick)}>
              <FontAwesomeIcon
                className="2xl:hidden text-4xl text-slate-100 items-center cursor-pointer"
                icon={HandleClick ? faXmark : faBars}
              />
            </div>
          </nav>
        </header>
      )}
      <Dropdown
        Enlaces={Enlaces}
        HandleClick={HandleClick}
        setHandleClick={setHandleClick}
      />
    </>
  );
}
