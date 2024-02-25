import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import dayjs from 'dayjs'

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    return (
        <>
            <div className='text-start px-8 my-2 flex flex-col'>
                <div className='py-4 cursor-pointer' onClick={() => navigate(`/movie/${data.id}`)}>
                    <img src={url.poster + data.poster_path} alt="" className='h-[240px] rounded-[15px]' />
                    <div className='flex flex-row items-center'>
                        <FaStar className='text-red-500' />
                        <span className='p-1'>
                            {data.vote_average.toFixed(1)}
                        </span>
                    </div>
                    <h1 className='h-[20px] mb-[10px]'>{data.original_title.slice(0, 18)}</h1>
                    <p>{dayjs(data.release_date).format("MMM D, YYYY")}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard


