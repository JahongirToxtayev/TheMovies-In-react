import React,{useState,useEffect} from 'react'
import { DoubleBtnDiv } from '../../UIComponents/DoubleButtonDiv/DoubleBtnDiv'
import { DoubleBtnTitle } from '../../UIComponents/DoubleButtonTitle/DoubleBtnTitle'
import { FirstDoubleBtn } from '../../UIComponents/FirstDoubleBtn/FirstDoubleBtn'
import { MyFooter } from '../../UIComponents/Footer/MyFooter'
import { MyNavbar } from '../../UIComponents/Navbar/MyNavbar'
import { SecondDoubleBtn } from '../../UIComponents/SecondDoubleBtn/SecondDoubleBtn'
import { useDispatch,useSelector } from 'react-redux'
import {BsPlusLg,BsPinAngleFill} from "react-icons/bs"
import {AiFillHeart,AiFillStar,AiOutlineUnorderedList} from "react-icons/ai"
import  "./style.css"



const Home = () => {

  const [active, setActive] = useState("")
  const [secondActive, setSecondActive] = useState("")
  const dispatch=useDispatch()
  const source=useSelector(state=>state)
  const secondApi=useSelector(state=>state)
  const [ID, setID] = useState("")

  console.log(source,"reducer");
  console.log(secondApi,"Second Reducer");

  const bgDark={
    color:"#1BD2B0",
    backgroundColor:"#032541"
  }
  const bgLight={
    color:"#032541",
    backgroundColor:"white"
  }
  const bgDarkTrailer={
    color:"#032541",
    background: "linear-gradient(to right,#1BD2B0,#07BAD8)",
  }
  const bgLightTrailer={
    color:"white",
    backgroundColor:"#425C71",
  }

  const cardMargin={
    margin:"0px -20px"
  }

  const API_KEY = '51cc7f5f459038d8f6fd27150449d6a1'
  const axios = require('axios').default;

  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${`${active==="SecondBtn"?"4":"1"}${secondActive==="SecondBtnTrailer"?"5":"3"}`}`)
  .then(response => {
    response.data.results.map((item, index) => {
      item.boolean = false
    })
dispatch({type:"MOVIES_API",payload:response.data.results})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${secondActive==="SecondBtnTrailer"?"5":"3"}`)
  .then(response => {
dispatch({type:"OVERFLOW_API",payload:response.data.results})
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

  const [card, setCard] = useState(false)

  return (
    <>
    <MyNavbar/>
    <div className="search-div d-flex align-items-center">
    <div className="search-div_items">
    <div className="search-div_texts">
    <h1 className='mx-5 search-div_title fw-bold text-light'>Welcome.</h1>
    <h2 className='mx-5 text-light'>Millions of movies, TV shows and people to discover. Explore now.</h2>
    </div>
    <div className="mx-5 my-5 search-div_inputs d-flex justify-content-around">
    <input className='form-control search-div_input' type="text" placeholder='Search for a movie, tv show, person ...'/>
    <button className='btn search-div_button text-light fs-5'>Search</button>
    </div>
    </div>
    </div>


  <div className="container">
  <div className="double-btn_bigDiv col-2 d-flex justify-content-around align-items-center my-3">
  <DoubleBtnTitle>What's Popular</DoubleBtnTitle>
    <DoubleBtnDiv>
      <FirstDoubleBtn onClick={()=>setActive("FirstBtn")} style={(active==="FirstBtn"||active==="")? bgDark :bgLight}>
        On TV
      </FirstDoubleBtn>
      <SecondDoubleBtn onClick={()=>setActive("SecondBtn")} style={active==="SecondBtn"? bgDark :bgLight}>
        In Theaters
      </SecondDoubleBtn>
    </DoubleBtnDiv>
  </div>

  <div className=" my-4 card-overflow ps-5">
  {(source) && source.map((v,i)=>{
    return <div className="col-2" style={cardMargin} key={v.id}>
    <div className="card card-line_item shadow">
    <button className='plus-parent_button' onClick={()=> setID(source[i].boolean === false ? source[i].boolean = true : source[i].boolean = false)}><BsPlusLg/></button>
{
  (v.boolean) && <div className={`plus-button_div`} >
  <button className='plus-child_button py-1'><AiOutlineUnorderedList/> Add to List</button>
  <button className='plus-child_button py-1'><AiFillHeart/> Favorite</button>
  <button className='plus-child_button py-1'><BsPinAngleFill/> Watchlist</button>
  <button className='plus-child_button py-1'><AiFillStar/> Your Rating</button>
</div>
}

      <img src={`https://image.tmdb.org/t/p/w500${v.poster_path}`} alt="" />
    </div>
    <div className="body-card w-75">
    <h5 className='fs-6 fw-bold'>{v.title}</h5>
    <h6 className='fs-6 text-secondary fw-normal'>{v.release_date}</h6>
      </div>
      </div>
  })}
  </div>

  

  </div>
  <div className="col-12 trailers-div py-3 ps-5">
  <div className="double-btn_bigDiv  col-2 d-flex justify-content-around align-items-center my-3">
  <DoubleBtnTitle className={"text-light"}>Latest Trailers</DoubleBtnTitle>
    <DoubleBtnDiv style={{borderColor:"#1BD2B0"}}>
      <FirstDoubleBtn onClick={()=>setSecondActive("FirstBtnTrailer")} style={(secondActive==="FirstBtnTrailer"||secondActive==="")? bgDarkTrailer :bgLightTrailer}>
        On TV
      </FirstDoubleBtn>
      <SecondDoubleBtn onClick={()=>setSecondActive("SecondBtnTrailer")} style={secondActive==="SecondBtnTrailer"? bgDarkTrailer :bgLightTrailer}>
        In Theaters
      </SecondDoubleBtn>
    </DoubleBtnDiv>
  </div>
  <h6 className='text-light ms-4'>This panel didn't return any results. Try refreshing it.</h6>
  </div>

    <MyFooter/>
    </>
  )
}

export default Home