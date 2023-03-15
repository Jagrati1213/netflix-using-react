import React,{useState,useEffect} from 'react';
import Backbtn from './Backbtn';
import Row from './Row';


const apikey="60e44d36825f1e1e45aca35954739a6d";
const url = "https://api.themoviedb.org/3/movie/";
const popular = "popular";
const upcoming = "upcoming";
const topRated = "top_rated"

function Mylist() {

    const [popularData, setPopularData]= useState([]);
    const [upcomingData, setUpcomingData]= useState([]);
    const [top_ratedData, setTop_ratedData] = useState([]);

    useEffect(()=>{

       //all in one ()
       const fetchingData = async (DataName) =>{

          const response = await fetch(`${url}${DataName}?api_key=${apikey}&language=en-US&page=2`);
          const data = await response.json();

          if(DataName === 'popular'){
            setPopularData(...popularData,data.results);
          }
          if(DataName === 'upcoming'){
            setUpcomingData(...upcomingData,data.results);
          }
          if(DataName === 'top_rated'){
            setTop_ratedData(...top_ratedData,data.results);
          }
        
      }
      fetchingData(popular);
      fetchingData(upcoming);
      fetchingData(topRated);

    },[]);

  return (
    <>
        <Backbtn/>
        <Row  arr={popularData}/>
        <Row  arr={upcomingData}/>
        <Row  arr={top_ratedData}/>    
    </>
  )
}

export default Mylist;