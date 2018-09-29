import React, { Component } from 'react'
import { Loading } from '../../components'
import {
    getPresidentes,
    getGovernadores,
    getSenadores,
    getDeputadosFederais,
    getDeputadosEstaduais
} from '../../services/CandidatoService'


class ListarCandidatos extends Component {


    constructor(props) {
        super(props);
        const cargo = ''
        this.state = {
            unidadeEleitoral: {},
            cargo: {},
            candidatos: []
        }
    }

    componentDidUpdate() {
        const cargo = this.props.match.params.cargo
        if (this.cargo !== cargo) {
            this.cargo = cargo
            this.loadData()
        }
    }


    componentDidMount() {
        const cargo = this.props.match.params.cargo
        console.log(cargo);
        this.cargo = cargo
        this.loadData()
    }

    loadData = () => {


        switch (this.cargo) {
            case 'presidente':
                getPresidentes().then(dados => {
                    this.setState(dados)
                })
                break;
            case 'governador':
                getGovernadores().then(dados => {
                    this.setState(dados)
                })
                break;
            case 'senador':
                getSenadores().then(dados => {
                    this.setState(dados)
                })
                break;
            case 'governador':
                getGovernadores().then(dados => {
                    this.setState(dados)
                })
                break;

            default:

                break;
        }


    }

    render() {

        const { candidatos } = this.state
        if (candidatos.length > 0) {

            return (
                <div>
                    {candidatos.map((candidato, index) => (<pre key={index}>{JSON.stringify(candidato)}</pre>))}
                </div>
            );
        }
        return (
            <Loading />
        );
    }
}

export default ListarCandidatos;