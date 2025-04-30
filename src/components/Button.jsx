import React from "react";

const Button = ({ activeFilter, setActiveFilter, text }) => {
  return (
    <button
      className={`${
        activeFilter === text
          ? "bg-red-400 border-red-500 text-neutral-800 hover:bg-red-300"
          : "bg-neutral-000 dark:bg-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-500 border-neutral-300 dark:border-neutral-500"
      } py-2 px-4 rounded-full border-[1px] font-semibold cursor-pointer transition-all`}
      onClick={() => setActiveFilter(text)}
    >
      {text}
    </button>
  );
};

export default Button;
