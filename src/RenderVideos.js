import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard.js'
import "./RenderVideos.css"
import axios from './axios.js'
import FlipMove from "react-flip-move";
function RenderVideos({ ViewCardSelector }) {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(ViewCardSelector)
            setMovies(result.data.results)
            return result
        }
        fetchData()
    }, [ViewCardSelector])


    return (
        <div className="ViewAdapter">
            <FlipMove>
                {movies.map((movie) => {
                    return <ViewCard key={movie.id} movie={movie} />
                })}
            </FlipMove>
        </div>
    );
}

export default RenderVideos