"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Dropdown from "./Dropdown";
import Enlaces from "../data/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [HandleClick, setHandleClick] = useState(false);
  return (
    <>
      {!HandleClick && (
        <header className="flex items-center justify-between 3xl:px-28 2xl:justify-between fixed px-6 top-0 w-full h-[67px] z-50 backdrop-blur-lg">
          <Link onClick={() => setHandleClick(false)} href="/">
            <Logo />
          </Link>
          <nav>
            {!HandleClick && (
              <ul className="hidden 3xl:flex [&>li]:select-none">
                {Enlaces.map(({ id, link, name }) => (
                  <li key={id}>
                    <Link
                      className="text-slate-100 text-2xl px-6 py-4 uppercase"
                      href={`/${link}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="" onClick={() => setHandleClick(!HandleClick)}>
              <FontAwesomeIcon
                className="3xl:hidden text-3xl text-slate-100 items-center cursor-pointer"
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
