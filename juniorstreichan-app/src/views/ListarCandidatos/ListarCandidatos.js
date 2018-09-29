import React, { Component } from 'react'
import { Loading, Container } from '../../components'
import {
    getPresidentes,
    getGovernadores,
    getSenadores,
    getDeputadosFederais,
    getDeputadosEstaduais
} from '../../services/CandidatoService'
import { CARGO } from '../../config/cargos';
import { CardCandidato } from '../../components/Card/CardCandidato';


class ListarCandidatos extends Component {



    constructor(props) {
        super(props)

        var cargoParametro = ''
        this.state = {
            unidadeEleitoral: {},
            cargo: {},
            candidatos: []
        }
    }

    componentDidUpdate() {
        const cargo = this.props.match.params.cargo
        if (this.cargoParametro !== cargo) {
            this.cargoParametro = cargo
            this.loadData()
        }
    }


    componentDidMount() {

        const cargo = this.props.match.params.cargo
        console.log(cargo);
        this.cargoParametro = cargo
        this.loadData()
    }

    loadData = () => {

        this.setState({ candidatos:[],cargo:{},unidadeEleitoral:{}})
        switch (this.cargoParametro) {
            case CARGO.presidente:
                getPresidentes().then(dados => {
                    this.setState(dados)
                })
                break
            case CARGO.governador:
                getGovernadores().then(dados => {
                    this.setState(dados)
                })
                break
            case CARGO.senador:
                getSenadores().then(dados => {
                    this.setState(dados)
                })
                break
            case CARGO.deputadofederal:
                getDeputadosFederais().then(dados => {
                    this.setState(dados)
                })
                break

            case CARGO.deputadoestadual:
                getDeputadosEstaduais().then(dados => {
                    this.setState(dados)
                })
                break

            default:

                this.props.history.push("/")

                break
        }


    }

    render() {

        const { candidatos } = this.state
        if (candidatos.length > 0) {

            return (
                <Container>
                    {candidatos.map((candidato, index) => (<div key={candidato.id}><CardCandidato candidato={candidato} /></div>))}
                </Container>
            );
        }
        return (
            <Loading message='CARREGANDO DADOS DO TSE...' />
        );
    }
}

export default ListarCandidatos;