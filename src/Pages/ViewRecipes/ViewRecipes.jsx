import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
import { toast } from 'react-hot-toast';
import LazyLoad from 'react-lazy-load';
import './ViewRecipes.css'

const ViewRecipes = () => {
  const [fav,setFav]=useState(true)
  const [fav2,setFav2]=useState(true)
  const [fav3,setFav3]=useState(true)
//  

const {id}=useParams();
const recipes=useLoaderData()
console.log(recipes);

    return (
        <div className='recipes' >
         
         <div className="card card-side bg-base-100 shadow-xl">
         <LazyLoad threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
         <figure><img src={recipes.chefPicture} alt="Movie"/></figure>
    </LazyLoad>

  
  <div className="card-body  bg-gradient-to-tr from-amber-300 via-yellow-900 to-amber-300 text-white">
    <h2 className="card-title">{recipes.chefName}</h2>
    <p>{recipes.description}</p>
    <p><span className='font-bold'>Experience:</span>{recipes.yearsOfExperience} Years</p>
    <p><span className='font-bold'>Numbers of recipes:</span>{recipes.numbersOfRecipes}</p>
    <div className='flex justify-center items-center gap-2'>
      <AiFillLike></AiFillLike>
      <p>{recipes.likes}k</p>
    </div>
  </div>
        </div>
        <div className='grid grid-cols-3 mt-8'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body  bg-gradient-to-tr bg-gradient-to-tr from-amber-300 via-yellow-900 to-amber-300 text-white">
    <h2 className="card-title">{recipes.recipeName1}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients1}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod1}</p>
    <p><span className='font-bold'> Rating: </span>{recipes.rating1}star</p>
    <div  className={`card-actions justify-end ${fav?"block":"hidden"}`}>
      <button onClick={()=>{
        toast.success('This Recipe is My fav')
        setFav(false)
      
      }} className="btn btn-ganger">Favorite</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body  bg-gradient-to-tr bg-gradient-to-tr from-amber-300 via-yellow-900 to-amber-300 text-white">
    <h2 className="card-title">{recipes.recipeName2}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients2}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod2}</p>
    <p><span className='font-bold'> Rating:</span>{recipes.rating2}star</p>
    <div  className={`card-actions justify-end ${fav2?"block":"hidden"}`}>
      <button onClick={()=>{
        toast.success('This Recipe is My fav')
        setFav2(false)
      
      }} className="btn btn-danger">Favorite</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body  bg-gradient-to-tr from-amber-300 via-yellow-900 to-amber-300 text-white">
    <h2 className="card-title">{recipes.recipeName3}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients3}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod3}</p>
    <p><span className='font-bold'> Rating:</span>{recipes.rating3}star</p>
    <div  className={`card-actions justify-end ${fav3?"block":"hidden"}`}>
      <button onClick={()=>{
        toast.success('This Recipe is My fav')
        setFav3(false)
      
      }} className="btn btn-danger">Favorite</button>
    </div>
  </div>
</div>
        </div>
         
        </div>
    );
};

export default ViewRecipes;