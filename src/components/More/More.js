import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { MyFooter } from '../../UIComponents/Footer/MyFooter';
import { MyNavbar } from '../../UIComponents/Navbar/MyNavbar';

const More = () => {
  const ID=useParams().id
  console.log(ID);

  const API_KEY = '51cc7f5f459038d8f6fd27150449d6a1'
  const [ApiData, setApiData] = useState("")

  const axios = require('axios').default;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}&language=en-US&page=1`)
  .then(function (response) {
    console.log(response.data.results,"More movies");
    setApiData(response.data.results)
  })
  .catch(function (error) {
    console.log(error);
  });
  }, [])

  return (

    <>
    <MyNavbar/>

    <MyFooter/>
    </>
  )
}

export default More