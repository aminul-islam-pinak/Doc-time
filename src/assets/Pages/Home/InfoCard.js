import React from 'react';

const InfoCard = ({img , cardTitle}) => {
    return (
        
            <div class="card card-side bg-base-100 shadow-xl bg-accent">
  <figure ><img class="w-15 rounded-full px-5" src={img} alt="Movie"/></figure>
  <div class="card-body">
    <h2 class="card-title">{cardTitle}</h2>
    <p>Click the button to watch on Jetflix app.</p>
  
  </div>
</div>
      
    );
};

export default InfoCard;