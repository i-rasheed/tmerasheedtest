import React from "react";

export default function FavouritePage() {
  return (
    <div>
      <h1 className='home-heading'>Favorites</h1>
      <img src='' alt='field-img' style={{ width: "228px", height: "139px" }} />
      <div>
        <img src='' alt='heart' />
      </div>
      <img src='' alt='dp' style={{ width: "44px", height: "44px" }} />

      <div className='dev-details-wrapper'>
        <div>
          <span className='dev-name'>name</span>
          <span className='price'>price</span>
        </div>
        <button className='hire-btn'>hire</button>
      </div>
    </div>
  );
}
