import React from 'react'
import {Link} from 'react-router-dom';

import './style.css'; 
    
import Header from '../../Componentes/header'
import Footer from '../../Componentes/footer'
import Formulario from '../../Componentes/formulario'

function Sobre() {



    return (
<div>
            
    <Header />
            
    <section class="back">
        <section class="post">
            <div class= 'left'>
                <h1>Quem Sou: </h1>
                <p class="who">
                    Sou desenvolvedor FullStack, trabalho tanto com React-Js para criação de sites e aplicativos quanto com Python,
                     C e a base de MySQL para back-end. Estou cursando Sistemas da Informação na UFGD. Fiz o ensino médio na escola
                     Estadual Presidente Vargas de Dourados e estou ultimo ano do curos de inglês avançado da Fisk
                    .       
                </p>
                
                <div class='redes'>
                    <p> Git Hub</p>            
                    <p>Linkedin</p>        
                </div>
            </div>   
                
        </section>
        
        <div>Simbulos de competencias</div>        
        

        <Formulario/>
                    
    </section>
        
    <Footer/>      

</div>
    )
}

export default Sobre