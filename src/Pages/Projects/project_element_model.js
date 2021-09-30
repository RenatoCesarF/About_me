import React from 'react';
import { useHistory } from "react-router-dom";

import { FaGithubSquare, FaYoutube,FaDonate } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import scrollToHeader from '../../utils/scrollToHeader';

export default function ProjectElementModel(props) {
    let redirect_to = (link) => {
        window.open(link)
    }   

    const history = useHistory();

    return (
        <section>
            <img className='project_image' src={props.image} alt='Project' />            
            <p className='project_description'> {props.description}</p>
            
            <div className='links'>
                {props.links.map((link) => {
                    return(
                        <div class="tooltip">
                            {
                            link.type == "github"?
                            <FaGithubSquare
                                className="icon_link"
                                size="2.5rem"
                                onClick={() => redirect_to(link.redirect)}
                            />: 
                            link.type == "youtube"?
                            <FaYoutube
                                size='2.5rem'
                                color='#F20F22'
                                className='icon_link'
                                onClick={() => redirect_to(link.redirect)}
                            />:
                            link.type == "colaborators"?
                            <FaDonate
                                size='2rem'
                                color='#006FA5'
                                className='icon_link'
                                onClick={() =>{  
                                    history.push("/contributors")
                                    scrollToHeader()
                                }}
                            />:
                            link.type == "website"?
                            <VscGlobe
                                size='2.5rem'
                                color='#006FA5'
                                className='icon_link'
                                onClick={() => redirect_to(link.redirect)}
                            />:
                            <div/>}
                            <span class="tooltiptext">{link.hover_text}</span>
                        </div>
                    )
                })}
          
             
            </div>
            < hr className='divisoria'/>
        </section>
    )
}
