import React from 'react';

import { FaGithubSquare, FaYoutube,FaDonate } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import scrollToHeader from '../utils/scrollToHeader';

let redirect_to = (link) => {
    window.open(link);
}   

const getLinkElement = (link) => {
    console.log(link.type);
    if(!link || !link.type){
        return <></>
    }
    switch (link.type) {
        case "github":
            return <FaGithubSquare
                className="icon_link"
                size="2.5rem"
                onClick={() => redirect_to(link.redirect)}
            />
        case "youtube":
            return  <FaYoutube
                size='2.5rem'
                color='#F20F22'
                className='icon_link'
                onClick={() => redirect_to(link.redirect)}
            />
        case "colaborators":
            return <FaDonate
                size='2rem'
                color='#006FA5'
                className='icon_link'
                onClick={() =>{  
                    redirect_to("/contributors")
                    scrollToHeader()
                }}
            />
        case "website":
            return <VscGlobe
                size='2.5rem'
                color='#006FA5'
                className='icon_link'
                onClick={() => redirect_to(link.redirect)}
            />
        default:
            return <></>
    }
}

export default function ProjectElementModel(props) {
    return (
        <section>
            <img className='project_image' src={props.image} alt='Project' />            
            <p className='project_description'> {props.description}</p>
            
            <div className='links'>
                {props.links.map((link) => {
                    return(
                        <div className="tooltip">
                            {
                                getLinkElement(link)
                            }
                            <span className="tooltiptext">{link.hover_text}</span>
                        </div>
                    )
                })}
            </div>
            < hr className='divisoria'/>
        </section>
    )
}
