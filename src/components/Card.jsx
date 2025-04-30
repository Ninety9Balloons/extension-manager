const Card = ({
  logo,
  name,
  description,
  isActive,
  toggleIsActive,
  removeItem,
}) => {
  // Callback function to App to inverse the isActive property
  function handleToggleClick() {
    toggleIsActive(name);
  }

  return (
    <div className="bg-neutral-000 dark:bg-neutral-700 p-4 rounded-xl border border-neutral-300 dark:border-neutral-600 mt-4 shadow-md flex flex-col justify-between">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <img src={logo} alt="Extension Image" />

        {/* Name and Description */}
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="font-semibold text-xl">{name}</h2>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>

      {/* Remove Button */}
      <div className="flex justify-between items-center">
        <div className="border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full px-3 py-1 flex items-center content-center transition-all">
          <button onClick={() => removeItem(name)} className="font-semibold">
            Remove
          </button>
        </div>

        {/* Is Active Toggle */}
        <div className="flex items-center justify-center">
          <label
            htmlFor={`${name}Toggle`}
            className="flex items-center cursor-pointer "
          >
            <div className="relative">
              <input
                id={`${name}Toggle`}
                type="checkbox"
                className="sr-only"
                onClick={handleToggleClick}
              />
              <div
                className={`flex items-center ${
                  isActive ? "bg-red-400 " : "bg-neutral-300 dark:bg-gray-600 "
                } w-11 h-6 rounded-full transition-all px-[2px]`}
              >
                <div
                  className={`bg-white w-5 h-5 rounded-full ${
                    isActive ? "translate-x-5" : "translate-x-0"
                  } transition-all`}
                ></div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
