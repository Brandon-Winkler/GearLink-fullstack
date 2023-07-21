import React, { useState } from "react";

type FilterButtonProps = {
  children: React.ReactNode;
};

const FilterButton: React.FC<FilterButtonProps> = ({ children }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={`transition-all ease-in-out duration-150 rounded border-2 px-4 border-black bg-white custom-button ${active ? "active" : ""}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default FilterButton;

