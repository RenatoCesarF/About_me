/*função que sera responsável por pegar oque eu for postar e passar isso para a pagina
de posts*/
import React from 'react'

function Post(props) {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <div>
                <p className='texto_do_post'>{props.texto}</p>
            </div>
            <footer className="post-footer">{props.data} </footer>
            <hr className='linha'/>
        </div>
    )
}

export default Post;