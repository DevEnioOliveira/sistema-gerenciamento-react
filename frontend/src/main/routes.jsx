import React from 'react'
import {Switch, Route, Redirect} from 'react-router'


import Home from '../components/home/home'
import UserCrud from '../components/user/Usercrud'
import Estoque from '../components/estoque/Estoque'
import Contabilidade from '../components/contabilidade/Contabilidade'
import Financeiro from '../components/financeiro/Financeiro'
import Relatorios from '../components/relatorios/Relatorios'
import Galeria from '../components/galeria/Galeria'
import Blog from '../components/blog/Blog'
import Calendario from '../components/calendario/Calendario'

export default (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route  path='/users' component={UserCrud}></Route>
            <Route  path='/estoque' component={Estoque}></Route>
            <Route  path='/contabilidade' component={Contabilidade}></Route>
            <Route  path='/financeiro' component={Financeiro}></Route>
            <Route  path='/relatorios' component={Relatorios}></Route>
            <Route  path='/galeria' component={Galeria}></Route>
            <Route  path='/blog' component={Blog}></Route>
            <Route  path='/calendario' component={Calendario}></Route>
            <Redirect from="*" to="/"></Redirect>
        </Switch>
    )
}