import React from 'react';
import { tourData } from '../data';

import { useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

//import link

import { Link } from 'react-router-dom';

const TourDetails = () => {
  const { id } = useParams();
  // get the tours base on the id
  const tours = tourData.find((tour) => {
    return tour.id === parseInt(id);
  });
  console.log(tours);
  return (
    <section>
      <div className="container mx-auto min-h-[800px] mb-14">
        {/* title */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              {tours.name}
            </h2>
            <h3 className="text-lg mb-4">
              {tours.address}
            </h3>
          </div>
          <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
            <div className="bg-yellow-400 text-white px-3 rounded-full">
              {tours.type}
            </div>
            <div className="bg-blumine-500 text-white px-3 rounded-full">
              {tours.country}
            </div>
          </div>
          <div className="text-3xl font-semibold text-blumine-700">
            $ {tours.price}
          </div>
        </div>
        {/* image description */}
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <div className="max-w-[768px]">
            <div className="mb-8">
              <img src={tours.imageLg} alt="" />
            </div>
            <div className="flex gap-x-6 text-blumine-900 mb-6">
              <div className="flex gap-x-2 items-center">
                <BiBed className="text-2xl" />
                <div>{tours.bedrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiBath className="text-2xl" />
                <div>{tours.bathrooms}</div>
              </div>
              <div className="flex gap-x-2 items-center">
                <BiArea className="text-2xl" />
                <div>{tours.surface}</div>
              </div>
            </div>
            <div className="text-justify">
              {tours.description}
            </div>
          </div>
          <div className="flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-6">
            <div className="flex  items-center gap-x-4 mb-8">
              <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                <img src={tours.agent.image} alt="" />
              </div>
              <div>
                <div className="font-bold">
                  {tours.agent.name}
                </div>
                <Link
                  to=""
                  className="text-blumine-700 text-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
            {/* form */}
            <form>
              <input
                className="border border-gray-300 focus:border-blumine-700 outline-none 
                rounded w-full px-4 h-10 mb-2 text-sm"
                type="text"
                placeholder="Name"
              />
              <input
                className="border border-gray-300 focus:border-blumine-700 outline-none 
                rounded w-full px-4 h-10 mb-2 text-sm"
                type="text"
                placeholder="Email"
              />
              <input
                className="border border-gray-300 focus:border-blumine-700 outline-none 
                rounded w-full px-4 h-10 mb-2 text-sm"
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                className="border border-gray-300 focus:border-blumine-700 
              outline-none resize-none rounded p-4 h-36 w-full mb-2 text-sm text-gray-400"
                placeholder="Message"
                defaultValue="hello I am interest in this tour"
              ></textarea>
              <div className="flex gap-x-2">
                <button
                  type="submit"
                  className="text-white hover:bg-blumine-800 bg-blumine-500 rounded-full mb-3 p-4 text-sm w-full"
                >
                  Send message
                </button>
                <button
                  type="submit"
                  className=" hover:bg-gray-300 bg-gray-200 rounded-full  mb-3 p-4 text-sm w-full"
                >
                  Call
                </button>
              </div>
              <button
                type="submit"
                className=" hover:bg-yellow-400 bg-yellow-300 rounded text-white font-semibold mb-3 p-4 text-sm w-full"
              >
                book now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
