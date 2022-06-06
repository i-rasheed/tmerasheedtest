import React from "react";

export default function FavouritePage() {
  const developers = JSON.parse(localStorage.getItem("favList")) || [];

  return (
    <div className='home'>
      <h1 className='home-heading'>Favorites</h1>
      <div className='data-wrapper'>
        {developers.length === 0 ? (
          <p>No favorite developer yet</p>
        ) : (
          developers.map((ed, index) => (
            <div key={index} className='card'>
              <img
                src={ed.serviceImg}
                alt='servicephoto'
                style={{
                  width: "228px",
                  height: "139px",
                  borderRadius: "10px",
                }}
              />
              <button className='heart-wrapper'>
                <img
                  src={require("../../assets/red-heart.png")}
                  alt='redheart'
                />
              </button>
              <img
                src={ed.avatar}
                alt='avatar'
                className='avatar'
                style={{ width: "44px", height: "44px", borderRadius: "50%" }}
              />

              <div className='dev-details-wrapper'>
                <div>
                  <span className='dev-name'>{ed.displayName}</span>
                  <span className='price'>₦{ed.price}</span>
                </div>
                <button className='hire-btn'>Hire</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
