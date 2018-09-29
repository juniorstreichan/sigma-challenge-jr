import React from 'react'
import { Card } from './Card';
import { CardItem } from './CardItem';
import { Container } from '../Container/Container';
import {Link} from 'react-router-dom'

const randomColor = () => {
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {

        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor
}

export const CardCandidato = ({ candidato , link }) => {
    const { nomeUrna, numero, cargo, partido, nomeColigacao  } = candidato
    return (
        <div style={{ textShadow: ' 2px 2px 2px #000', color: '#FFF', wordWrap: 'break-word' }} >
            <Card bgColor={randomColor()} borderRadius='3px'>

                <p>{cargo.nome}</p>
                <h3> <strong>{nomeUrna}</strong></h3>
                <p>Número</p>
                <h1>{numero}</h1>
                <p>Partido: {partido.sigla}</p>
<Link to={`/candidato/`}></Link>

            </Card>
        </div>
    )

} 