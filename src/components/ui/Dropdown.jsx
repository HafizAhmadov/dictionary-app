import { useState } from "react";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import style from "./Dropdown.module.scss";

const Dropdown = () => {
  const [fontStyle, setFontStyle] = useState({ name: "Sans Serif", fontFamily: "inter" });

  const customFontDatas = [
    { displayName: "Sans Serif", fontCode: "inter" },
    { displayName: "Serif", fontCode: "lora" },
    { displayName: "Mono", fontCode: "inconsolata" },
  ];

  const renderedFonts = customFontDatas.map((fontData) => {
    return (
      <>
        <a
          href="#"
          className={`text-black block text-[18px] font-bold font-${fontData.fontCode}`}
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={() =>
            setFontStyle({
              name: fontData.displayName,
              fontFamily: fontData.fontCode,
            })
          }
        >
          {fontData.displayName}
        </a>
      </>
    );
  });

  return (
    <>
      <div className={style.dropdown}>
        <button
          type="button"
          className={`inline-flex w-full items-center text-[18px] font-bold justify-center bg-white px-3 py-2 text-gray-900 outline-none  rgba(151,151,151,1),
            0px 4px 6px -4px rgba(0,0,0,0.1) border-gray2 mr-[26px] font-${fontStyle.fontFamily}`}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {fontStyle.name}
          <img src={arrowDown} className="pl-[18px]" />
        </button>
        <div className="h-2" />
        <div
          className="absolute right-0 z-10 origin-top-right w-[183px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none rounded-[16px] 
          mr-[26px] box-shadow: 0px 9px 36px -3px rgba(0,0,0,0.18),
          0px 4px 6px -4px rgba(0,0,0,0.1);"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div
            className="space-y-[16px] py-[24px] pl-[24px] pr-[69px] "
            role="none"
          >
            {renderedFonts}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;

// Dropdown menu, show/hide based on menu state.

//     Entering: "transition ease-out duration-100"
//       From: "transform opacity-0 scale-95"
//       To: "transform opacity-100 scale-100"
//     Leaving: "transition ease-in duration-75"
//       From: "transform opacity-100 scale-100"
//       To: "transform opacity-0 scale-95"
