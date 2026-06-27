import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RRSS from "../data/RRSS";
import ContactToggle from "./ContactToggle";
import ThemeToggle from "./ThemeToggle";

export default function Dropdown({ HandleClick, Enlaces, setHandleClick }) {
  const { instagram, youtube, email } = RRSS;

  return (
    <>
      {HandleClick && (
        <div className="font-display flex fixed left-0 justify-center items-center h-full z-40 w-full backdrop-blur-3xl">
          <ul className="space-y-20 text-center uppercase">
            {Enlaces.map(({ id, link, name }) => (
              <li className="text-slate-100 text-2xl max-w-[200px]" key={id}>
                <Link onClick={() => setHandleClick(!HandleClick)} href={`/${link}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ThemeToggle className="flex" />
          </div>
          <FontAwesomeIcon
            onClick={() => setHandleClick(!HandleClick)}
            className="absolute right-7 top-4 text-3xl text-slate-100 items-center"
            icon={faXmark}
          />
          <ContactToggle
            instagram={instagram}
            youtube={youtube}
            email={email}
          />
        </div>
      )}
    </>
  );
}
