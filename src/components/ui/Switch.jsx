import { useState } from "react";

const Switch = ({ handleClick }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleClick(!isChecked)
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center ml-[26px] mr-[20px]">
        <div onClick={() => handleClick(isChecked)} className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-[20px] w-[40px] rounded-full ${
              isChecked ? "bg-purple" : "bg-gray1"
            }`}
          ></div>
          <div
            className={`absolute left-[3px] top-[3px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-[21px]" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switch;
