import React, { Component } from 'react';
import { CARGO } from '../../config/cargos';
import { getPresidenteById, getCandidatoById } from '../../services/CandidatoService';
import {  Loading,   Button, Modal } from '../../components';
import { CardDetalhesCandidato } from '../../components/Card/CardDetalhesCandidato';

class DetalhesCandidato extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            cargo: {},
            partido: {},
            vices: [{}],
            emails: [],
            bens: [{}],
            sites: []
        }
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    componentDidUpdate() {
        const cargo = this.props.match.params.cargo
        const id = this.props.match.params.id
        if (this.cargoParametro !== cargo || this.idParametro !== id) {
            this.cargoParametro = cargo
            this.idParametro = id
            this.loadData()
        }
    }


    componentDidMount() {

        const cargo = this.props.match.params.cargo
        const id = this.props.match.params.id
        console.log(cargo, id);
        this.cargoParametro = cargo
        this.idParametro = id
        this.loadData()
    }



    loadData = () => {

        this.setState({ ...{} })
        window.scrollTo(0, 0)

        if (this.cargoParametro === CARGO.presidente) {

            getPresidenteById(this.idParametro).then(dados => {
                console.log(dados)

                this.setState(dados)
            })

            return
        }

        if (
            this.cargoParametro === CARGO.governador ||
            this.cargoParametro === CARGO.senador ||
            this.cargoParametro === CARGO.deputadofederal ||
            this.cargoParametro === CARGO.deputadoestadual
        ) {

            getCandidatoById(this.idParametro).then(dados => {
                console.log(dados)

                this.setState(dados)
            })

            return
        }
        this.props.history.push("/")

    }





    render() {
        const candidato = this.state
        const { showModal } = this.state
        if (candidato.nomeCompleto) {

            return (

                <div>
                    {candidato.bens.length > 0 ? (
                        <div>
                            <Button width='100%' label={`BENS DECLARADOS ${candidato.descricaoSexo === 'FEM.' ? 'PELA CANDIDATA' :'PELO CANDIDATO'}`} onClick={this.toggleModal} />
                            <Modal closeBgClick show={showModal} handleClose={this.toggleModal} >
                                <h3 style={{textAlign:'center'}} >Bens declarados por {candidato.nomeUrna}</h3>
                                <div style={{ padding: '2%', height: '200px', width: '80%', overflow: 'auto', marginBottom: '20px' }} >

                                    <ul style={{ listStyleType: 'none' }}>  {candidato.bens.map((bem, index) => {

                                        return (
                                            <li key={index}>
                                                <div>
                                                    <p>{bem.descricao}</p>
                                                    <small>{bem.descricaoDeTipoDeBem}<b>, Valor: {bem.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></small>
                                                </div>
                                                <hr />
                                            </li>


                                        )
                                    })}
                                    </ul>

                                </div>
                                <div >
                                    <h5>Quantidade de bens:{candidato.bens.length}</h5>
                                    <h5>Valor: {candidato.totalDeBens.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
                         
                                </div>
                               
                            </Modal>
                        </div>

                    ) : (<p>NENHUM BEM DECLARADO</p>)}
                    <CardDetalhesCandidato candidato={candidato} />


                </div>
            );
        }

        return (
            <Loading message='CARREGANDO DADOS DO TSE...' />
        )
    }

}

export default DetalhesCandidato;