import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Rating from './Rating';
import { PlayIcon } from './PlayBtn';
import { IoPlayCircleOutline } from "react-icons/io5";
import dayjs from 'dayjs';
import VideoPopup from '../VideoPopup/VideoPopup';


const MovieDetailBanner = ({ data, video, credits }) => {
    const { url } = useSelector((state) => state.home);
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    // console.log(videoId);


    const director = credits?.filter((f) => f.job === "Director");
    const writer = credits?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    return (
        <>
            <div className='flex flex-col md:flex-row py-4 px-5 md:mx-8 text-start'>
                <img
                    src={url.backdrop + data.poster_path}
                    alt="poster_img"
                    className='h-[500px] w-[100%] md:w-[400px] rounded-[20px] mb-4 md:mb-0 md:mr-5'
                />
                <div className='flex flex-col flex-grow px-4 py-4'>
                    <div className='py-2'>
                        <h1 className='text-2xl'>{data.original_title || data.title}</h1>
                        <p className="text-base md:text-lg">{data.tagline}</p>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        {data?.genres?.map((g, index) => (
                            <div key={index} className='bg-red-500 px-2 py-1 whitespace-nowrap rounded-md text-[15px]'>
                                {g.name}
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row py-2 items-center'>
                        <Rating rating={data?.vote_average?.toFixed(1)} />
                        <button
                            className='flex items-center gap-2 ml-3 bg-red-500 text-white px-3 py-2 rounded-md md:text-lg hover:bg-red-600 focus:outline-none'
                            onClick={() => {
                                setShow(true);
                                setVideoId(video?.key);
                            }}
                        >
                            <IoPlayCircleOutline size="24px" className="md:text-xl" />
                            <span className="hidden md:inline-block">Watch Trailer</span>
                        </button>
                    </div>
                    <div className='text-xl mt-4'>Overview</div>
                    <div className='py-3'>{data.overview}</div>
                    <div className="border-b border-white border-opacity-10 py-4 flex flex-wrap">
                        {data.status && (
                            <div className="mr-4 flex">
                                <span className="mr-2 font-semibold opacity-100">Status: </span>
                                <span className="opacity-50 leading-6">{data.status}</span>
                            </div>
                        )}
                        {data.release_date && (
                            <div className="mr-4 flex">
                                <span className="mr-2 font-semibold opacity-100">Release Date: </span>
                                <span className="opacity-50 leading-6">{dayjs(data.release_date).format("MMM D, YYYY")}</span>
                            </div>
                        )}
                        {data.runtime && (
                            <div className="mr-4 flex">
                                <span className="mr-2 font-semibold opacity-100">Runtime: </span>
                                <span className="opacity-50 leading-6">{toHoursAndMinutes(data.runtime)}</span>
                            </div>
                        )}
                    </div>
                    <div className="border-b border-white border-opacity-10 py-4 flex flex-wrap">
                        {director?.length > 0 && (
                            <div className="mr-4 flex">
                                <span className="mr-2 font-semibold opacity-100">Director: </span>
                                <span className="opacity-50 leading-6">{director.map((d, i) => <span key={i}>{d.name}{director.length - 1 !== i && ", "}</span>)}</span>
                            </div>
                        )}
                    </div>
                    <div className="border-b border-white border-opacity-10 py-4 flex flex-wrap">
                        {writer?.length > 0 && (
                            <div className="mr-4 flex">
                                <span className="mr-2 font-semibold opacity-100">Writers: </span>
                                <span className="opacity-50 leading-6">{writer.map((d, i) => <span key={i}>{d.name}{writer.length - 1 !== i && ", "}</span>)}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>

    )
}

export default MovieDetailBanner