import React from "react";

type Props = {
  selectedStops: number[];
  setSelectedStops: React.Dispatch<React.SetStateAction<number[]>>;
};

const Filters = ({ selectedStops, setSelectedStops }: Props) => {
  const stopsOptions = [
    { label: "Все", value: -1 },
    { label: "Без пересадок", value: 0 },
    { label: "1 пересадка", value: 1 },
    { label: "2 пересадки", value: 2 },
    { label: "3 пересадки", value: 3 },
  ];

  const handleCheckboxChange = (value: number) => {
    if (value === -1) {
      setSelectedStops([]);
    } else {
      setSelectedStops((prevStops) =>
        prevStops.includes(value)
          ? prevStops.filter((stop) => stop !== value)
          : [...prevStops, value]
      );
    }
  };

  return (
    <>
      <h3 className="font-bold mb-2 pl-4 uppercase">Количество пересадок</h3>
      {stopsOptions.map((option) => (
        <div
          key={option.value}
          className="flex items-center pl-4 py-2 hover:bg-[#F1FCFF] transition-all duration-300 ease-in dropdown__checkbox"
        >
          <input
            type="checkbox"
            checked={
              option.value === -1
                ? selectedStops.length === 0
                : selectedStops.includes(option.value)
            }
            onChange={() => handleCheckboxChange(option.value)}
            className="mr-2 cursor-pointer checkbox-input"
          />
          <label className="ml-1">{option.label}</label>
        </div>
      ))}
    </>
  );
};

export default Filters;
