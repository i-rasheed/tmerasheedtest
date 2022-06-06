import React from "react";
import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <div className='nav'>
      <img src={require("../../assets/logo.png")} alt='logo' />

      <div className='navitemwrapper'>
        <NavLink to='/'>
          <img
            className='navicon'
            src={require("../../assets/search.png")}
            alt='search'
          />
          <img
            className='searchhandle'
            src={require("../../assets/searchhandle.png")}
            alt='search'
          />
        </NavLink>
        <h1 className='nav-item hom'>Home</h1>
      </div>

      <div className='navitemwrapper'>
        <NavLink to='/favourite'>
          <img
            src={require("../../assets/navheart.png")}
            className='navicon'
            alt='heart'
          />
        </NavLink>
        <h1 className='nav-item fav'>favourites</h1>
      </div>
    </div>
  );
}
