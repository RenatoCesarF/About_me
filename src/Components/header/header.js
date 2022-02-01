import React from 'react'

import { Link } from 'react-router-dom';
import scrollToHeader from '../../utils/scrollToHeader'
import back from '../../assets/fundo.webp'
import './style.css'




function Header() {
    

    return (
        <div className='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar' itemID={'headerImage'} id={'headerImage'}></img>
            </div>

            <div className='headerOptions'>
                <ul style={{ paddingTop: "0.5rem", paddingBottom: "1rem"}}>
                    <li>
                        <Link 
                            className='link sobre' 
                            to='/' 
                            onClick={() => scrollToHeader()}
                            >About
                        </Link>                       
                    </li>
                    <li>
                        <Link
                            className='link projetos'
                            to='/projects'
                             onClick={() => scrollToHeader()}
                            >Projects
                        </Link>                  
                    </li>
                    <li>
                        <Link 
                            className='link posts'
                            to='/posts' 
                             onClick={() => scrollToHeader()}
                            >Posts
                         </Link>
                    </li>
              
                </ul>
            </div>

        </div>
    )
}

export default Header;