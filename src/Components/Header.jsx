import React  from 'react'
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import {BsSearch} from "react-icons/bs";


function header() {

  return (
        <nav className="header">
          <div className="div_1">

                <Link className="logo_box" to='/'>
                    <img src={logo} alt="netflix logo"/>
                </Link>

                <div className='menu_list'>
                    <Link to='/'>Home</Link>
                    <Link to='/movie'>Movie</Link>
                    <Link to='/tvshows'>TvShows</Link>
                </div>
          </div>
          <div className="div_2">
               <div onClick={()=>{ alert("Not availble..")}}>
                   <span><BsSearch/></span>
               </div>
          </div>
        </nav>
  )
}

export default header;