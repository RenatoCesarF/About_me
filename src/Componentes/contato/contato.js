import React from 'react'

//importação da estilização da pagina
import './style.css'


//importação dos simbulos usados na pagina
import {MdEmail,RiWhatsappLine } from 'react-icons/all'



  
//função que retorna a area de contato
function Contato() {

  //função para copiar o email para a area de transferencia
  let Copy = () => {
    //O texto que será copiado
    const texto = "re.fbarcellos@hotmail.com";
    //Cria um elemento input (pode ser um textarea)
    let inputTest = document.createElement("input");
    inputTest.value = texto;
    //Anexa o elemento ao body
    document.body.appendChild(inputTest);
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    //remove o elemento
    document.body.removeChild(inputTest);
    alert("Email Copiado!")
  }
  //função de redirecionamento para meu numero do whatsapp
  let redirect_to_whatsapp = () => {
    window.open('https://wa.me/5567984582760')

  }

return (
  <section className='contact'>
      <div className='contato'>
      <h2 className='titulo'>Contato</h2>
      <form className='form'>
      
        <div  id='scroll' className='email' onClick={Copy}>
  
          <MdEmail size='30px' className='simbol_email' />
          <h1 className='text_email'>E-mail</h1>
      
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

//exportação da função componente que retorna o formulário
export default Contato;