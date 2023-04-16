import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import TourList from '../components/TourList';
const HomePage = () => {
  return (
    <div className="min-h-[1080px]">
      <Banner />
      <TourList />
    </div>
  );
};

export default HomePage;
