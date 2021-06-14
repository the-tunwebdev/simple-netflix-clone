import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(()=>{
        async function fetchBanner(){
            const request= await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            

        }
        fetchBanner()

    },[])
    function truncate(str,num){
        return str?.length > num ? str.substr(0,num-1) + '...' :str
    }
    
    return (
        <header className="banner" style={{
            backgroundSize:'cover',
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:'center',
        }}>
            <div className="banner_contents">
                <h1 className='banner_title'>
                    {movie.title || movie.name || movie.original_name}
                    {/* check if movie.title does not exist then go to movie.name and check it agin
                      then go to the last one */}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">
                        Play

                    </button>
                    <button className="banner_button">
                        My List

                    </button>
                    <h1 className="banner_description">
                        {truncate(movie.overview,150)}
                    </h1>
                </div>

            </div>
            <div className="banner--fadeBottom">
                
            </div>


        </header>
    )
}

export default Banner
