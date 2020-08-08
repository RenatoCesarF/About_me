import React from 'react'

//Importing the icons 
import {FaPython, FaReact,FaJava } from 'react-icons/fa'
import { DiDatabase } from 'react-icons/di'

import './style.css'

function Competencias() {
  return (
  
    <div style={{display:"inline" }} >

      <div className='area_detect' >
        <FaPython className='one_comp' size='150px' id='one_comp' />
          <div className='content' id='python_text'>
            <h2>Python</h2>
            <p>Aprendi Python atravez das aulas do Curso sem Vídeo, uma linguagem dinâmica e com muitos usos, além de seu grande potencial para projetos de automação também possuí grande versatilidade para qualquer tipo de projeto. A simplicidade do código possíbilita que seja mais legível do que oturas linguagens. Rápido, fácil e usual, não tem melhor. </p>
          </div>
      </div>

      <div className='area_detect'>
        <FaReact className='one_comp' size='150px'/>
          <div className='content' id='react_text'>
            <h2>React-Js</h2>
            <p>Me apaixonei por React ao participar da Semana OmniStack, a biblioteca React facilita tudo, com seu sistema de rotas, componentes, props e assim por diante. Deixa tudo mais organizado, rápido e prático. Nada de ficar reescrevendo o mesmo HTML pro seu rodapé, só precisa criar um componente Rodapé e chama-lo quando quiser. Alem de tudo, alguns sites (como este) conseguem trocar as paginas sem loading, GENIAL! </p>
          </div>
      </div>
      
      <div className="area_detect">
        <DiDatabase className='bd' size='180px' />
          <div className='content' id='bd_text'>
            <h2>MySQL</h2>
            <p>Assim como Python, também aprendi os fundamentos de MySQL no Curso em Vídeo. Qualquer site, aplicação e qualquer sistema que tiver funcionalidade de login, registro e etc precisará de um sistema de banco de dados. Querendo ou não é uma tecnologia de suma importância pra qualquer produto. Com SQL você se sente realmente no controle de tudo, chega ser engraçado. Um banco de dados bem feito é parte consideravel de um bom sistema </p>
          </div>
      </div>


      <div className='area_detect'>
        <FaJava className='one_comp' size='150px' />
        <div className='content' id='java_text'>
          <h2>Java</h2>
          <p> É incrivel como mesmo sendo uma das linguagens de alto nivel mais antigas continua sendo usada até hoje, acredito que isso ocorre por seu grande pode de criar sistemas complexos muito bem, o sistema de organização por classes, o sistema de hierarquia, polimorfismo e assim por diante é deveras favorável na hora de criar um sistema como de um banco ou até mesmo de um jogo.</p>
        </div>
      </div>
   
    </div>
  );
}

export default Competencias;