import React, { Component } from 'react';
import { Button } from '../index';
import { Link } from 'react-router-dom'
import './Footer.css'
import { CARGO } from '../../config/cargos';


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="content">
                    <div className="box">
                        ELEIÇOES 2018
                    </div>
                    <div className="box">
                        <Link to='/'>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'HOME'} />
                        </Link>
                        <Link to={`/candidatos/${CARGO.presidente}`}>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'PRESIDENTES'} />
                        </Link>
                        <Link to={`/candidatos/${CARGO.governador}`}>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'GOVERNADORES'} />
                        </Link>
                    </div>
                    <div className="box">
                        <Link to={`/candidatos/${CARGO.senador}`}>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'SENADORES'} />
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadofederal}`}>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'DEPUTADOS FEDERAIS'} />
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadoestadual}`}>
                            <Button margin='10px' bgColor={'#9000'} padding='10px' label={'DEPUTADOS ESTADUAIS'} />
                        </Link>
                    </div>

                </div>
            </footer>
        );
    }
}

export default Footer;