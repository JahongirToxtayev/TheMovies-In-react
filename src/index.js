import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Route, Routes } from "react-router-dom";
import MPopular from "./UIComponents/Navbar/NavMovies/MPopular"
import MTopRated from "./UIComponents/Navbar/NavMovies/MTopRated"
import NowPlaying from "./UIComponents/Navbar/NavMovies/NowPlaying"
import Upcoming from "./UIComponents/Navbar/NavMovies/Upcoming"
import AiringToday from "./UIComponents/Navbar/NavTVShows/AiringToday"
import OnTV from "./UIComponents/Navbar/NavTVShows/OnTV"
import TVPopular from "./UIComponents/Navbar/NavTVShows/TVpopular"
import TVTopRated from "./UIComponents/Navbar/NavTVShows/TVTopRated"
import PopularPeople from "./UIComponents/Navbar/NavPeople/PopularPeople"
import More from "./components/More/More"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  <BrowserRouter>
  
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/Mpopular' element={<MPopular/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
        <Route path='/nowPlaying' element={<NowPlaying/>}/>
        <Route path='/Mtop-rated' element={<MTopRated/>}/>
        <Route path='/TVpopular' element={<TVPopular/>}/>
        <Route path='/airingToday' element={<AiringToday/>}/>
        <Route path='/onTV' element={<OnTV/>}/>
        <Route path='/TVtop-rated' element={<TVTopRated/>}/>
        <Route path='/more/:id' element={<More/>}/>
        <Route path='/PopularPeople' element={<PopularPeople/>} />
        
        
        
      </Routes>
  
  </BrowserRouter>
    </Provider>
);

