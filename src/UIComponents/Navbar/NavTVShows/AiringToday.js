import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { MyFooter } from '../../Footer/MyFooter'
import { MyNavbar } from '../MyNavbar'
import "../Navbar.css"

const AiringToday = () => {


    const API_KEY = '51cc7f5f459038d8f6fd27150449d6a1'
    const [ApiData, setApiData] = useState("")
  
    const axios = require('axios').default;
  
    useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
    .then(function (response) {
      console.log(response.data.results,"TV Shows Airing Today");
      setApiData(response.data.results)
    })
    .catch(function (error) {
      console.log(error);
    });
    }, [])
  
  

  return (
    <>
    <MyNavbar/>
    <div className="container">
    <h1 className='text-center Nav-cards_title'>Airing Today</h1>
    <div className="row">
      { (ApiData.length>0)&& ApiData.map((v,i)=>(
         <div className="col-3 my-4" key={v.id}>
        <Link to={`/more/${v.id}`} className={"text-decoration-none"}>

          <div className="card shadow cards-module_card">
          
          <img src={`https://image.tmdb.org/t/p/w500${v.poster_path}`} alt="" />
          
            <div className="body-card p-3 card-title">
        <h3 className='fw-bold'>{v.name}</h3>
        <h4 className='text-secondary fw-normal'>{v.first_air_date}</h4>
          </div>
          </div>
        </Link>
          
        </div>
      ))}
    </div>
    </div>
    <MyFooter/>
    </>
  )
}

export default AiringToday