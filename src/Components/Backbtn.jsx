import React from 'react';
import {BiArrowBack} from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Backbtn() {
  return (
    <>
        <div className="backbtn" 
        style={{width:'100%', 
                background:'#000',
                color:'#fff',
                fontSize:'28px',
                marginLeft:'2rem'
                }}>
              <div>
                  <Link to='' style={{color:'white'}}>
                      <BiArrowBack/>
                  </Link>
              </div>
        </div>
    </>
  )
}

export default Backbtn