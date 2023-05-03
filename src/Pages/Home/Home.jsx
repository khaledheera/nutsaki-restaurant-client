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
        <div className="relative bg-gray-900 bg-opacity-75 px-10 py-10">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none text-red-400">
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

      <div className="mt-10  bg-[#111827] px-10 py-10 ">
        <div>
          <h2 className="font-bold text-2xl text-center text-red-400">
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

        <div className="bg-gray-900 bg-opacity-75 inset-0 px-10 py-10">
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
<div>
<footer className="footer items-center p-4 bg-neutral text-neutral-content px-10 py-10">
  <div className="items-center grid-flow-col">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2023 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a  href="https://twitter.com/home?lang=en" target={`_blank`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a href="https://www.youtube.com/" target={`_blank`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a href="https://www.facebook.com/" target={`_blank`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
</div>

    </div>
  );
};

export default Home;
