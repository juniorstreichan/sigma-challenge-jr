import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/img/logo.png'
import { Button } from '../Button/Button';
import { close, bars } from 'react-icons-kit/fa'

import './Navbar.css'
import { CARGO } from '../../config/cargos';
import { EstadoSelecionado, ESTADOS } from '../../config/estados';

export class Navbar extends Component {

    state = {
        hiddenMenu: true
    }

    closeMenu = () => {
        this.state.hiddenMenu = true
    }

    toggleMenu = () => {
        const { hiddenMenu } = this.state;
        const toggle = !hiddenMenu;
        this.setState({
            hiddenMenu: toggle
        });
    };

    render() {
        const { hiddenMenu } = this.state
        return (<div>
            <div className="navbar">
                <Link to="/">
                    <img className='logo' src={logo} alt="Logo" />
                </Link>
                <div className="navbar-container">
                    {/* <select   >
                        <option value={EstadoSelecionado.sigla}>{EstadoSelecionado.nome}</option>
                        {ESTADOS.map((estado) =>
                            (
                                <option value={estado.sigla}>{estado.nome}</option>

                            )
                        )}
                    </select> */}

                    <div className="navbar-item"><NavLink exact to="/" ClassName="active"><small>HOME</small></NavLink></div>
                    <div className="navbar-item"><NavLink to={`/candidatos/${CARGO.presidente}`} ClassName="active"><small>PRESIDENTES</small></NavLink></div>
                    <div className="navbar-item"><NavLink to={`/candidatos/${CARGO.governador}`} ClassName="active"><small>GOVERNADORES</small></NavLink></div>
                    <div className="navbar-item"><NavLink to={`/candidatos/${CARGO.senador}`} ClassName="active"><small>SENADORES</small></NavLink></div>
                    <div className="navbar-item"><NavLink to={`/candidatos/${CARGO.deputadofederal}`} ClassName="active"><small>DEP FEDERAIS</small></NavLink></div>
                    <div className="navbar-item"><NavLink to={`/candidatos/${CARGO.deputadoestadual}`} ClassName="active"><small>DEP ESTADUAIS</small></NavLink></div>

                    {hiddenMenu ? (
                        <div onClick={this.toggleMenu} className="button-menu">
                            <Button bgColor={'#9000'} onClick={this.toggleMenu} color={'blue'} icon={bars} />
                        </div>
                    ) : null}
                </div>
            </div>
            {!hiddenMenu ? (
                <div className='side-nav'>
                    <div    >

                        <div><NavLink exact to="/" ClassName="active"><small>HOME</small></NavLink></div>
                        <div><NavLink exact to={`/candidatos/${CARGO.presidente}`} ClassName="active"><small>PRESIDENTES</small></NavLink></div>
                        <div><NavLink exact to={`/candidatos/${CARGO.governador}`} ClassName="active"><small>GOVERNADORES</small></NavLink></div>
                        <div><NavLink exact to={`/candidatos/${CARGO.senador}`} ClassName="active"><small>SENADORES</small></NavLink></div>
                        <div><NavLink exact to={`/candidatos/${CARGO.deputadofederal}`} ClassName="active"><small>DEP FEDERAIS</small></NavLink></div>
                        <div><NavLink exact to={`/candidatos/${CARGO.deputadoestadual}`} ClassName="active"><small>DEP ESTADUAIS</small></NavLink></div>


                        <Button height='50px' textSize={50} bgColor={'#9000'} color={'blue'} onClick={this.toggleMenu} icon={close} />
                    </div>
                </div>
            ) : null}
        </div>
        )
    }
}

export default Navbar
