import React from 'react';

const Chefs = ({chef}) => {
    return (
        <div className="card w-96 glass">
  <figure><img src={chef.chefPicture} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title text-center">{chef.chefName}</h2>
    <p>{chef.description}</p>
    <p><span className='font-bold'>Experience:</span>{chef.yearsOfExperience} Years</p>
    <p><span className='font-bold'>Numbers of recipes:</span>{chef.numbersOfRecipes}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">View Recipes </button>
    </div>
  </div>
</div>
    );
};

export default Chefs;