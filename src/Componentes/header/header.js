import React from 'react'

//biblioteca utilizada para alternar entre as paginas do site
import { Link } from 'react-router-dom';

//importação da imagem do cabeçalho e da estilização CSS
import back from '../../assents/fundo.png'
import './style.css'

//função que retorna o cabeçalho inteiro da pagina mais o menu de navegação
function Header() {
    return (
    <div class='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar'></img>
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