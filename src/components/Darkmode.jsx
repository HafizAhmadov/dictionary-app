import { useEffect } from "react";
import Switch from "./ui/Switch";

function getDefaultMode() {
  const savedMode = localStorage.getItem('mode');
  return savedMode ? savedMode : 'light';
}

const Darkmode = () => {
  const [mode, setMode] = useState(getDefaultMode());

  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleSwitchClick = (isChecked) => {
    setMode(isChecked ? 'dark' : 'light');
  };

  console.log(mode);

  return (
    <>
      <Switch handleClick={handleSwitchClick} />
    </>
  );
};

export default Darkmode;
