import './style.css';
import React from 'react'
import Contact from '../../Components/Contact/index'
import ProjectElementModel from './project_element_model'

import Renato from '../../assets/renato.webp'
import hero from '../../assets/portfolio/bethehero.webp'
import loopyng from '../../assets/portfolio/loopyng.webp'
import goodvibes from '../../assets/portfolio/goodvibesjournal.webp'
import twitchProject from '../../assets/portfolio/twitchProject.webp'
import eightBitsSounds from '../../assets/portfolio/8Bits-sounds.webp'
import whatShouldIPlay from '../../assets/portfolio/what_should_i_play.webp'
const projectsJSON = require("../../projects.json")

let images = [];

// Essas imagens precisam ser adicionadas na ordem em que os projetos estão dentro do JSON
images.push(eightBitsSounds, whatShouldIPlay, twitchProject, goodvibes, loopyng, Renato, hero, )

export default function Projects() {
    return ( < div className = 'back' > {
            projectsJSON.projects.map((element, index) => {
                    return ( 
                        < ProjectElementModel
                            key = { index }
                            description = { element.description }
                            image = { images[index] }
                            links = { element.links }
                        />)
                })
            } <Contact/>
            </div>
        )
    }