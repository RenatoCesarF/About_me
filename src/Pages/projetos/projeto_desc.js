import React from 'react'

import {FaGithubSquare, FaYoutube } from 'react-icons/fa'


function Projeto_desc(props) {
    /*função de redirecionamento*/
    let redirect_rep = (link) => {
        window.open(link)
    }

    return (
        <section>
            <img className='img_renato' src={props.image} alt='imagem projeto'/>
            
            <p className='text_project'> {props.texto}</p>
            
            
            
            <div className='links'>
                <FaGithubSquare
                    className='link_github'
                    size='6vh'
                    onClick={() => redirect_rep(props.link_git)}
                />
        
                <FaYoutube
                    size='5vh'
                    color='#FF0000'
                    className='link_yt'
                    onClick={() => redirect_rep(props.link_yt)}
                />
            </div>
            < hr className='divisoria'/>
        </section>
    )
}

export default Projeto_desc;