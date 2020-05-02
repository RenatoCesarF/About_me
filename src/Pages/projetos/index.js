import React from 'react'

import './style.css'; 
    
import Header from '../../Componentes/header'
import Footer from '../../Componentes/footer'
import Formulario from '../../Componentes/formulario'
import Projeto from '../../Componentes/projeto'

function Projetos() {
    return (
        <div>
            <Header />

            <section className='back'>
                <Projeto/>
                <Projeto/>


                <Formulario/>
            </section>
            <Footer/>
        </div>
    )
}

export default Projetos;