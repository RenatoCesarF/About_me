import React from 'react'

import {FaGithubSquare, FaYoutube } from 'react-icons/fa'


function Projeto_desc(props) {
    /*função de redirecionamento*/
    let redirect_rep = (link) => {
        window.open(link)
    }

    return (
        <section>
            <h2 style={{paddingBottom:'20px'}}>{props.titulo} </h2>
            
            <p className='text_project'> {props.texto}</p>
            
            <img className='img_renato' src={props.image} alt='imagem projeto' style={{width: props.tamanho, height: props.tamanho}}/>
            <div className='links'
                
            >
                <FaGithubSquare
                    className='link_github'
                    size='60px'
                    onClick={() => redirect_rep(props.link_git)}
                />
        
                <FaYoutube
                    size='50px'
                    className='link_yt'
                    onClick={() => redirect_rep(props.link_yt)}
                />
            </div>
            < hr className='divisoria'/>
        </section>
    )
}

export default Projeto_desc;