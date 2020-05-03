import React from 'react'

import './style.css'; 
    
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Formulario from '../../Componentes/formulario/formulario'
import Projeto from '../../Componentes/projeto'

function Projetos() {
    return (
        <div>
            <Header />
            <div className='back'>
                <section className='center'>
                    <Projeto/>
                    <Projeto/>

                    <Formulario/> 
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Projetos;