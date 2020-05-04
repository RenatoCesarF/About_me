import React from 'react'

//importação da estilização
import './style.css'; 
    
//importação dos componentes e do conteudo principal da pagina, os projetos.
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Contato from '../../Componentes/contato/contato'
import Projeto from '../../Componentes/projeto'

//função que retorna a pagina HTML
function Projetos() {
    return (
        <div>
            <Header />
            <div className='back'>
                <section className='center'>
                    <Projeto/>
                    <Projeto/>

                    <Contato/> 
                </section>
            </div>
            <Footer/>
        </div>
    )
}

//exportação da função principal
export default Projetos;