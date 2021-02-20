import React from 'react'

import './style.css'; 

//Importing the components
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Contact from '../../Components/Contact/index'

import Projeto_desc from './projeto_desc'

//Importing the photos
import Renato from '../../assets/renato.png'
import hero from '../../assets/port/bethehero.png'
import loopyng from '../../assets/port/loopyng.png'
import goodvibes from '../../assets/port/goodvibesjornal.png'

export default function Projects(){
    return (
        <div>
            <Header />
            <div className='back'>
                <section className='center'>

                    <Projeto_desc
                        texto=' A Next.Js project that tries to bring good vibes for your day,
                                just happy news. No account, no AI algorithm, just the old jornal thing, 
                                but with the technology that we have nowadays like funny and cute videos, 
                                quotes from around the world and more coming soon
                        '
                        image={goodvibes}
                        link_git='https://github.com/RenatoCesarF/GoodVibesJornal'
                        link_page='https://goodvibesjornal.vercel.app'
                        haveVideo={false}
                        havePage={true}
                        maxheight={'10vw'}
                        
                   />
                    <Projeto_desc
                        texto=' Um programa desenvolvido em python com objetivo de replicar uma loop-station.
                                O programa funciona atravez das teclas do computador, cada uma das que são mostradas 
                                no leyout representa um pedal de loop-station, ou seja, pode-se gravar em um audio em 
                                cada um deles e coloca-lo em looping. Existem funções ainda em desenvolvimento, como:
                                pause e play do audio metronomo, visualização do grafico do microfone e assim por diante.
                                Veja mais sobre o projeto no Read Me do github.'
                        image={loopyng}
                        haveVideo={true}
                        link_git='https://github.com/RenatoCesarF/Loopyng'
                        link_yt= 'https://www.youtube.com/watch?v=MOxTDfwdxCw&t=75s'
                   />

                    <Projeto_desc
                        texto=' Site desenvolvido com React-js para testar minhas abilidades em CSS e com a
                                ferramenta ja mencionada, além de servir como portfólio Online de divulgação do meu 
                                trabalho. Inspirado pelo Lucas Montano que diz ser importante ter um site "About me" 
                                para divulgar seus projetos e trabalhos. Não foi possível, até então, implementar todas 
                                as ideias que tive para o projeto, mas assim que eu aprender mais sobre o framework 
                                voltarei a desenvolver este site. Veja mais sobre no repositório do github.'
                        image={Renato}
                        haveVideo={true}
                        link_git = 'https://github.com/RenatoCesarF/About_me'
                        link_yt='https://www.youtube.com/watch?v=aXlfmVeJHFs&t=8s'
                    />  

                    <Projeto_desc
                        texto='Aplicação feita durante a Semana OmniStak da RockesSeat.Tem como objetivo aproximar ONGs a possíveis doadores. A aplicação funciona com um cadastro, atravez do Site, por parte da ONG de um dos casos que a mesma necessita de doação. A pessoa que tiver o aplicativo pode visualizar esses casos
                        cadastrados e contactar a ONG caso deseje, esse contato pode
                        se feito atravez de e-mail ou WhatsApp. Veja mais no repositório do github'
                        image={hero}
                        link_git='https://github.com/RenatoCesarF/be-the-hero'
                        haveVideo={false}
                    />
                   
                   

                    
                    <Contact/> 
                </section>
            </div>
            <Footer/>
        </div>
    )
}