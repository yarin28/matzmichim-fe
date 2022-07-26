import React, { ComponentType, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
  from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home';
import VideoCard from './Componets/VideoCard';
import VideoCreator from './Componets/VideoCreator';
import CourseCreator from './Componets/CourseCreator';
import Test from './Componets/Test';
import CommentList from './Componets/CommentList';
import { CssBaseline } from '@mui/material';
import { UserAuthProvider } from './Componets/UserAuth/UserAuth';
import CourseUpload from './Pages/CourseUpload';
import cookies from 'js-cookie'
import { Login } from './Componets/Login/Login'
import OtpInput from './Componets/OtpInput';


const App: ComponentType = () => {
  const currentLanguageCode = cookies.get('i18next')||'en';
  console.log(currentLanguageCode);
  const currentLanguageDirection = (currentLanguageCode==='en')?'ltr':'rtl';
  useEffect(()=>{
document.body.dir = currentLanguageDirection;
// document.title = t
  },[currentLanguageCode]);
  return (
    <>
      <CssBaseline />
      <UserAuthProvider>

        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="VideoCard" element={<VideoCard type="youtube" title="איך לקנות אושר - מיכאל נורטון Michael Norton" uid="oqUKmHULpd4" description='this is the video description/ the short summry/notes' url="https://www.youtube.com/watch?v=oqUKmHULpd4" />} />
            <Route path="VideoCreator" element={<VideoCreator />} />
            <Route path="CourseCreator" element={<CourseCreator />} />
            <Route path="Test" element={<Test />} />
            <Route path="CommentList" element={<CommentList />} />
            <Route path="csvUpload" element={<CourseUpload />} />
            <Route path="login" element={<Login/>}/>
            <Route path="optInput" element={<OtpInput/>}/>
          </Routes>
        </Router>
      </UserAuthProvider>
    </>

  );
}

export default App;
