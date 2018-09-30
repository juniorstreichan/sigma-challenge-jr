import React, { Component } from 'react';
import { CARGO } from '../../config/cargos';
import { getPresidenteById, getCandidatoById } from '../../services/CandidatoService';
import { Container, Card, Loading, CardItem, Button, Modal } from '../../components';
import { CardDetalhesCandidato } from '../../components/Card/CardDetalhesCandidato';

class DetalhesCandidato extends Component {

    constructor(props) {
        super(props)

        var cargoParametro = ''
        var idParametro = ''
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
        if (this.cargoParametro != cargo || this.idParametro != id) {
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
                    {candidato.bens.length > 0 ? (<Button width='100%' label='BENS DECLARADOS PELO CANDIDATO' onClick={this.toggleModal} />) : (<p>NENHUM BEM DECLARADO</p>)}
                    <CardDetalhesCandidato candidato={candidato} />
                    <Modal closeBgClick show={showModal} handleClose={this.toggleModal} >
                       <div style={{padding:'5%', maxHeight:'500px',overflow:'auto'}} >
TESTE
                       </div>
                    </Modal>

                </div>
            );
        }

        return (
            <Loading />
        )
    }

}

export default DetalhesCandidato;