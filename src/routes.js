//Importing React Libs
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';

//Importing all the pages
import Contributors from './pages/Contributors/index';
import About from './pages/About';
import Projects from './pages/Projects';
import MyPosts from './pages/MyPosts';
import Footer from './Components/footer/footer';
import Header from './Components/header/header';

// Add all the pages into a switch router system
//"Switch"  is used to switch between the pages 
export default function WebRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes key="S">
                <Route path='/' exact element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/posts' element={<MyPosts />} />
                <Route path='/contributors' element={<Contributors />} />
                <Route path='/*' element={<About />} />
            </Routes >
            <Footer />
        </BrowserRouter>
    );
}
