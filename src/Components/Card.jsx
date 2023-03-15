import React, { useState } from 'react';
import video from './images/video.mp4'

function  Card({cardimg,cardTitle,cardInfo}){

      const [isHovered, setIsHovered] = useState(false);

      return (
            <>
                <div className="listItem"
                 onMouseEnter={()=>{setIsHovered(true)}}
                 onMouseLeave={()=>{ setIsHovered(false)}}
                 >
                        <img src={cardimg} alt="cover" className='card_img'
                        />
                              
                        { isHovered && (
                              // video
                              <div className="hover">
                                    <div className="image-video-container">
                                        <video src={video} loop autoPlay={true}></video>
                                    </div>
                                    <div className="info-container">
                                          <h3>{cardTitle}</h3>
                                          <p>{cardInfo}</p>
                                    </div>

                              </div>
                        )
                        }
                </div>
            </>
      )
}

export default Card;