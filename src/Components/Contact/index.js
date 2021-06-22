import React from 'react'
import copyToClipboard from '../../utils/copyToClipboard'
import './style.css'

//Importing the icons
import {MdEmail,RiWhatsappLine } from 'react-icons/all'


export default function Contact() {
  //Function to redirect you to my contact on whatsapp
  let redirect_to_whatsapp = () => {
    window.open('https://wa.me/5567984582760')
  }

  return (
    <section className='contact'>
      <div className='contato'>
        <h2 className='titulo'>Contact</h2>
        <form className='form'>
        
          <div  id='scroll' className='email' onClick={()=>copyToClipboard("re.fbarcellos@hotmail.com")}>
            <MdEmail size='40px' className='simbol_email'/>
            <a className='text_email' href="mailto:re.fbarcellos@hotmail.com" > E-mail</a>
          </div> 
          
        
          <div className='zap' onClick={redirect_to_whatsapp}>
            <RiWhatsappLine size='40px' className='simbol_zap' />
            <h1 className='text_zap'>Whatsapp</h1>
          </div>
        
        </form>
      </div> 
    </section>
  );

}