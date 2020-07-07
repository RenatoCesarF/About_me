import React from 'react'

//importação da estilização
import './style.css'; 

//importação dos componentes e do conteudo principal da pagina, os projetos.
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Contato from '../../Componentes/contato/contato'
import Projeto_desc from './projeto_desc'

//importação das fotos dos projetos 
import Renato from '../../assents/renato.png'
import hero from '../../assents/port/bethehero.png'
import loopyng from '../../assents/port/loopyng.png'

//função que retorna a pagina HTML
function Projetos() {


    return (
        <div>
            <Header />
            <div className='back'>
                <section className='center'>

                    <Projeto_desc
                        titulo='Loopyng'
                        texto=' Um programa desenvolvido em python com objetivo de replicar uma loop-station.
                                O programa funciona atravez das teclas do computador, cada uma das que são mostradas 
                                no leyout representa um pedal de loop-station, ou seja, pode-se gravar em um audio em 
                                cada um deles e coloca-lo em looping. Existem funções ainda em desenvolvimento, como:
                                pause e play do audio metronomo, visualização do grafico do microfone e assim por diante.
                                Veja mais sobre o projeto no Read Me do github.'
                        image={loopyng}
                        link_git='https://github.com/RenatoCesarF/Loopyng'
                        link_yt= 'https://www.youtube.com/watch?v=MOxTDfwdxCw&t=75s'
                        tamanho = '30%'
                   />

                    <Projeto_desc
                        titulo='Este Blog'
                        texto=' Site desenvolvido com React-js para testar minhas abilidades em CSS e com a
                                ferramenta ja mencionada, além de servir como portfólio Online de divulgação do meu 
                                trabalho. Inspirado pelo Lucas Montano que diz ser importante ter um site "About me" 
                                para divulgar seus projetos e trabalhos. Não foi possível, até então, implementar todas 
                                as ideias que tive para o projeto, mas assim que eu aprender mais sobre o framework 
                                voltarei a desenvolver este site. Veja mais sobre no repositório do github.'
                        image={Renato}
                        link_git = 'https://github.com/RenatoCesarF/About_me'
                        link_yt= 'https://www.youtube.com/watch?v=aXlfmVeJHFs&t=8s'
                    />  

                    <Projeto_desc
                        titulo='Be The Hero'
                        texto='Aplicação feita durante a Semana OmniStak da RockesSeat.Tem como objetivo aproximar ONGs a possíveis doadores. A aplicação funciona com um cadastro, atravez do Site, por parte da ONG de um dos casos que a mesma necessita de doação. A pessoa que tiver o aplicativo pode visualizar esses casos
                        cadastrados e contactar a ONG caso deseje, esse contato pode
                        se feito atravez de e-mail ou WhatsApp. Veja mais no repositório do github'
                        image={hero}
                        link_git= 'https://github.com/RenatoCesarF/be-the-hero'
                    />
                   
                   

                    
                    <Contato/> 
                </section>
            </div>
            <Footer/>
        </div>
    )
}

//exportação da função principal
export default Projetos;