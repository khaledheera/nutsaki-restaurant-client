import React, { useEffect, useState } from 'react';
import banner from "../../assets/banner1.jpg"
import Chefs from '../Chefs/Chefs';


const Home = () => {

  const [chefsProfile,setChefsProfile]=useState([])
  
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

      <div className='mt-5'>
<div>
  <h2 className='font-bold text-2xl'>The Korean chefs leading a new era in Seoul's dining scene</h2>
</div>

        <div className='grid grid-cols-3 gap-5'>

        {
          chefsProfile.map(
            chef=> <Chefs
            key={chef.id}
              chef={chef}
              
            >

              
            </Chefs>
          )
        }
        </div>
      </div>



       </div>
    );
};

export default Home;