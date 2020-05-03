import React from 'react'
import { Link } from 'react-router-dom';
import back from '../../assents/fundo.png'


function Header() {
    return (
    <div class='fundo'>
            <div className='zoom'>
                <img src={back}></img>
            </div>

        <div>
            <ul>
                <li>
                    <Link className='link' id='sobre' to='/'>Sobre</Link>
                </li>
                <li>
                    <Link className='link' id='projetos'to='/projetos'>Projetos</Link>
                </li>
                <li>
                    <Link className='link' id='posts'to='/posts'>Posts</Link>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Header;