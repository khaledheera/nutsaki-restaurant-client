import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';


const Chefs = ({chef}) => {
  console.log(chef);
    return (
        <div className="card w-96 glass">
  <figure><img src={chef.chefPicture} alt="car!"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title text-center">{chef.chefName}</h2>
    <p><span className='font-bold'>Experience:</span>{chef.yearsOfExperience} Years</p>
    <p><span className='font-bold'>Numbers of recipes:</span>{chef.numbersOfRecipes}</p>
  
    <div className='flex justify-center items-center'>
      <AiFillLike></AiFillLike>
      <p>{chef.likes}k</p>
    </div>
    <NavLink className="card-actions justify-center">
      <Link to={ `/recipes/${chef.id}`} className="btn btn-primary">View Recipes </Link>
    </NavLink>
  </div>
</div>
    );
};

export default Chefs;