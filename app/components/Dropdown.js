'use client';
import React from 'react';

export default function Dropdown({
  transportType,
  setTransportType,
  loaders,
  setLoaders
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const options = [
    "Мебель",
    "Стройматериалы",
    "Бытовая техника",
  ];

  return (
    <div className="place-self-center flex items-center space-x-4 p-4 relative text-2xl text-[#4A5A6F]">
      <div className="relative">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="border-2 border-solid border-[#8EACD5] bg-white rounded-full h-16 px-4 py-2 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span>{transportType}</span>
          <img src="./img/icon_type.svg" alt="Dropdown Icon" />
        </button>

        {isOpen && (
          <ul className="z-10 absolute left-0 mt-2 w-56 bg-white border border-blue-300 rounded-lg">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setTransportType(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center border-2 border-solid border-[#8EACD5] bg-white rounded-full h-16 px-4 py-2 space-x-2">
        <span>Грузчики</span>
        <button
          type="button"
          className="px-2"
          onClick={(e) => {
            e.preventDefault();
            setLoaders(Math.max(0, loaders - 1));
          }}
        >
          <img src="./img/minus.svg" alt="Minus Icon" />
        </button>
        <span className="w-6 text-center">{loaders}</span>
        <button
          type="button"
          className="px-2"
          onClick={(e) => {
            e.preventDefault();
            setLoaders(loaders + 1);
          }}
        >
          <img src="./img/pluse.svg" alt="Plus Icon" />
        </button>
      </div>
    </div>
  );
}
