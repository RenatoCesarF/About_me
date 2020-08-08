import React from 'react'
import {GrLinkedin,FaGithubSquare,FaFileDownload } from 'react-icons/all'

import './style.css'; 
    
//Importing the components
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Contato from '../../Components/contato/contato'
import Competencias from '../../Components/competencias/competencias'


function Sobre() {
  //Redirection to git repo function 
  let redirect_git = () => {
    window.open('https://github.com/RenatoCesarF')
  }
  //Redicection to my linkedin
  let redirect_linkedin = () => {
      window.open('https://www.linkedin.com/in/renato-cesar-a31534193/')
  }
  //Redirection to my Resume in google drive
  let redirect_drive = () => {
    window.open('https://drive.google.com/file/d/1C9sViteK0KIgp2oVw0undcH5B-9_pTtJ/view?usp=sharing')
}
  return (
    <div>
                
      <Header />
                
      <div className="back">
        <section className="center">
            <div>
                <h2 className='im'>Quem Sou: </h2>
                <p className="who">
                  Sou desenvolvedor FullStack, trabalho tanto com React-Js para criação de sites e aplicativos 
                  (como esse site que você esta agora) quanto com Python, C e a base de MySQL para back-end. 
                </p>
                <p className="who" style={{paddingTop:'20px'}}>
                  Programo desde mais novo e estou seguindo na carreira de desenvolvedor cursando Sistemas
                  da Informação na UFGD. Fiz o ensino médio na Escola Estadual Presidente Vargas
                  de Dourados e estou ultimo ano do curso de inglês avançado da Fisk.
                </p>
            </div> 
            <div className='contato'>
              <form className='form'>
                <div className='git' onClick={redirect_git} >
                      
                      <FaGithubSquare  size='30px' className='simbol_git' />
                      <h4 className='text_git'>Git Hub</h4>
                      
                    </div>
                <div className='lin' onClick={redirect_linkedin}>
                      <GrLinkedin size='30px' className='simbol_lin' />
                        <h4 className='text_lin'>Linkedin</h4>
                </div>

                <div className='curr' onClick={redirect_drive}>
                      <FaFileDownload size='20px' className='simbol_down' />
                        <h4 className='curriculo'>Currículo</h4>
                </div>


              </form>
            </div> 
            
            <Competencias className='comp'/>
          <hr />
            <Contato/>
        </section> 
                           
      </div>
              
        <Footer/>
    </div>
  )
}
export default Sobre