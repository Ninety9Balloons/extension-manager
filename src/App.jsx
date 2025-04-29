import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Options from "./components/Options";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDark, setIsDark] = useState(false);

  // Fetch and set the data.
  useEffect(() => {
    fetch("../data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("error", error));
  }, []);

  // Filter the data
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredData(data);
    } else if (activeFilter === "Active") {
      setFilteredData(data.filter((item) => item.isActive === true));
    } else {
      setFilteredData(data.filter((item) => item.isActive === false));
    }
  }, [activeFilter, data]);

  // Callback for the isActive toggle button. Changes an items isActive state, updates the data state array
  const toggleActiveItem = (itemName) => {
    setData(
      data.map((obj) =>
        obj.name === itemName
          ? {
              ...obj,
              isActive: !obj.isActive,
            }
          : obj
      )
    );
  };

  // Callback for the Remove button, removes item from data array
  const removeItem = (itemName) => {
    setData(data.filter((item) => item.name !== itemName));
  };

  return (
    <div
      className={`${
        isDark ? "dark" : ""
      } w-full  h-full min-h-screen bg-linear-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]  py-6 px-3 flex flex-col text-neutral-800 dark:text-white`}
    >
      <div className="flex flex-col mx-auto lg:max-w-3/4">
        {/* Header */}
        <Header setIsDark={setIsDark} isDark={isDark} />

        {/* Options */}
        <Options
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Cards */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          {filteredData &&
            filteredData.map((item) => (
              <Card
                logo={item.logo}
                name={item.name}
                description={item.description}
                isActive={item.isActive}
                toggleIsActive={toggleActiveItem}
                key={item.name}
                removeItem={removeItem}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
