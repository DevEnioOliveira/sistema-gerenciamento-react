import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'folder',
    title: 'Estoque',
    subtitle: 'Cadastro de produtos: Incluir, Listar, Alterar e Excluir'
}

export default class Estoque extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de produtos
            </Main>
        )
    }
}