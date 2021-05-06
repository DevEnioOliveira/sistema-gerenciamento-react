import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'photo',
    title: 'Galeria',
    subtitle: 'Visualização de fotos e videos'
}

export default class Galeria extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Visualização de fotos
            </Main>
        )
    }
}