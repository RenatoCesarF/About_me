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
                        texto=' A program developed in python to replicate a loop station.
                                The program works through the computer keys, each of which is shown
                                in leyout it represents a loop-station pedal, that is, it can be recorded in an audio in
                                each of them and loop it. There are functions still under development, such as:
                                pause and play the audio metronome, view the microphone graph and so on.
                                See more about the project in the Read Me on github. '
                        image={loopyng}
                        haveVideo={true}
                        link_git='https://github.com/RenatoCesarF/Loopyng'
                        link_yt= 'https://www.youtube.com/watch?v=MOxTDfwdxCw&t=75s'
                   />

                    <Projeto_desc
                        texto=' Site developed with React-js to test my skills in WebDevelopment, in addition 
                        to serving as an online portfolio for disseminating my work as a developer. Inspired by 
                        Lucas Montano who says it is important to have an "About me" website
                        to publicize your projects. Until then, it was not possible to implement all
                        the ideas I had for this website. See more on the github repository, and you can watch my video about it too. '
                        image={Renato}
                        haveVideo={true}
                        link_git = 'https://github.com/RenatoCesarF/About_me'
                        link_yt='https://www.youtube.com/watch?v=aXlfmVeJHFs&t=8s'
                    />  

                    <Projeto_desc
                        texto='Application made during OmniStak Week, a week of content and classes about React-js and React Native. It aims to bring NGOs closer to possible donors. The application works with a registration, through the Site, by the NGO of one of the cases that it needs to donate. The person who has the app can view these cases
                        registered and contact the NGO if you wish, that contact can
                        if done via email or WhatsApp. See more in the github repository'
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