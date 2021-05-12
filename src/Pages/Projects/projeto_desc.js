import React from 'react'
import { useHistory } from "react-router-dom";

import { FaGithubSquare, FaYoutube,FaDonate } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import scrollToHeader from '../../utils/scrollToHeader';

export default function Project(props) {
    let redirect_to = (link) => {
        window.open(link)
    }   

    const history = useHistory();


    return (
        <section>
            <img className='project_image' src={props.image} alt='Project' />            
            <p className='project_description'> {props.description}</p>
            
            <div className='links'>
                {
                    props.link_git != null?
                    (<FaGithubSquare
                    className='icon_link'
                    size='2.5rem'
                    onClick={() => redirect_to(props.link_git)}
                    />)
                    :
                    <div/>
                }
             
                {props.link_youtube != null?
                    (<FaYoutube
                    size='2.5rem'
                    color='#F20F22'
                    className='icon_link'
                    onClick={() => redirect_to(props.link_youtube)}
                    />)
                    :
                    <div/>
                    }
                {props.link_page != null?
                    (<VscGlobe
                    size='2.5rem'
                    color='#006FA5'
                    className='icon_link'
                    onClick={() => redirect_to(props.link_page)}
                    />)
                    :
                    <div/>
                }
                {
                    props.colaborators?
                    <FaDonate
                    size='2rem'
                    color='#07AA85'
                    className='icon_link'
                    onClick={() =>{  
                        history.push("/contributors")
                        scrollToHeader()
                        }}
                    />
                    :
                    <div/>
                }
             
            </div>
            < hr className='divisoria'/>
        </section>
    )
}

