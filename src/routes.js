//Importing React Libs
import React, { useState }from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Importing all the pages
import About from './Pages/About';
import Projects from './Pages/Projects';
import MyPosts from './Pages/MyPosts';

// Add all the pages into a switch router system
//"Switch"  is used to switch between the pages 
export default function Routes() {
    const [page,setPage] = useState('About')
    return (
        <BrowserRouter>
            <Switch> 
                <Route path='/' exact component={About}/>
                <Route path='/projetos' component={Projects} />
                <Route path='/posts' component={MyPosts} />
            </Switch>
        </BrowserRouter>
    );
}