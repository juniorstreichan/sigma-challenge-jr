import React, { Component } from 'react';
import { Button } from '../index';
import { Link } from 'react-router-dom'
import './Footer.css'


class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="content">
                    <Link to='/'>
                        <Button margin='10px' bgColor={'#800'} padding='10px' label={'HOME'} />
                    </Link>
                    
                    <Link to='/personagens'>
                        <Button margin='10px' bgColor={'#800'} padding='10px' label={'PERSONAGENS'} />
                    </Link>
                    
                    <Link to='/contato'>
                        <Button margin='10px' bgColor={'#800'} label={'CONTATO'} />
                    </Link>
                </div>
            </footer>
        );
    }
}

export default Footer;