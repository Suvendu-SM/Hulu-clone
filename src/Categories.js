import React from 'react'
import './Categories.css'
import requestURI from './request.js'
function Categories({ setViewCard }) {
    return (
        <div className="Categories_list">
            <h5 onClick={() => { setViewCard(requestURI.fetchTrending) }}>Trending</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchTopRated) }}>Top Rated</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchAction) }}>Action</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchComedy) }}>Comedy</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchHorror) }}>Horror</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchSciFi) }}>Sci-Fi</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchMystery) }}>Mystery</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchRomance) }}>Romance</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchAnimation) }}>Animation</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchFamily) }}>Family</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchAdventure) }}>Adventure</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchFantasy) }}>Fanstsy</h5>
            <h5 onClick={() => { setViewCard(requestURI.fetchThriller) }}>Thriller</h5>
        </div>
    )
}

export default Categories
