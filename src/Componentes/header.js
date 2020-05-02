import React from 'react'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <div class="cabeçalho">
                Renato Cesar   
            </div>


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
    )
}

export default Header;