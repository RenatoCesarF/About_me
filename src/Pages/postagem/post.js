//this component is used to create a new post at Post page
import React from 'react'

function Post(props) {
    return (
        <div>
            <h1 className='titulo_post'>{props.titulo}</h1>
            <div>
                <p className='texto_do_post'>{props.texto}</p>
            </div>
            <footer className="post-footer">{props.data} </footer>
            <hr className='linha'/>
        </div>
    )
}

export default Post;