import React,{useState} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaSearch} from "react-icons/fa"
import {GoPlus} from "react-icons/go"
import LogoImg from "../../assets/22.svg"

export const MyNavbar = () => {

  const [Isshown, setIsShown] = useState("")
  const [tvShows, settvShows] = useState("")
  const [popularPeople, setPopularPeople]=useState("")
  return (
    <>
    <div className="Navbar d-flex justify-content-between align-items-center">
        <div className="left-component d-inline-block">
        <nav className="nav">
        <Link to={"/"} className="nav-link active" aria-current="page">
            <img src={LogoImg} width='170' alt="" />
        </Link>
      <div className="movies-hover_div" onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
      <Link to={"/"} className="nav-link fs-5 text-light active" aria-current="page" >Movies</Link>
    <div className={`movies-hover ${Isshown==true? "d-flex":"d-none"}`}>
      <Link to={"/Mpopular"} className={"nav-link fs-6 movies-link"} >Popular</Link>
      <Link to={"/nowPlaying"} className={"nav-link fs-6 movies-link"}>Now Playing</Link>
      <Link to={"/upcoming"} className={"nav-link fs-6 movies-link"}>Upcoming</Link>
      <Link to={"/Mtop-rated"} className={"nav-link fs-6 movies-link"}>Top-rated</Link>
    </div>
      </div>
      <div className="TV-Shows-hover_div" onMouseEnter={() => settvShows(true)}
        onMouseLeave={() => settvShows(false)}>
      <Link to={"/"} className="nav-link fs-5 text-light" >TV Shows</Link>
      <div className={`TV-Shows-hover ${tvShows==true? "d-flex":"d-none"}`}>
      <Link to={"/TVpopular"} className={"nav-link fs-6 movies-link"} >Popular</Link>
      <Link to={"/airingToday"} className={"nav-link fs-6 movies-link"}>Airing Today</Link>
      <Link to={"/onTV"} className={"nav-link fs-6 movies-link"}>On TV</Link>
      <Link to={"/TVtop-rated"} className={"nav-link fs-6 movies-link"}>Top-rated</Link>
    </div>
      </div>
      <div className="popular-people-hover_div" onMouseEnter={() => setPopularPeople(true)}
        onMouseLeave={() => setPopularPeople(false)}>
      <Link to={"/"} className="nav-link fs-5 text-light">People</Link>
        <div className={`popular-people-hover ${popularPeople==true? "d-flex":"d-none"}`}>
          <Link to={"/PopularPeople"} className={"nav-link fs-6 movies-link"}>Popular People</Link>
        </div>
      </div>
        <Link to={"/"} className="nav-link fs-5 text-light">More</Link>
        </nav>
        </div>
        <div className="right-component">
        <nav className="nav">
        <Link to={"/"} className="nav-link fs-5 text-light active" aria-current="page"><GoPlus/></Link>
        <Link to={"/"} className="nav-link fs-5 text-light">Login</Link>
        <Link to={"/"} className="nav-link fs-5 text-light">
            <button className='btn text-light eng-btn'>ENG</button>
        </Link>
        <Link to={"/"} className="nav-link fs-5 text-light">Join TMDB</Link>
        <Link to={"/"} className="nav-link search-icon fs-5"><FaSearch/></Link>
        </nav>
        </div>
    </div>
    </>
  )
}
