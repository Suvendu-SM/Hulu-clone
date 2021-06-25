import React, { useState } from "react";
import './App.css';
import Categories from './Categories';
import Header from './Header.js'
import RenderVideos from './RenderVideos.js';
import requestURI from './request.js'
function App() {
  const [ViewCardSelector, setViewCard] = useState(requestURI.fetchTrending)
  return (
    <div className="App">
      <Header />
      <Categories setViewCard={setViewCard} />
      <RenderVideos ViewCardSelector={ViewCardSelector} />
    </div>
  );
}

export default App;
