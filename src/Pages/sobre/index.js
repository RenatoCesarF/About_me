import React from 'react'
import {GrLinkedin,FaGithubSquare,FaFileDownload, FaYoutube } from 'react-icons/all'

import './style.css'; 
    
//Importing the components
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Contato from '../../Components/contato/contato'
import Competencias from '../../Components/competencias/competencias'


function Sobre() {
  //Redirection to git repo function 
  /*


  
  */
  function redirect(link){
    window.open(link)
  }

  return (
    <div>
                
      <Header />
                
      <div className="back">
        <section className="center">
            <div>
                <h2 className='im'>Who I'm: </h2>
                <p className="who">
                  I'm a FullStack developer, I work with both React-Js to create websites and applications
                  (like this site you are now on) and Python, C, MySQL, Flutter, and the base of Java.
                </p>
                <p className="who">
                  I've been programming since I was young and pursuing a developer career studying Systems
                  Information at UFGD. I did high school at Presidente Vargas State School
                  from Dourados. I'm finishing my English Learning at Fisk. Since I started as a developer,
                  I have been studying and learning more and more, working on projects in various programming languages ​​and producing
                  videos about the most interesting projects I work on
                </p>
            </div> 
            <div className='external_links'>
             
                <div className='git' onClick={() => redirect('https://github.com/RenatoCesarF')} >
                      <FaGithubSquare  size='30px' className='simbol' />
                      <h4 className='text'>Git Hub</h4>
                      
                </div>
              
                <div className='git' onClick={() => redirect('https://www.linkedin.com/in/renato-cesar-a31534193/')}>
                      <GrLinkedin size='30px' className='simbol' color='#0077B5' />
                        <h4 className='text'>Linkedin</h4>
                </div>
              
                <div className='git' onClick={() => redirect('https://www.youtube.com/channel/UCHPXJJhhkw1i7oAkq_Mcumw')}>
                      <FaYoutube size='30px' className='simbol'  color='#FF0000'  />
                        <h4 className='text'>Youtube</h4>
                </div>
          </div> 

          <div className='curr' onClick={() => redirect('https://drive.google.com/file/d/10wwAmd6oeCAe3cj_vsECCT_ya9tuSvGU/view?usp=sharing')}>
            <FaFileDownload size='20px' className='simbol_down' />
            <h4 className='curriculo'>Currículo</h4>
          </div>
            
          <hr />
            <Contato/>
        </section> 
                           
      </div>
              
        <Footer/>
    </div>
  )
}
export default Sobre

    /*
               
                */