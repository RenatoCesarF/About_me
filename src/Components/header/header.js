import React from 'react'

import { Link } from 'react-router-dom';

//Importing the background image of the Header
import back from '../../assets/fundo.png'
import './style.css'

//função que retorna o cabeçalho inteiro da pagina mais o menu de navegação
function Header() {
    return (
        <div className='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar'></img>
            </div>

            <div >
                <ul style={{ paddingTop: "0.5rem", paddingBottom: "1rem"}}>
                    <li>
                        <Link id='link' className='sobre' to='/'><a href='#scroll'></a>Sobre</Link>                       
                    </li>
                    <li>
                        <Link id='link' className='projetos' to='/projetos'>Projetos</Link>                  
                    </li>
                    <li>
                        <Link id='link' className='posts'to='/posts'>Posts</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header;