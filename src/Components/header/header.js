import React from 'react'

import { Link } from 'react-router-dom';

import back from '../../assets/fundo.png'
import './style.css'



function  scrollToHeader() {
    window.scrollTo({
      top: 850,
      behavior: "smooth"
    });
  }

function Header() {
    return (
        <div className='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar'></img>
            </div>

            <div >
                <ul style={{ paddingTop: "0.5rem", paddingBottom: "1rem"}}>
                    <li>
                        <Link 
                            id='link'
                            className='sobre' 
                            to='/' 
                            onClick={scrollToHeader}
                            >About
                        </Link>                       
                    </li>
                    <li>
                        <Link
                            id='link'
                            className='projetos'
                            to='/projects'
                            onClick={scrollToHeader}
                            >Projects
                        </Link>                  
                    </li>
                    <li>
                        <Link 
                            id='link'
                            className='posts'
                            to='/posts' 
                            onClick={scrollToHeader}
                            >Posts
                         </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header;