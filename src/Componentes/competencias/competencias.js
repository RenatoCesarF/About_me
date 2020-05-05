import React from 'react'
import comp from '../../assents/comp.png'

//importação da estilização da pagina
import './style.css'


//função que retorna a imagem das competencias
function Competencias() {

  return (
  
    <div>
        <img  className='comp' src={comp} alt='abilidades'></img>
    </div>
  );
}

//exportação da função componente que retorna o formulário
export default Competencias;