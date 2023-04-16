import {
  React,
  useState,
  useEffect,
  createContext,
} from 'react';

import { tourData } from './../data';

export const TourContext = createContext();

const TourContextProvider = ({ children }) => {
  const [tours, setTours] = useState(tourData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState(
    'Property type (any)'
  );
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price Range (any)');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const allCountries = tours.map((tours) => {
      return tours.country;
    });
    // console.log(allCountries);
    // remove duplicate
    const uniqueCountries = [
      'Location (any)',
      ...new Set(allCountries),
    ];
    console.log(uniqueCountries);
    // set Countries state
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = tours.map((tours) => {
      return tours.type;
    });
    // console.log(allCountries);
    // remove duplicate
    const uniqueProperties = [
      'Property Type (any)',
      ...new Set(allProperties),
    ];
    console.log(uniqueProperties);
    // set Countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    // console.log(country, property, price);
    // create dunction thath checks if the string include'(any)
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    // console.log(isDefault(country));

    //get first value of price and parse it
    const minPrice = parseInt(price.split('-')[0]);
    // get second price value
    const maxPrice = parseInt(price.split('-')[1]);

    // console.log(minPrice, maxPrice);

    const newTours = tourData.filter((tour) => {
      const tourPrice = parseInt(tour.price);
      if (
        tour.country === country &&
        tour.type === property &&
        tourPrice >= minPrice &&
        tourPrice <= maxPrice
      ) {
        return tour;
      }
      if (
        isDefault(country) &&
        isDefault(price) &&
        isDefault(property)
      ) {
        return tour;
      }
      if (
        !isDefault(country) &&
        isDefault(price) &&
        isDefault(property)
      ) {
        return tour.country === country;
      }
      if (
        isDefault(country) &&
        isDefault(price) &&
        !isDefault(property)
      ) {
        return tour.type === property;
      }
      if (
        isDefault(country) &&
        !isDefault(price) &&
        isDefault(property)
      ) {
        if (tourPrice >= minPrice && tourPrice <= maxPrice)
          return tour;
      }
      if (
        !isDefault(country) &&
        isDefault(price) &&
        !isDefault(property)
      ) {
        return (
          tour.country === country && tour.type === property
        );
      }
      if (
        !isDefault(country) &&
        !isDefault(price) &&
        isDefault(property)
      ) {
        if (tourPrice >= minPrice && tourPrice <= maxPrice)
          return tour.country === country;
      }
      if (
        isDefault(country) &&
        !isDefault(price) &&
        !isDefault(property)
      ) {
        if (tourPrice >= minPrice && tourPrice <= maxPrice)
          return tour.type === property;
      }
    });
    setTimeout(() => {
      return (
        newTours.length < 1
          ? setTours([])
          : setTours(newTours),
        setLoading(false)
      );
    }, 1000);
  };
  return (
    <TourContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        tours,
        loading,
        handleClick,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
