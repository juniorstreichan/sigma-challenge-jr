import React from 'react'
import { Card } from './Card';
import './CardDetalhesCandidato.css'
import { Container } from '../Container/Container';
import { Icon } from 'react-icons-kit';
import { checkCircleO } from 'react-icons-kit/fa/checkCircleO'
import { timesCircleO } from 'react-icons-kit/fa/timesCircleO'
import { CardItem } from './CardItem';
import avatar from '../../assets/img/avatar.png'
import { Button } from '../Button/Button';

var showModal = false

export const CardDetalhesCandidato = ({ candidato }) => {


    const {
        bens,
        cargo,
        fotoUrl,
        nomeCompleto,
        nomeUrna,
        numero,
        descricaoSituacao,
        ufCandidatura,
        vices,
        emails,
        sites = [],
        nomeColigacao,
        composicaoColigacao,
        partido } = candidato

    if (candidato) {

        var showSites = false
        var showBens = false
        return (
            <Card>
                <main>
                    Candidatura: <b>{cargo.nome} / {ufCandidatura}</b> {descricaoSituacao === 'Deferido'
                        ? (<span className='deferido' ><Icon icon={checkCircleO} size={22} /></span>)
                        : (<span className='indeferido'><Icon icon={timesCircleO} size={22} /></span>)} <small>{descricaoSituacao}</small>
                    <Container>

                        <Container>
                            <h3 className='text-mobile'> {nomeUrna} </h3>
                            <div className='wrapper-img'>
                                <img src={fotoUrl || avatar} className='img-candidato' />
                                <div>
                                    Contato
                                {emails ? (
                                        emails.map(
                                            (email, index) => {
                                                return (
                                                    <div>
                                                        <a href={`mailto:${email}`}>{email}</a>
                                                    </div>
                                                )
                                            }
                                        )
                                    ) : ''}


                                    { sites && sites.length >0  ? (
                                        <div>
                                            Sites
                                   {sites.map(
                                                (site, index) => {
                                                    return (
                                                        <div>
                                                            <small><a target='_blank' href={site}>{site.substring(0,80)}</a></small>
                                                        </div>
                                                    )
                                                }
                                            )}

                                        </div>) : null}


                                </div>
                            </div>
                        </Container>
                        <article>
                            <h1>{nomeCompleto}</h1>
                            {nomeCompleto !== nomeUrna ? (<h3> {nomeUrna} </h3>) : null}

                            <h3>Número : {numero}</h3>
                            <h4>Filiação partidária : {partido.nome} / {partido.sigla}</h4>
                            <h4>Coligação : {nomeColigacao} </h4>
                        
                            {vices ? (
                                <div>
                                    <p><b>Vices</b></p>
                                    {vices.map((vice, index) => {
                                        return (
                                            <div key={index}>
                                                <img src={vice.urlFoto || avatar} className='img-vice' />
                                                <p>{vice.nm_URNA}</p>
                                            </div>
                                        )
                                    })}
                                </div>

                            ) : null}

                        </article>

                    </Container>
                </main>
            </Card>
        )
    }


}