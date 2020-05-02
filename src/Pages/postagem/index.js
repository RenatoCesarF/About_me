import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'; 
    
import Header from '../../Componentes/header'
import Footer from '../../Componentes/footer'
import Formulario from '../../Componentes/formulario'

function Posts() {
    return (
        <div>
            <Header/>
            
            <section class="post">
             <h1>O que fiz Esses dias </h1>
                <div>
                    <p> Nesses ultimos dias tive algumas ideias de implementações que 
                        gostaria de fazer um dia. Programas e apps que usarão bibliotecas e apis de 
                        reconhecimento e manipulação de BigData de audio. A outra usará gravação e 
                        manipulação do audio gravado. Alem de tudo isso tenho feito um curso de 
                        React-Js na Scrimba, ótima plataforma, espero conseguir continuar meu
                        projeto de site logo logo assim que eu terminar o curso continuarei 
                        mechendo nele.

                     </p>
                 </div>
                 <footer class="post-footer">01/05/2020 </footer>
                 <hr/>
            </section>
            <Footer/>
        </div>
    )
}

export default Posts