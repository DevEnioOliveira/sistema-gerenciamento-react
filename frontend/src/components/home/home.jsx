import React from 'react'
import Main from '../template/main'

export default (props) => {
    return (
        <Main icon="home" title="Início" subtitle="Bem vindo!">
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0"> Sistema de gerenciamento</p>
        </Main>
    )
}