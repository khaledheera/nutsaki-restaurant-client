import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';

const ViewRecipes = () => {

const {id}=useParams();
const recipes=useLoaderData()
console.log(recipes);

    return (
        <div >
         
         <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={recipes.chefPicture} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{recipes.chefName}</h2>
    <p>{recipes.description}</p>
    <p><span className='font-bold'>Experience:</span>{recipes.yearsOfExperience} Years</p>
    <p><span className='font-bold'>Numbers of recipes:</span>{recipes.numbersOfRecipes}</p>
    <div className='flex justify-center items-center'>
      <AiFillLike></AiFillLike>
      <p>{recipes.likes}k</p>
    </div>
  </div>
        </div>
        <div className='grid grid-cols-3 mt-8'>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{recipes.recipeName1}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients1}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod1}</p>
    <p><span className='font-bold'> Rating:</span>{recipes.rating1}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{recipes.recipeName2}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients2}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod2}</p>
    <p><span className='font-bold'> Rating:</span>{recipes.rating2}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{recipes.recipeName3}</h2>
    <p><span className='font-bold'>Ingredients:</span>{recipes.ingredients3}</p>
    <p><span className='font-bold'>Cooking Method:</span>{recipes.cookingMethod3}</p>
    <p><span className='font-bold'> Rating:</span>{recipes.rating3}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
        </div>
         
        </div>
    );
};

export default ViewRecipes;