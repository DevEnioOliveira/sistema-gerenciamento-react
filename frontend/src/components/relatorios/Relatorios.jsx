import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'tasks',
    title: 'Relatórios',
    subtitle: 'Relatórios'
}

export default class Financeiro extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Impressão de relatórios
            </Main>
        )
    }
}