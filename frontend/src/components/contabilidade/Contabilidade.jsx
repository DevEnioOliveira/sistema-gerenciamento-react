import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'bank',
    title: 'Contabilidade',
    subtitle: 'Controle da contabilidade da empresa'
}

export default class Contabilidade extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Contabilidade
            </Main>
        )
    }
}