import React, { useEffect, useState } from "react";
import banner from "../../assets/banner1.jpg";
import Chefs from "../Chefs/Chefs";
import carousel1 from "../../assets/kebab-platter-with-grilled-chicken-lula-kebab-ribs-kebab-grilled-peppers.jpg";
import carousel2 from "../../assets/cheesy-tokbokki-korean-traditional-food-black-board-background-lunch-dish.jpg";
import carousel3 from "../../assets/grilled-pork-served-with-sauce-korean-style.jpg";
import carousel4 from "../../assets/korean-food-jeyuk-bokkeum-fried-pork-korean-style-sauce(1).jpg";
import carousel5 from "../../assets/top-view-delicious-bell-peppers-cooked-vegetable-meal-with-ground-meat-greens-dark-background-dish-dinner-meal-bake-color-calorie.jpg";
import carousel6 from "../../assets/top-view-tasty-cooked-potatoes-with-greens-dark-desk-potato-dinner-dish-cips-cooking-meal.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const [chefsProfile, setChefsProfile] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((response) => response.json())
      .then((data) => setChefsProfile(data));
  }, []);
  return (
    <div>
      <div className="relative">
        <img
          src={banner}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Cook Easy With <br className="hidden md:block" />
                  With The <span className="text-teal-accent-400">Recipe</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Want to eat delicious food?Then come on over here. <br /> As
                  fast than you expect
                </p>{" "}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 ">
        <div>
          <h2 className="font-bold text-2xl text-center">
            The Korean chefs leading a new era in Seoul's dining scene
          </h2>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-8">
          {chefsProfile.map((chef) => (
            <Chefs key={chef.id} chef={chef}></Chefs>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-2xl text-center mt-5">Our Shop</h2>
        <h3 className="text-center font-semibold">
          Our All Delicious & Tasty Product
        </h3>
        <div className="mx-auto">
          <div className="w-full carousel rounded-box ">
            <div className="carousel-item w-full">
              <img
                src={carousel5}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel6}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel2}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel3}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel4}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel5}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src={carousel1}
                className="w-full"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 bg-opacity-75 inset-0">
          <h2 className="font-bold text-5xl text-center mt-10 text-amber-300">
            Get 25% Discount
          </h2>
          <p className="font-semibold text-center text-4xl mt-10 text-white">
            Explore Special Taste & The <br/> Best Quality
          </p>
          <div className="text-center">
            <Link to={"/hjk"} className="btn btn-outline btn-warning text-amber-400 mt-10">
              Make A Reservation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
