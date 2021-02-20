import React from 'react'

import { FaGithubSquare, FaYoutube } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'

function Projeto_desc(props) {
    /*função de redirecionamento*/
    let redirect_rep = (link) => {
        window.open(link)
    }

    return (
        <section>
            <img className='img_renato' src={props.image} alt='Project Image' style={{maxHeight: `${props.maxheight}`}}/>            
            <p className='text_project'> {props.texto}</p>
            
            <div className='links'>
                <FaGithubSquare
                    className='simble_link'
                    size='6vh'
                    onClick={() => redirect_rep(props.link_git)}
                />
                {props.haveVideo?
                    (<FaYoutube
                    size='6vh'
                    color='#F20F22'
                    className='simble_link'
                    onClick={() => redirect_rep(props.link_yt)}
                    />)
                    :
                    <div/>
                }
                {props.havePage?
                    (<VscGlobe
                    size='6vh'
                    color='#006FA5'
                    className='simble_link'
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

export default Projeto_desc;