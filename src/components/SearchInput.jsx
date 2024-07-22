import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
function SearchInput() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="relative shadow-custom-dark rounded-md  pl-16 flex-1 max-w-[460px] dark:bg-darkColors-dark-blue">
      <div className="absolute top-1/2 transform -translate-y-1/2  left-7 flex items-center">
        <IoMdSearch className="text-xl text-lightColors-dark-gray dark:text-white" />
      </div>
      <input
        className="w-full outline-none pr-4 py-4 text-sm font-semibold 
        text-lightColors-very-dark-blue dark:text-white dark:bg-darkColors-dark-blue 
        rounded-r-md dark:placeholder:text-white"
        type="text"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default SearchInput;
