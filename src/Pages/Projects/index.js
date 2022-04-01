import './style.css';
import React from 'react'
import Contact from '../../Components/Contact/index'
import Project from '../../Components/Project'

const projectsJSON = require("../../projects.json")


export default function Projects() {
    return ( 
        <div className = 'back'>
            {
                projectsJSON.projects.map((element, index) => {
                        return ( 
                            <Project
                                key = { index }
                                description = { element.description }
                                image = { element.image_path}
                                links = { element.links }
                            />
                        )
                    })
            } 
            <Contact/>
        </div>
    )
}