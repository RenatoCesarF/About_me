import React from 'react'
import {GrLinkedin,FaGithubSquare } from 'react-icons/all'



//importação da estilização
import './style.css'; 
    
//importação dos componentes da aplicação
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Contato from '../../Componentes/contato/contato'



//função que retorna a pagina inteira
function Sobre() {
    return (
        <div className='scroll'>
                    
            <Header />
                    
            <div className="back">
                <section className="center">
                    <div className= 'left'>
                        <h1>Quem Sou: </h1>
                        <p className="who">
                            Sou desenvolvedor FullStack, trabalho tanto com React-Js para criação de sites e aplicativos quanto com Python,
                             C e a base de MySQL para back-end. Estou cursando Sistemas da Informação na UFGD. Fiz o ensino médio na escola
                             Estadual Presidente Vargas de Dourados e estou ultimo ano do curos de inglês avançado da Fisk.
                        </p>
                        
                        <div className='redes'>
                            <p> Git Hub</p>            
                            <p>Linkedin</p>        
                        </div>
                    </div>   
                        
                    <div>Simbulos de competencias</div>        
                    <Contato />
                </section>
                                
            </div>
                
            <Footer/>      
            
        </div>
    )
}

//exportação da função da pagina
export default Sobre;