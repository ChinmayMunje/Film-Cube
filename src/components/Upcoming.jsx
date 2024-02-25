import React, { useEffect, useState } from 'react'
import SwitchTab from './SwitchTab'
import axios from 'axios'
import { API_TOKEN, BASE_URL } from '../utils'
import { useSelector } from 'react-redux'
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import dayjs from 'dayjs'
import Rating from '../Details/Rating'
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'



const Upcoming = () => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const onTabChange = () => {

    }

    const [upcoming, setUpcoming] = useState([]);
    useEffect(() => {
        axios.get(BASE_URL + '/movie/upcoming', {
            headers: {
                Authorization: "Bearer " + API_TOKEN
            }
        }).then((res) => {
            // console.log(res.data.results);
            setUpcoming(res.data.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className='text-start px-8 my-5'>
            <h1 className='text-2xl mb-5 md:mb-8'>Upcoming</h1>
            <Carousel responsive={responsive}>
                {upcoming.map((t, index) => (
                    <div key={index} className='py-4 cursor-pointer mx-2' onClick={() => navigate(`/movie/${t.id}`)}>
                        <img
                            src={url.poster + t.poster_path}
                            alt=""
                            className='h-[240px] md:h-auto rounded-[15px]'
                        />
                        <div className='flex items-center mt-2 mb-3'>
                            <FaStar className='text-red-500' />
                            <span className='p-1 ml-1'>{t.vote_average.toFixed(1)}</span>
                        </div>
                        <h1 className='text-lg md:text-xl h-[20px] mb-2 md:mb-3'>{t.original_title.slice(0, 18)}</h1>
                        <p className='text-sm md:text-base'>{dayjs(t.release_date).format("MMM D, YYYY")}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Upcoming