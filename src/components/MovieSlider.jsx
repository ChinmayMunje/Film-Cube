import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { API_TOKEN, BASE_URL } from '../utils'
import { useSelector } from 'react-redux'
import { IoIosStar } from "react-icons/io";
import dayjs from 'dayjs'


const MovieSlider = () => {

    const [nowPlaying, setNowPlaying] = useState([]);
    const { url } = useSelector((state) => state.home);

    useEffect(() => {
        axios.get(BASE_URL + '/movie/now_playing', {
            headers: {
                Authorization: "Bearer " + API_TOKEN
            }
        }).then((res) => {
            setNowPlaying(res.data.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2000}
                infiniteLoop={true}
                showStatus={false}
            >
                {nowPlaying.map((playing, index) => (
                    <div key={index} className='relative'>
                        <img src={url.backdrop + playing.backdrop_path} alt="poster" className='h-[550px]' />
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-lg font-bold ml-8 md:ml-0 md:left-8">
                            <div className='flex flex-col md:flex-row gap-3'>
                                <div className='flex items-center'>
                                    <IoIosStar className='text-red-700' />
                                    <span className='ml-2'>{playing.vote_average.toFixed(1)}</span>
                                </div>
                                <div className='py-2'>
                                    <h2>{dayjs(playing.release_date).format('MMM DD, YYYY')}</h2>
                                </div>
                            </div>
                            <div className='text-start md:w-[550px]'>
                                <h1 className='text-3xl font-bold'>{playing.title}</h1>
                                <p className='py-2'>{playing.overview}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default MovieSlider