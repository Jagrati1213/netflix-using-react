import React, { useEffect, useState } from 'react';
import '../Home.scss';
import Row from './Row';
import {BsFillPlayFill} from 'react-icons/bs';
import {FiPlus} from 'react-icons/fi'

const apikey="60e44d36825f1e1e45aca35954739a6d";
const url = "https://api.themoviedb.org/3/movie/";
const popular = "popular";
const upcoming = "upcoming";
const topRated = "top_rated";

function Home() {

    const [popularData, setPopularData]= useState([]);
    const [upcomingData, setUpcomingData]= useState([]);
    const [top_ratedData, setTop_ratedData] = useState([]);

    useEffect(()=>{

       //all in one ()
       const fetchingData = async (DataName) =>{

          const response = await fetch(`${url}${DataName}?api_key=${apikey}&language=en-US&page=2`);
          const data = await response.json();

          if(DataName == 'popular'){
            setPopularData(...popularData,data.results);
          }
          if(DataName == 'upcoming'){
            setUpcomingData(...upcomingData,data.results);
          }
          if(DataName == 'top_rated'){
            setTop_ratedData(...top_ratedData,data.results);
          }
        
      }
      fetchingData(popular);
      fetchingData(upcoming);
      fetchingData(topRated);

    },[]);

  return (
    <section className='home'>
        <div className="banner">

          <div className="button_box">
              <h1>{'Stranger Things'}</h1>
              <h2>{'Wtach on netflix'}</h2>

              <div>
                   <button><BsFillPlayFill/> Play</button>
                   <button style={{background: '#bdbbbf7'}}><FiPlus/>MyList</button>
              </div>
          </div>
        </div>
        <Row title={"Popular"}    arr={popularData}/>
        <Row title={"Upcomings"}  arr={upcomingData}/>
        <Row title={"Top Rated"}  arr={top_ratedData}/>
    </section>
  )
}

export default Home