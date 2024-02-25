import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import dayjs from 'dayjs'
import { FaStar } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'



const Cast = ({ data }) => {
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

    return (
        <div className='text-start px-8 my-5'>
            <h1 className='text-2xl mb-5 md:mb-8'>Cast</h1>
            <Carousel responsive={responsive}>
                {data?.length > 0 && data?.map((t, index) => (
                    <div key={index} className='py-4 cursor-pointer m-2 items-center justify-center flex flex-col'>
                        <img src={url.profile + t.profile_path} alt="" className='h-[200px] w-[230px] rounded-full mx-auto' />
                        <p className='mt-2 text-center'>{t.name}</p>
                        <p className='text-gray-500 text-center'>{t.character}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Cast