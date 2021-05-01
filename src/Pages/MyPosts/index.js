import React from 'react'

import './style.css'; 
    
//Importing all the components
import Post from './post'

//Function that return the HTML of the page Posts
export default function MyPosts() {
    return (
        <div>
     
            <div className='back'>
                    <Post
                        titulo = 'Working on projects while Streaming'
                        texto = "I always wanna to make Streams, and now I'm doing it 😊. Currently I'm working in a Flutter App, it's going very well. I't cool to talk to outher programmers and explain my ideas, is something that I hope continue doing for some long, you and access my chanel in "
                        link="https://twitch.tv/renatocesarf"
                        linkText="Twitch"
                        data ='01/05/2021'
                    />
                    <Post
                        titulo= 'Updating this and starting new projecs'
                        texto = 'Today I comeback to this site repository to update somethings, like add responsiveness to smartphones and tablets, adjusting some colors and information and add my newest project to the list of Projects, the GoodVibes Jornal. It is a nextjs site with some news and cool stufs that I founded in the internet. Anyways, I will add somemore things and start a new project involving new languages and chalanges!'
                        data ='20/02/2021'
                    />
                    <Post
                        titulo= 'Trabalhando em projetos criativos no meu primeiro emprego'
                        texto = 'Após uma das mais excitantes experiências com exercícios de lógica de programação consegui meu primeiro emprego em um time de desenvolvimento aqui da cidade. Estou trabalhando na Dias Tecnologia a quase 4 meses e tem sido uma ótima primeira experiência. Trabalho sozinho em projetos que são um tanto quanto fora do comum, no momento estou trabalhando em um sistema de análise de vídeos que será usado em um aplicativo flutter que também estou construindo, estou adorando a Stack e progredindo rápido. Espero poder compartilhar mais sobre futuramente.'
                        data ='05/11/2020'
                    />
                    <Post
                        titulo ='Primeiro Game Project'
                        texto ='Recentemente comecei a trabalhar em uma das minhas antigas ideias de jogo, estou usando a Godot Engine e está sendo uma experiência e tanto. Além de estar implementando todo o jogo sozinho estou também postando DevLogs sobre os processos de criação do jogo no meu canal do youtube, segue o Link:'
                        data = '10/10/2020'
                        link="https://youtu.be/nDTOd0dRu90"
                        linkText="Youtube"
                    />
                    <Post
                        titulo = 'Iniciando em Java e projeto beta finalizado'
                        texto = 'A faculdade da UEMS está oferecendo um curso de 88 horas sobre Orientação à Objeto com Java, confesso que tenho interesse em conhecer essa linguagem e alguns projetinhos em mente que estarei usando a mesma. Infelizmente os estudos de React terão que ficar para outra hora. Também acabo de finalizar a beta de um dos meus projetos, o Loopyng, veja mais sobre ele nesse vídeo aqui:'
                        data = '22/06/2020'
                        link = "https://www.youtube.com/watch?v=MOxTDfwdxCw&t"
                        linkText="Youtube"
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
            </div>
        
        </div>
    )
}