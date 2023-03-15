import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import {BsSearch} from "react-icons/bs";
import { useState } from 'react';


function header() {

  // const [isInput, setIsInput] =s React.useState(false);
  return (
        <nav className="header">
          <div className="div_1">

                <Link className="logo_box" to='/'>
                    <img src={logo} alt="netflix logo"/>
                </Link>

                <div className='menu_list'>
                    {/* <Link to='/'>Home</Link> */}
                    {/* <Link to='/mylist'>Movie</Link> */}
                    {/* <Link to='/tvshows'>TvShows</Link> */}
                </div>
          </div>
          <div className="div_2">
               <div>
                   <span><BsSearch/></span>
                   
                   {/* {isInput && ( */}
                      <input type="search" placeholder= 'search movie here'/>
                    {/* )} */}
               </div>
          </div>
        </nav>
  )
}

export default header;