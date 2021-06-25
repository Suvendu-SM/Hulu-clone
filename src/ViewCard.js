import React, { forwardRef } from 'react'
import './ViewCard.css'
import TextTruncate from "react-text-truncate";
const baseURL = `https://image.tmdb.org/t/p/original/`
const ViewCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="ViewCard">
            <img src={`${baseURL}${movie.backdrop_path || movie.poster_path}`} role="presentation" alt={movie.title} ></img>
            <TextTruncate
                line={1}
                element='p'
                truncateText='...'
                text={movie.overview}
            />

            <h3 className="video_title">{movie.title || movie.original_title}</h3>
            <p className="Rating">Rating {movie.vote_average}</p>
        </div>
    )
});

export default ViewCard
