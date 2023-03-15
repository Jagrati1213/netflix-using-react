import React from 'react';
import Backbtn from './Backbtn';


function PlayMovie() {

  return (
    <>
    {/* display after image hover */}
    <div 
    style={{width:'100%', height:'90vh',
            background:'#000', display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            overflow:'hidden'}}>
      <Backbtn/>
      <iframe width="100%" height="90%" 
              style={{margin:'0 auto'}} 
              src="https://www.youtube.com/embed/b9EkMc79ZSU"
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen>
        </iframe>
    </div>
    </>
  )
}

export default PlayMovie;