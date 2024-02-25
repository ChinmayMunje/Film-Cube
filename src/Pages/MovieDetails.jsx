import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_TOKEN, BASE_URL } from '../utils'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MovieDetailBanner from '../Details/MovieDetailBanner'
import Cast from '../components/cast/Cast'
import VideoSecton from '../Details/VideoSecton'
import Similar from '../components/Similar'
import Recommended from '../components/Recommended'


const MovieDetails = () => {
  const { url } = useSelector((state) => state.home);
  const param = useParams();
  const [detail, setDetail] = useState({});
  const [credits, setCredits] = useState([]);
  const [video, setVideo] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {

    // GET MOVIE DETAILS BY ID
    axios.get(BASE_URL + `/movie/${param.id}`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    }).then((res) => {
      // console.log(res.data);
      setDetail(res.data);
    }).catch((err) => {
      console.log(err);
    })

    // GET MOVIE CREDITS
    axios.get(BASE_URL + `/movie/${param.id}/credits`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    }).then((res) => {
      // console.log(res.data);
      setCredits(res.data);
    }).catch((err) => {
      console.log(err);
    })

    // GET TRAILER OF MOVIE
    axios.get(BASE_URL + `/movie/${param.id}/videos`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    }).then((res) => {
      // console.log(res.data);
      setVideo(res.data);
    }).catch((err) => {
      console.log(err);
    })

    // GET SIMILAR MOVIES

    axios.get(BASE_URL + `/movie/${param.id}/similar`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    }).then((res) => {
      console.log(res.data);
      setSimilar(res.data);
    }).catch((err) => {
      console.log(err);
    })


    // GET Recommended MOVIES

    axios.get(BASE_URL + `/movie/${param.id}/recommendations`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    }).then((res) => {
      console.log(res.data);
      setRecommended(res.data);
    }).catch((err) => {
      console.log(err);
    })



  
  }, [])
  return (
    <>
      <div className='flex flex-col py-4 mt-[70px] bg-gray-800 text-white'>
        {/* <div>MovieDetails</div> */}
        <MovieDetailBanner data={detail} video={video?.results?.[0]} credits={credits?.crew}/>
        <Cast data={credits?.cast}/>
        <VideoSecton data={video?.results}/>
        <Similar data={similar?.results}/>
        <Recommended data={recommended?.results}/>
      </div>
    </>
  )
}

export default MovieDetails