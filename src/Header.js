import React from 'react'
import "./Header.css"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <header className="header">
            <div className="header_bar_icons">
                <div className="header_bar_icon active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header_bar_icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header_bar_icon">
                    <VideoLibraryIcon />
                    <p>Playlist</p>
                </div>
                <div className="header_bar_icon">
                    <PersonIcon />
                    <p>Account</p>
                </div>
            </div>
            <img src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png" role="presentation" alt="Hulu" ></img>
        </header>
    )
}

export default Header

