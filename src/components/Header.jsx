import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";
import useDarkMode from "../hooks/useDarkMode";
function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <header className="px-[4.5rem] py-5 flex items-center justify-between shadow-custom-dark bg-white dark:bg-darkColors-dark-blue">
      <h2 className="font-extrabold text-xl dark:text-white">
        Where in the world?
      </h2>
      <button
        className="flex items-center gap-[6px] font-bold dark:text-white"
        aria-label="Toggle Dark Mode"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <IoMoonSharp /> : <IoMoonOutline />}
        Dark Mode
      </button>
    </header>
  );
}

export default Header;
