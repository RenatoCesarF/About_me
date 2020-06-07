import React from 'react'

import {FaGithubSquare } from 'react-icons/fa'


function Projeto_desc(props) {
    /*função de redirecionamento*/
    let redirect_rep = (link) => {
        window.open(link)
    }

    return (
        <section>
            <h2 style={{ padding: "1cm" }} >{props.titulo} </h2>
            
            <p className='text_project'> {props.texto}</p>
            
            <img className='img_renato' src={props.image} alt='imagem projeto' style={{width: props.tamanho, height: props.tamanho}}/>
            <h4 className='git_hub_link'
                onClick={() => redirect_rep(props.link_to)}
            >
                    <FaGithubSquare
                        className='link_github'
                        size='50px'
                    />
                Git Hub
            </h4>

            <hr/>
        </section>
    )
}

export default Projeto_desc;