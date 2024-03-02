import React from 'react';
 import "./Navbar.css";
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar = () => {
  const{user,logout}=UserAuth();
  console.log(user)
  return(
    // <div className='homepage'>
    <div className='flex-container'>
      <Link to="/">
      <b className="brand-title ">
      </b>
      <b className="brand-title ">
        <span>Watch</span>
        <span className="flix">Flix</span>
      </b>
    </Link>
      
    <span className='brand-title1'> Movies</span>
    <span className='brand-title1'> Tv shows</span>
    <span className='brand-title1'>Documantation</span>
    <Link to="/categoriess">
    <span className='brand-title1'> Catagories</span>
    </Link>
    <img className="bxbx-search-icon1" alt="" src="/bxbxsearch.svg" />
    {/* <img className="bxbx-search-icon2"
            alt=""
            src="/claritybelloutlinebadged.svg"
          /> */}
          {user?.email?(
    <div className='auth-buttons'>
    <Link to="/Account">
      <button className='sign-in-button'>Account</button>
      </Link>
      <Link to="/signup">
      <button className='sign-up-button'>Logout</button>
      </Link>
    </div>
          ):(
            <div className='auth-buttons'>
    <Link to="/login">
      <button className='sign-in-button'>Account</button>
      </Link>
      <Link to="/signup">
      <button className='sign-up-button'>Logout</button>
      </Link>
    </div>
          )}
  </div>
);
};
export default Navbar;