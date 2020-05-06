import React from 'react'

//importação da estilização
import './style.css'; 

//importação dos componentes e do conteudo principal da pagina, os projetos.
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Contato from '../../Componentes/contato/contato'


import Renato from '../../assents/renato.png'
import hero from '../../assents/port/bethehero.png'
import {FaGithubSquare } from 'react-icons/all'
//função que retorna a pagina HTML
function Projetos() {
    let redirect_rep = () => {
        window.open('https://github.com/RenatoCesarF/About_me')
    }
    let redirect_rep_hero = () => {
        window.open('https://github.com/RenatoCesarF/be-the-hero')
    }
    return (
        <div>
            <Header />
            <div className='back'>
                <section className='center'>
                   
                    <section>
                        <h2 style={{padding:"1cm"}}>Este Blog</h2>
                        <p className='text_project'> Site desenvolvido com React-js para testar minhas abilidades em CSS e com a
                            ferramenta ja mencionada, além de servir como portfólio Online de divulgação do meu 
                            trabalho. Inspirado pelo Lucas Montano que diz ser importante ter um site "About me" 
                            para divulgar seus projetos e trabalhos. Não foi possível, até então, implementar todas 
                            as ideias que tive para o projeto, mas assim que eu aprender mais sobre o framework 
                            voltarei a desenvolver este site.
                        </p>
                        <img className='img_renato'src={Renato}alt='imagem projeto'/>
                            <h4  className='git_hub_link' onClick={redirect_rep}>
                            <FaGithubSquare
                                className='link_github'
                                size='50px'
                            />
                            Git Hub
                            </h4>
                        <hr/>
                    </section>


                    <section>
                        <h2 style={{padding:"1cm"}}>Be The Hero</h2>
                        <p className= 'text_project'>
                            Aplicação feita durante a Semana OmniStak da RockesSeat.
                            Tem como objetivo aproximar ONGs a possíveis doadores.
                             A aplicação funciona com um cadastro, atravez do Site, 
                             por parte da ONG de um dos casos que a mesma necessita de doação. 
                             A pessoa que tiver o aplicativo pode visualizar esses casos
                              cadastrados e contactar a ONG caso deseje, esse contato pode
                               se feito atravez de e-mail ou WhatsApp.
                        </p>
                        <img className='img_renato' src={hero} alt='imagem projeto' />
                            <h4  className='git_hub_link' onClick={redirect_rep_hero}>
                            <FaGithubSquare
                                className='link_github'
                                size='50px'
                            />
                            Git Hub
                            </h4>
                        <hr />
                    </section>

                    <Contato/> 
                </section>
            </div>
            <Footer/>
        </div>
    )
}

//exportação da função principal
export default Projetos;