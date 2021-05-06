import './nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default (props) => {
    
    return (
        <aside className="menu-area">
            <nav className="menu">
                <Link to="/">
                    <i className="fa fa-home"></i> Início
                </Link>
                <Link to="/users">
                    <i className="fa fa-users"></i> Usuários
                </Link>
                <Link to="/estoque">
                    <i className="fa fa-folder"></i> Estoque
                </Link>
                <Link to="/contabilidade">
                    <i className="fa fa-bank"></i> Contabilidade
                </Link>
                <Link to="/financeiro">
                    <i className="fa fa-money"></i> Financeiro
                </Link>
                <Link to="/relatorios">
                    <i className="fa fa-tasks"></i> Relatórios
                </Link>
                <Link to="/galeria">
                    <i className="fa fa-photo"></i> Galeria
                </Link>
                <Link to="/blog">
                    <i className="fa fa-edit"></i> Blog
                </Link>
                <Link to="/calendario">
                    <i className="fa fa-calendar"></i> Calendário
                </Link>
            </nav>
        </aside>
    )
}