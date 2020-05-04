import React from 'react'

//importação da estilização da pagina
import './style.css'




//função que retorna o formulário
function Formulario(){
    return (
    <div>
        <hr/>
            <section class='contact'>
                <div class='contato'>
                    <h2 class='titulo'>Contato</h2>

                    <form
                        name="contact"
                        action='POST'
                        data-netlify="true"
                        data-netlify-recaptcha="true"
                        name="contact-form"
                        class='form' netlify>
                        <input type="text" name="name" id='name' placeholder="Nome" class='field'/>               
                        <input type="email" name="email"  id='email'placeholder='E-mail' class='field'/>              
                        <textarea  name="message" id='message'placeholder='Digite sua mensagem aqui...' class='text'/>              
                        <button type="submit" name='botao'  class='botao'>Enviar</button>           
                    </form>
                    
                </div>      
                <div>
                <form name="contact"
                        
                        data-netlify="true"
                        data-netlify-recaptcha="true"
    
                        name="contact-form"
                        method="post"
                        class='form' name="contact"
                        data-netlify-recaptcha="true"
                        data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
            </form>
            
            <form name="contact" method="post">
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
            </form>
            
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>

                </div>
            </section>
        </div>   
    )
}

//exportação da função componente que retorna o formulário
export default Formulario;