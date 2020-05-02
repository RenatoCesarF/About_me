import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Sobre from './Pages/sobre';
import Projetos from './Pages/projetos';
import Posts from './Pages/postagem';

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