import React from 'react';
import Card from './Card';


function Row({title,arr=[]}) {
    
    const imgUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className='row'>
        <h2>{title}</h2>
          <div className='card'>
            {
                arr.map((item,ind)=>{
                    return (
                            <Card cardimg={`${imgUrl}${item.poster_path}`} 
                                  key={ind} 
                                  cardTitle={item.title}/>
                    )
                })
            }
          </div>
    </div>
  )
}

export default Row;