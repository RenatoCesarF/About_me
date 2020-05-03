import React from 'react'

//importação da estilização da pagina
import './style.css'

/*importação do arquivo php para envio automatico de email com o 
preenchimento do formulário

obs: não concluido, falta ligar com o sevidor*/
import php from '../../email.php'


//função que retorna o formulário
function Formulario(){
    return (
        <div>
        <hr/>
            <section class='contact'>
                <div class='contato'>
                    <h2 style={{padding:"40px", paddingBottom:'10px', paddingLeft:'10px'}}>Contato</h2>
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

//exportação da função componente que retorna o formulário
export default Formulario;