import './style.css'; 
import React from 'react'
import Contact from '../../Components/Contact/index'
import ProjectElementModel from './project_element_model'

import Renato from '../../assets/renato.png'
import hero from '../../assets/portfolio/bethehero.png'
import loopyng from '../../assets/portfolio/loopyng.png'
import goodvibes from '../../assets/portfolio/goodvibesjournal.png'
import twitchProject from '../../assets/portfolio/twitchProject.png'
import eightBitsSounds from '../../assets/portfolio/8Bits-sounds.png'
const projectsJSON = require("../../projects.json")

let images = [];

images.push(eightBitsSounds,twitchProject,goodvibes,loopyng,Renato,hero)

export default function Projects(){
    return (
        <div className='back'>
            {projectsJSON.projects.map((element,index) => {
                return(<ProjectElementModel
                    key={index}
                    description= {element.description}
                    image={images[index]}
                    links={element.links}
                />)
            })}
            <Contact/> 
        </div>
    )
}
