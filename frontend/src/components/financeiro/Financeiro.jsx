import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'money',
    title: 'Financeiro',
    subtitle: 'Cadastro de notas: Incluir, Listar, Alterar e Excluir'
}

export default class Financeiro extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Notas
            </Main>
        )
    }
}