import React from 'react'
/*import proj from '../assents/proj'*/

/*função que retorna um modelo de projeto, futuramente
sera adicionado Props, para assim ela retornar o projeto 
que eu quiser sem precisar fazer commit no github*/
function Projeto() {
    return (
        <div>
            
            <section>
                <h1>titulo do Projeto</h1>
                <p>descrição do projeto</p>
                <img alt='imagem projeto'/>
                <p> link do projeto no github ou do site em questão ja utilizavel</p>

                <hr/>
            </section>

        </div>
    )
};

//exportação da função
export default Projeto;