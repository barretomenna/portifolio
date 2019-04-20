import React, { Component } from 'react'
import './sobre.scss'


export default class Sobre extends Component {

    render() {
        return (
            <div>
                <div className="nes-container is-rounded text">
                    <h2>Sobre</h2>

                    <p>Ola, Me chamo Rafael da Silva Menna Barreto, sou desenvolvedor full stack junior estou cursando ciencia da computação e estou a mais de 2 anos trabalhando na área.</p>
                    <p>Sou uma pessoa curiosa e apaixonada por tecnologia e como podem ver por animes tambem , nunca estou satisfeito com conhecimento
                       que tenho e sempre busco aprender mais sendo por video aulas, cursos onlines e resolvendo os problemas
                       do dia a dia.
                    </p>

                    <p>Atualmente trabalho com as .NET CORE e vue, tambem estou trabalhando em um projeto pessoal
                       que seria um app para auxiliar em jogos de RPG de mesa, tendo como foco o armazenamento de informações
                       das fichas dos usuarios e a criação de salas para as partidas.
                    </p>
                </div>
            </div>
        );
    }
}