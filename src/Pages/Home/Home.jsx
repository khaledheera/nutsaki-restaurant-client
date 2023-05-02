import React from 'react';
import banner from "../../assets/banner1.jpg"

const Home = () => {
    return (
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
                  With The{' '}
                  <span className="text-teal-accent-400">Recipe</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Want to eat delicious food?Then come on over here. <br/> As fast than you expect
                </p> <br />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;