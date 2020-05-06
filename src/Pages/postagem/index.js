import React from 'react'

//importação da estilização CSS
import './style.css'; 
    
//importação dos componentes da pagina
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Post from './post'

//função que retorna a pagina HTML
function Posts() {
    return (
        <div>
            <Header/>
            <div className='back'>
                <section className="center">
                    <Post
                        titulo = 'Parando para aprender mais'
                        texto = 'Desde o último post tenho passado maior parte dos dias programando este site que você esta com o que eu sei sobre react, ou seja, 4 parametros dos 100 que o framework oferece, agora estarei parando para aprender o que mais a ferramenta oferece. E assim que aprender talvez aplique aqui e depois siga para o real propósito de aprender React. Foram dias de grande animação desenvolver e ver realmente a coisa funcionando, me sinto produtivo por estar aprendendo tanto. Hoje sera meu último dia mechendo nesse site, depois de hoje irei voltar para o curso do Scrimba e assim que tive mais ideias para implementar aqui estarei voltando.'
                        data = '06/05/2020'
                    />                   
                    <Post
                        titulo = 'Este site'
                        texto = 'Tive várias ideias de implementação nos últimos dias, entre elas esse site, estarei utilizando a base de react para criar esse site e depois partir para o real motivo de estar aprendendo Desenvolvimento web, motivo esse que não sera revelado tão em breve, apenas quando a ideia estiver no ar. Passarei os próximos dias implementando esse site.'
                        data = '30/04/2020'
                    />
                </section>
            </div>
            <Footer/>
        </div>
    )
}

//exportação da função que retorna HTML
export default Posts