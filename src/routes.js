//importação das bibliotecas react
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


//Importação das paginas da aplicação
import Sobre from './Pages/sobre';
import Projetos from './Pages/projetos';
import Posts from './Pages/postagem';


//Chamada das paginas e declaração das https das mesmas
//"Switch"  serve para mudar, alternar, entre as paginas da aplicação
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