import React from 'react'

import './style.css'; 

//Importing the components
import Contact from '../../Components/Contact/index'

import Project from './projeto_desc'

//Importing the photos
import Renato from '../../assets/renato.png'
import hero from '../../assets/portfolio/bethehero.png'
import loopyng from '../../assets/portfolio/loopyng.png'
import goodvibes from '../../assets/portfolio/goodvibesjornal.png'

export default function Projects(){
    return (
           
            <div className='back'>

                    <Project
                        description=' A Next.Js project that tries to bring good vibes for your day,
                                just happy news. No account, no AI algorithm, just the old journal thing, 
                                but with the technology that we have nowadays like funny and cute videos, 
                                quotes from around the world and more coming soon.
                        '
                        image={goodvibes}
                        link_git='https://github.com/RenatoCesarF/GoodVibesJournal'
                        link_page='https://goodvibesjournal.vercel.app'
                   />

                    <Project
                        description=' A program developed in python to replicate a loop station.
                                The program works through the computer keys, each of which is shown
                                in leyout it represents a loop-station pedal, that is, it can be recorded in an audio in
                                each of them and loop it. There are functions still under development, such as:
                                pause and play the audio metronome, view the microphone graph and so on.
                                See more about the project in the Read Me on github. '
                        image={loopyng}
                        link_git='https://github.com/RenatoCesarF/Loopyng'
                        link_youtube= 'https://www.youtube.com/watch?v=MOxTDfwdxCw&t=75s'
                   />

                    <Project
                        description=' Website developed with React-js to test my skills in WebDevelopment, in addition 
                        to serving as an online portfolio for disseminating my work as a developer. Inspired by 
                        Lucas Montano who says it is important to have an "About me" website
                        to publicize your projects. Until then, it was not possible to implement all
                        the ideas I had for this website. See more on the github repository, and you can watch my video about it too. '
                        image={Renato}
                        link_git = 'https://github.com/RenatoCesarF/About_me'
                        link_youtube='https://www.youtube.com/watch?v=aXlfmVeJHFs&t=8s'
                    />  

                    <Project
                        description='Application made during OmniStak Week, a week of content and classes about React-js and React Native. It aims to bring NGOs closer to possible donors. The application works with a registration, through the Site, by the NGO of one of the cases that it needs to donate. The person who has the app can view these cases
                        registered and contact the NGO if you wish, that contact can
                        if done via email or WhatsApp. See more in the github repository'
                        image={hero}
                        link_git='https://github.com/RenatoCesarF/be-the-hero'
                    />
                    <Contact/> 
        </div>
    )
}