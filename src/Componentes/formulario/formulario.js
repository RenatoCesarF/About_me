import React from 'react'

function Formulario(){
    return (
        <div>
            <hr/>
            <section class='contact'>
            <div class='contato'>
                <h1 style={{padding:"40px", paddingBottom:'10px', paddingLeft:'10px'}}>Contato</h1>
                <form class='form' method='POST' action='../../email.php'>
                    <input type="text" name='name' placeholder='Nome' class='field'/>            
                    <input type="email" placeholder='E-mail' name='email'  class='field'/>            
                    <textarea name="message" placeholder='Digite sua mensagem aqui'  class='text'/>
                    <input type='submit' class='botao'/>            
                </form>
            </div>            
            </section>
        </div>
    )
}

export default Formulario