import React, { ComponentType } from 'react';
import { BrowserRouter as Router,
  Routes, 
  Route,
    Link } 
    from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import VideoCard from './Componets/VideoCard';
import VideoCreator from './Componets/VideoCreator';

const App:ComponentType=()=> {
  return (
    <> 
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="VideoCard" element={<VideoCard type="youtube" title="איך לקנות אושר - מיכאל נורטון Michael Norton" uid="oqUKmHULpd4" description='this is the video description/ the short summry/notes' url="https://www.youtube.com/watch?v=oqUKmHULpd4" />}  />
        <Route path="VideoCreator"element={<VideoCreator/>}  />
      </Routes>
</Router>
</>

  );
}

export default App;
