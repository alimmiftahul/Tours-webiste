import React, {
  useState,
  useEffect,
  useContext,
} from 'react';

import {
  RiHome5Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { Menu } from '@headlessui/react';

import { TourContext } from './TourContextProvider';

const PropertyDropdown = () => {
  const { property, setProperty, properties } =
    useContext(TourContext);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(countries);

  // to return all countries

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">
            select your property
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-blumine-700 transition"
              as="li"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
