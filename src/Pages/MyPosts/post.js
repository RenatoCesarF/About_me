import React from 'react'
import {SiTwitch} from 'react-icons/si'
import {FaYoutube} from 'react-icons/fa'

function Post(props) {
    return (
        <div>
            <h1 className='titulo_post'>{props.titulo}</h1>
            <div>
                <p className='texto_do_post'>{props.texto}</p>
            </div>
        
            <div>
                <a href={props.link}>
                    <p className="post_link">
                        {props.linkText === "Twitch"?
                            (<SiTwitch size={30} color="#613FA0"/>)
                            :
                            null
                        }
                        {props.linkText === "Youtube"?
                            (<FaYoutube size={30}  color='#F20F22'/>)
                            :
                            null
                        }
                       
                      
                        {props.linkText}
                    </p>
                </a>
            </div>
            <footer className="post_date">{props.data} </footer>
            <hr className='linha'/>
        </div>
    )
}

export default Post;