import React from 'react'
import {GrLinkedin,FaGithubSquare,FaFileDownload, FaYoutube, FaMedium } from 'react-icons/all'

import './style.css'; 
    
//Importing the components
import Header from '../../Components/header/header'
import Footer from '../../Components/footer/footer'
import Contact from '../../Components/Contact/index'
import Skills from '../../Components/Skills'


export default function About() {

  function redirect(link){
    window.open(link)
  }

  return (
    <div>
                
      <Header />
                
      <div className="back">
            <div>
                <h2 className='im'>Who are Renato Cesar: </h2>
                <p className="who">
                  I'm a FullStack developer, I work with both React-Js to create websites and applications
                  (like this site you are now on) Python, C, MySQL, Flutter, and Java.
                </p>
                <p className="who">
                Studying Information Systems at UFGD a Dourados's university. Since I started as
              developer  I have been studying and learning more and more, working on projects in several
              programming languages ​​and producing videos about the most interesting ones.
                </p>
            </div> 
             
            <h3 className='whereUFind'>Where you can find Me:</h3>
            <div className='external_links'>
                <div className='git' onClick={() => redirect('https://github.com/RenatoCesarF')} >
                      <FaGithubSquare  size='30px' className='simbol'color='#24292E' />
                      <h4 className='text'>GitHub</h4>
                </div>
              
                <div className='git' onClick={() => redirect('https://www.linkedin.com/in/renato-cesar-a31534193/')}>
                      <GrLinkedin size='30px' className='simbol' color='#0077B5' />
                      <h4 className='text'>LinkedIn</h4>
                </div>
              
                <div className='git' onClick={() => redirect('https://www.youtube.com/channel/UCHPXJJhhkw1i7oAkq_Mcumw')}>
                      <FaYoutube size='30px' className='simbol'  color='#F20F22'  />
                      <h4 className='text'>Youtube</h4>
                </div>
                <div className='git' onClick={() => redirect('https://medium.com/@re.fbarcellossg')}>
                      <FaMedium size='30px' className='simbol'  color='#12100E' />
                      <h4 className='text'>Medium</h4>
                </div>
            
          </div> 
          <div className='curr' onClick={() => redirect('https://drive.google.com/file/d/10wwAmd6oeCAe3cj_vsECCT_ya9tuSvGU/view?usp=sharing')}>
            <FaFileDownload size='20px' className='simbol_down' />
            <h4 className='curriculo'>Resume</h4>
          </div>

          <Skills/>
          <hr/>
            <Contact/>
                           
      </div>
              
        <Footer/>
    </div>
  )
}