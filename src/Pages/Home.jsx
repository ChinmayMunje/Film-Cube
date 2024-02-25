import React from 'react'
import MovieSlider from '../components/MovieSlider'
import Trending from '../components/Trending'
import TopRated from '../components/TopRated'
import Upcoming from '../components/Upcoming'

const Home = () => {
    return (
        <div className='flex flex-col bg-gray-800 text-white'>
            <MovieSlider />
            <Upcoming/>
            <Trending />
            <TopRated />
        </div>
    )
}

export default Home