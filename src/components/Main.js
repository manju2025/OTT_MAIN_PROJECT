import React, { useEffect } from 'react';
import requests from '../Requests';
import { useState } from 'react';
import axios from 'axios';
 import "./main.css";

const Main = () => {
    const [movies, setMovies] = useState([]);
    useEffect (()=>
    {
        axios.get(requests.requestPopular).then((response)=>
        {
            setMovies(response.data)
        })
    },[])
    console.log(movies)
    return(
    <div>
       <div className="homepage">
        
    <br></br>
    <br></br>
    <br></br>
    <br></br>
<div className='w-full h-[600px] text-white'>
  <div className='w-full h-full relative'>
    <img 
      src="/mask-group@2x.png" alt=''
    />
      <div className='absolute w-full top-[20%] p-4 md:p-8'>
      <div className="blade-runner-2049-parent">
        <b className="blade-runner-2049">Tenet</b>
        <div className="thirty-years-after">
        A secret agent is given a single word as 
        his weapon and sent to prevent the onset of World War III.
         He must travel through time and bend the laws of nature 
         in order to be successful in his mission.
        </div>
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <img className="polygon-icon" alt="" src="/polygon-1.svg" />
          <a className="watch-now" href ="./10-03-25.mp4" target="_blank">Watch Now</a>
        <div className="group-parent">
        <div className="ri-add-fill-parent">
          <img className="ri-add-fill-icon" alt="" src="/riaddfill.svg" />
          <div className='auth-buttons'></div>
          <div className="watchlist">WATCHLIST</div>
          <div className="ri-share-fill-parent">
          <img className="ri-share-fill-icon" alt="" src="/risharefill.svg" />
          <div className="share">SHARE</div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
</div>
  )
}
export default Main;