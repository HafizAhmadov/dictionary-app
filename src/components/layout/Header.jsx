import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import moon from "../../assets/images/icon-moon.svg";
import Dropdown from "../ui/Dropdown.jsx";
import Darkmode from "../ui/Switch"

const Header = () => {
  const [fontFamily, setFontFamily] = useState("Sans Serif");
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="mt-[52px] mx-[352px]">
        <div className="flex justify-between ">
          <img src={logo} alt="" />
          <div className="flex">
            <Dropdown />
            <Darkmode />
            <img src={moon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
