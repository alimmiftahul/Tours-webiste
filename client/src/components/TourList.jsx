import React, { useContext } from 'react';

//
import { TourContext } from './TourContextProvider';

// import components

import Tour from './Tour';

import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';
const TourList = () => {
  const { tours, loading } = useContext(TourContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-blumine-700 text-4xl mt-[200px]" />
    );
  }
  if (tours.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-500 mt-48">
        Sorry, Your Tours not found
      </div>
    );
  }
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tours.map((tours, index) => {
            return (
              <Link to={`tours/${tours.id}`} key={index}>
                <Tour tours={tours}></Tour>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TourList;
