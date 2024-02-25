import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../components/spinner/Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import MovieCard from '../components/MovieCard';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_TOKEN } from '../utils';

const SearchResult = () => {
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchData = async () => {
    setLoading(true);

    const resposne = await fetch(BASE_URL + `/search/movie?query=${query}&page=${pageNum}`, {
      headers: {
        Authorization: "Bearer " + API_TOKEN
      }
    });
    try {
      const responseData = await resposne.json();
      setData(responseData);
      setPageNum((prev) => prev + 1);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const fetchNextPageData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/search/movie?query=${query}&page=${pageNum}`, {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const responseData = await response.json();
      if (data?.results) {
        setData({
          ...data,
          results: [
            ...data?.results,
            ...responseData.results
          ]
        });
      } else {
        setData(responseData);
      }
      setPageNum(prev => prev + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    setPageNum(1)
    fetchData()
  }, [query])
  return (
    <div className='flex flex-col py-4 mt-[70px] bg-gray-800 text-white'>
      {loading && <Spinner initial={true} />}
      {!loading && (
        <div>
          {data?.results?.length > 0 ? (
            <>
              <div className='text-3xl text-start px-4 py-2'>
                {`Search ${data?.total_result > 1 ? "results" : "result"} of '${query}'`}
              </div>
              {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'> */}
                <InfiniteScroll
                  dataLength={data?.results?.length || []}
                  next={fetchNextPageData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}
                  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3'
                >
                  {data?.results?.map((item, index) => (
                    // if (item.media_type === "person") return;
                    <MovieCard key={index} data={item} fromSearch={true} />
                  ))}
                </InfiniteScroll>
              {/* </div> */}
            </>
          ) : (
            <span>Sorry. Result Not Found</span>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResult


