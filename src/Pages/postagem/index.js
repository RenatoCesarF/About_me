import React from 'react'

import './style.css'; 
    
//Importing all the components
import Header from '../../Componentes/header/header'
import Footer from '../../Componentes/footer/footer'
import Post from './post'

//Function that return the HTML of the page Posts
function Posts() {
    return (
        <div>
            <Header/>
            <div className='back'>
                <section className="center">
                    <Post
                        titulo = 'Iniciando em Java e projeto beta finalizado'
                        texto = 'A faculdade da UEMS está oferecendo um curso de 88 horas sobre Orientação à Objeto com Java, confesso que tenho interesse em conhecer essa linguagem e alguns projetinhos em mente que estarei usando a mesma. Infelizmente os estudos de React terão que ficar para outra hora. Também acabo de finalizar a beta de um dos meus projetos, o Loopyng, veja mais sobre ele nesse vídeo aqui: https://www.youtube.com/watch?v=MOxTDfwdxCw&t=75s'
                        data = '22/06/2020'
                    /> 
                    <Post
                        titulo = 'Uma oportunidade de Estágio'
                        texto = 'Fui selecionado para um estágio (na Empresa Júnior)  não remunerado que faz parte da faculdade, estou muito contente pela oportunidade. Espero aprender muito e ter uma boa primeira experiência com trabalho em equipe, git e desenvolvimento em conjunto.'
                        data = '04/06/2020'
                    /> 
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