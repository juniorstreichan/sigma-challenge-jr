import React, { Component } from 'react';
import { CARGO } from '../../config/cargos';
import { getPresidenteById, getCandidatoById } from '../../services/CandidatoService';

class DetalhesCandidato extends Component {

    constructor(props) {
        super(props)

        var cargoParametro = ''
        var idParametro = ''
        this.state = {
            bens: [{}],
            cargo: {},
            fotoUrl: '',
            nomeCompleto: '',
            numero:'',
            descricaoSituacao: '',
            partido:''
        }
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
        return (
            <div>
                {JSON.stringify(candidato)}
            </div>
        );
    }


}

export default DetalhesCandidato;