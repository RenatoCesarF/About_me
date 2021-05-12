import React from 'react'

import { Link } from 'react-router-dom';

import back from '../../assets/fundo.png'
import './style.css'




function Header() {
    
    function  scrollToHeader() {
        const imageHeight = document.getElementById('headerImage').clientHeight;
        window.scrollTo({
            top: imageHeight,
            behavior: 'smooth',
        });
    }
    return (
        <div className='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar' itemID={'headerImage'} id={'headerImage'}></img>
            </div>

            <div className='headerOptions'>
                <ul style={{ paddingTop: "0.5rem", paddingBottom: "1rem"}}>
                    <li>
                        <Link 
                            id='link'
                            className='sobre' 
                            to='/' 
                            onClick={() => scrollToHeader()}
                            >About
                        </Link>                       
                    </li>
                    <li>
                        <Link
                            id='link'
                            className='projetos'
                            to='/projects'
                             onClick={() => scrollToHeader()}
                            >Projects
                        </Link>                  
                    </li>
                    <li>
                        <Link 
                            id='link'
                            className='posts'
                            to='/posts' 
                             onClick={() => scrollToHeader()}
                            >Posts
                         </Link>
                    </li>
                    <li>
                        <Link 
                            id='link'
                            className='posts'
                            to='/contributors' 
                             onClick={() => scrollToHeader()}
                            >Contributors
                         </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header;