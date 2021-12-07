import React from 'react'
import {GrLinkedin,FaGithubSquare,FaFileDownload, FaYoutube, FaMedium } from 'react-icons/all'

import './style.css'; 
    
//Importing the components
import Contact from '../../Components/Contact/index'
import Skills from '../../Components/Skills'


export default function About() {

  function redirect(link){
    window.open(link)
  }

  return (
    <div>
              
      <div className="back">
            <div>
                <h2 className='im'>Who I am: </h2>
                <p className="who">
                  I'm a FullStack developer, work with React and Next-Js, Python, MySQL, Flutter, and Java.
                  Have been learning more and more, developing projects in several
                  programming languages ​​and producing videos about each project.
                </p>
            </div> 
             
            <h3 className='where_find_me'>Where you can find Me:</h3>
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
          <div className='curr' onClick={() => redirect('https://drive.google.com/file/d/1SUgz-X-Qw22qTEaVzztpGLue_ivY3m7S/view?usp=sharing')}>
            <FaFileDownload size='20px' className='simbol_down' />
            <h4 className='curriculo'>Resume</h4>
          </div>

          <Skills/>
          <hr/>
            <Contact/>
                           
      </div>
    </div>
  )
}