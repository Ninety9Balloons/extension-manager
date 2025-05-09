import React from "react";

const Header = ({ setIsDark, isDark }) => {
  return (
    <div className="w-full flex justify-between items-center bg-neutral-000 dark:bg-neutral-700 rounded-lg px-3 py-2">
      {/* Logo container */}
      <div className="flex items-center ">
        <img
          src={`${
            isDark ? "/assets/images/logo-dark.svg" : "/assets/images/logo.svg"
          }`}
          alt="Logo"
        />
      </div>

      {/* Dark mode Button */}
      <button
        className="bg-neutral-100 dark:bg-neutral-600 flex p-3 rounded-lg cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-500 transition-all"
        onClick={() => setIsDark(!isDark)}
      >
        <img
          src={`/assets/images/icon-${isDark ? "sun" : "moon"}.svg`}
          alt="Dark mode switch"
        />
      </button>
    </div>
  );
};

export default Header;
