import React from 'react';
import chair from '../../images/chair.png';

const Banner = () => {
    return (
<div class="hero min-h-screen px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Start Here </h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary bg-info uppercase text-bold bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
    </div>
  </div>
</div>    );
};

export default Banner;