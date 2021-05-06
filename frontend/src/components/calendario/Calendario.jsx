import React, {Component} from 'react'
import Main from '../template/main'


const headerProps = {
    icon: 'calendar',
    title: 'Calendário',
    subtitle: 'Visualização do calendário e controle de alertas de agenda!'
}

export default class Calendario extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Visualizaçãio do calendário
            </Main>
        )
    }
}