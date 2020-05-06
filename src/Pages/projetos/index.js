import React from 'react'

//importação da estilização
import './style.css'; 

//importação dos componentes e do conteudo principal da pagina, os projetos.
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Contato from '../../Componentes/contato/contato'


import Renato from '../../assents/fundo.png'
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
                        <p>site desenvolvido com React-js para testar minhas abilidades em CSS e com a
                            ferramenta ja mencionada, além de servir como portfólio Online de divulgação do meu 
                            trabalho. Inspirado pelo Lucas Montano que diz ser importante ter um site "About me" 
                            para divulgar seus projetos e trabalhos. Não foi possível, até então, implementar todas 
                            as ideias que tive para o projeto, mas assim que eu aprender mais sobre o framework 
                            voltarei a desenvolver este site.
                        </p>
                        <img className='imag'src={Renato}alt='imagem projeto'/>
                            <h4 style={{ verticalAlign: 'top' }} style={{ cursor: 'pointer' }} onClick={redirect_rep}>
                                <FaGithubSquare
                                    size='50px'
                                    style={{ verticalAlign: 'middle', cursor: 'pointer',paddingBottom: "1cm" }}
                                    onClick={redirect_rep} />
                            Git Hub
                            </h4>
                        <hr/>
                    </section>


                    <section>
                        <h2 style={{padding:"1cm"}}>Be The Hero</h2>
                        <p>
                            Aplicação feita durante a Semana OmniStak da RockesSeat.
                            Tem como objetivo aproximar ONGs a possíveis doadores.
                             A aplicação funciona com um cadastro, atravez do Site, 
                             por parte da ONG de um dos casos que a mesma necessita de doação. 
                             A pessoa que tiver o aplicativo pode visualizar esses casos
                              cadastrados e contactar a ONG caso deseje, esse contato pode
                               se feito atravez de e-mail ou WhatsApp.
                        </p>
                        <img className='imag' src={hero} alt='imagem projeto' style={{height:'20%', width:'20%'}}/>
                            <h4 style={{ verticalAlign: 'top' }} style={{ cursor: 'pointer' }} onClick={redirect_rep_hero}>
                                <FaGithubSquare
                                    size='50px'
                                    style={{ verticalAlign: 'middle', cursor: 'pointer', paddingBottom: "1cm"}}
                                    onClick={redirect_rep_hero} 
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