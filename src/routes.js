//Importing React Libs
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Importing all the pages
import Sobre from './Pages/sobre';
import Projetos from './Pages/projetos';
import Posts from './Pages/postagem';

// Add all the pages into a switch router system
//"Switch"  is used to switch between the pages 
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch> 
                <Route path='/' exact component={Sobre}/>
                <Route path='/projetos' component={Projetos} />
                <Route path='/posts' component={Posts} />
            </Switch>
        </BrowserRouter>
    );
}