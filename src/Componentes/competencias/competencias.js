import React from 'react'
import comp from '../../assents/comp.png'
import './style.css'
//importação dos icons
import {FaPython, FaReact,FaCuttlefish } from 'react-icons/fa'
import {DiDatabase } from 'react-icons/di'
//função que retorna a imagem das competencias
function Competencias() {

  return (
  
    <div style={{display:"inline" }} >
      <FaPython className='one_comp' size='150px'/>
      <FaReact className='one_comp' size='150px'/>
      <DiDatabase className='bd' size='180px' />
        
      <img  className='comp' src={comp}/>
    </div>
  );
}

//exportação da função componente que retorna o formulário
export default Competencias;