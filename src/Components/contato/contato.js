import React from 'react'

import './style.css'

//Importing the icons
import {MdEmail,RiWhatsappLine } from 'react-icons/all'


function Contato() {

  //Function to copy my email and open your send email system
  let Copy = () => {
    const texto = "re.fbarcellos@hotmail.com";
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    document.body.appendChild(inputTest);
    inputTest.select();
    document.execCommand('copy');
    document.body.removeChild(inputTest);
    alert("Email Copiado. Caso você tenha uma ferramenta para envio de e-mails ela sera aberta automaticamente.")
  }

  //Function to redirect you to my contact on whatsapp
  let redirect_to_whatsapp = () => {
    window.open('https://wa.me/5567984582760')
  }

  return (
    <section className='contact'>
      <div className='contato'>
        <h2 className='titulo'>Contato</h2>
        <form className='form'>
        
          <div  id='scroll' className='email' onClick={Copy}>
            <MdEmail size='30px' className='simbol_email'/>
            <a className='text_email' href="mailto:re.fbarcellos@hotmail.com" > E-mail</a>
          </div> 
          
        
          <div className='zap' onClick={redirect_to_whatsapp}>
            <RiWhatsappLine size='30px' className='simbol_zap' />
            <h1 className='text_zap'>WhatsApp</h1>
          </div>
        
        </form>
      </div> 
    </section>
  );

}

export default Contato;