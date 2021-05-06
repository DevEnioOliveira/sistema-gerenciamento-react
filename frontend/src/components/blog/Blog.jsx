import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'edit',
    title: 'Blog',
    subtitle: 'Cadastro de notícias e avisos'
}

export default class Blog extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de notícias e avisos
            </Main>
        )
    }
}