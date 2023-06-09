import { React, useContext } from 'react';

import CountryDropDown from './CountryDropDown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

import { RiSearch2Line } from 'react-icons/ri';
import { TourContext } from './TourContextProvider';

const Search = () => {
  const { handleClick } = useContext(TourContext);
  return (
    <div
      className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row 
    justify-between gap-4 lg:gap-x-4 relative lg:-top-4 lg:shadow-1 bg-white 
    lg:bg-transpaten lg:backdrop-blur rounded-lg"
    >
      <CountryDropDown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => handleClick()}
        className="bg-blumine-700 hover:bg-blumine-800 transition w-full lg:max-w-[162px]
       h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
