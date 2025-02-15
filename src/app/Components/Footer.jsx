import React from "react";

export default function Footer() {
  return (
    <footer
      id={"footer"}
      className="bg-[#dcd9d1] text-[#000000d5] py-4 flex items-center justify-center mt-20"
    >
      <div className="flex gap-2">

      <p className="text-md italic">
        designed by{" "}
      </p>
      <a href="https://webeo.es" target="_blank">
          <span className="text-[#000000] not-italic font-semibold cursor-pointer hover:underline">
            Webeo
          </span>
        </a>
      </div>
    </footer>
  );
}
