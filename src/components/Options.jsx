import Button from "./Button";

const Options = ({ setActiveFilter, activeFilter }) => {
  const text = ["All", "Active", "Inactive"];

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-7 mb-3">
      {/* Header */}
      <h1 className="text-3xl font-semibold">Extensions List</h1>

      {/* Options Buttons */}
      <div className="flex gap-3">
        {text.map((item) => (
          <Button
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            text={item}
            key={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
