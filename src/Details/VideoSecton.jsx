import React, { useState } from 'react'
import { PlayIcon } from './PlayBtn'
import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";

const VideoSecton = ({ data }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

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
        <>
            <div className='text-start px-8 my-5'>
                <h1 className='text-2xl mb-5 md:mb-8'>Official Videos</h1>
                <Carousel responsive={responsive}>
                    {data?.length > 0 && data?.map((v) => (
                        <div key={v.id} onClick={() => { setVideoId(v.key); setShow(true); }}>
                            <div className='py-4 cursor-pointer m-2 justify-center flex flex-col text-start'>
                                <img src={`https://img.youtube.com/vi/${v.key}/mqdefault.jpg`} alt="" className='rounded-lg h-[150px] object-cover' />
                                <p className='mt-2 text-center'>{v.name}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default VideoSecton