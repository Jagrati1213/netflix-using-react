import React from 'react';
import video from './images/video.mp4';
import {BsFillPlayCircleFill,BsPlusCircleFill} from 'react-icons/bs';
import {AiFillLike,AiFillDislike} from 'react-icons/ai';

function  Card({cardimg,cardTitle}){

      const showHoverBox = (event) =>{
            
            const hover_box = event.target.parentElement.lastChild;
            hover_box.style.opacity ='1';
            hover_box.style.zIndex = '90';
      }
      const hideHoverBox = (event) =>{
            
            const hover_box = event.target.parentElement.lastChild;
            hover_box.style.opacity ='0';
            hover_box.style.zIndex = '-1';
      }

      return (
            <div className='parent'>
                  <img src={cardimg} alt="cover" className='card_img' 
                       onMouseEnter={(e)=>{showHoverBox(e)}}
                       onMouseOut={(e)=>{hideHoverBox(e)}}/>
                  {/* display after image hover */}
                  <div className="hover_card">
                        <div className="img_video_container">
                              <video src={video} loop={true} autoPlay={true}></video>
                        </div>
                        <div className="info_container">
                              <h2>{cardTitle}</h2>
                              <div className="icons_container">
                                   <BsFillPlayCircleFill/>
                                   <AiFillLike/>
                                   <AiFillDislike/>
                                   <BsPlusCircleFill/>
                              </div>
                        </div>

                  

                  </div>

             </div>
      )
}

export default Card;