import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import MovieDetails from './Pages/MovieDetails'
import SearchResult from './Pages/SearchResult'
import Explore from './Pages/Explore'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'
import { API_TOKEN, BASE_URL } from './utils'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './Redux/Slices/homeSlice'


function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const {url} = useSelector((state)=> state.home);

  useEffect(()=>{
    axios.get(BASE_URL + '/configuration', {
      headers: {
          Authorization: 'Bearer ' + API_TOKEN,
      }
  }).then((res) => {
      // console.log(res.data.images);
      
      const url = {
          backdrop: res.data.images.secure_base_url + "original",
          poster: res.data.images.secure_base_url + "original",
          profile: res.data.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));

  }).catch((err) => {
      console.log(err);
  })
  },[])

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
          <Route path='/search/:query' element={<SearchResult/>}/>
          <Route path='/explore' element={<Explore/>}/>

        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
