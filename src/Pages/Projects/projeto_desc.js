import React from 'react'

import { FaGithubSquare, FaYoutube } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'

export default function Project(props) {
    /*função de redirecionamento*/
    let redirect_rep = (link) => {
        window.open(link)
    }   

    return (
        <section>
            <img className='project_image' src={props.image} alt='Project Image' />            
            <p className='project_description'> {props.description}</p>
            
            <div className='links'>
                {
                    props.link_git != null?
                    (<FaGithubSquare
                    className='icon_link'
                    size='2.5rem'
                    onClick={() => redirect_rep(props.link_git)}
                    />)
                    :
                    <div/>
                }
             
                {props.link_youtube != null?
                    (<FaYoutube
                    size='2.5rem'
                    color='#F20F22'
                    className='icon_link'
                    onClick={() => redirect_rep(props.link_youtube)}
                    />)
                    :
                    <div/>
                    }
                {props.link_page != null?
                    (<VscGlobe
                    size='2.5rem'
                    color='#006FA5'
                    className='icon_link'
                    onClick={() => redirect_rep(props.link_page)}
                    />)
                    :
                    <div/>
                }
            </div>
            < hr className='divisoria'/>
        </section>
    )
}

