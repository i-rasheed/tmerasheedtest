import React from "react";
import { NavLink } from "react-router-dom";
import "../Nav/Nav.css";

export default function Nav() {
  return (
    <div className='nav'>
      <img src={require("../../assets/logo.png")} alt='logo' />
      <NavLink to='/' activeclassname='active'>
        <div className='navitemwrapper'>
          <img
            className='navicon'
            src={require("../../assets/search.png")}
            alt='search'
          />
          <img
            className='searchhandle'
            src={require("../../assets/searchhandle.png")}
            alt='search'
          />{" "}
          <h1 className='nav-item hom'>Home</h1>
        </div>
      </NavLink>
      <NavLink to='/favourite' activeclassname='active'>
        <div className='navitemwrapper'>
          <img
            src={require("../../assets/navheart.png")}
            className='navicon'
            alt='heart'
          />{" "}
          <h1 className='nav-item fav'>favourites</h1>
        </div>
      </NavLink>
    </div>
  );
}
