import React from 'react'
//biblioteca utilizada para alternar entre as paginas do site
import { Link } from 'react-router-dom';

//importação da imagem do cabeçalho e da estilização CSS
import back from '../../assents/fundo.png'
import './style.css'

//função que retorna o cabeçalho inteiro da pagina mais o menu de navegação
function Header() {
    return (
        <div className='fundo'>
            <div className='zoom'>
                <img src={back} alt='Renato Cesar'></img>
            </div>

            <div>
                <ul>
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