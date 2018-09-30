import React, { Component } from 'react'
import { Loading, Container, CardItem, Card } from '../../components'
import {
    getPresidentes,
    getGovernadores,
    getSenadores,
    getDeputadosFederais,
    getDeputadosEstaduais
} from '../../services/CandidatoService'
import { CARGO } from '../../config/cargos';
import { CardCandidato } from '../../components/Card/CardCandidato';
import './ListarCandidatos.css'
import { Icon } from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search'


class ListarCandidatos extends Component {



    constructor(props) {
        super(props)

        var cargoParametro = ''
        this.state = {
            unidadeEleitoral: {},
            cargo: {},
            candidatos: [],
            candidatosView: []
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
        // console.log(cargo);
        this.cargoParametro = cargo
        this.loadData()

    }

    loadData = () => {

        window.scrollTo(0, 0)
        this.setState({ candidatos: [], cargo: {}, unidadeEleitoral: {} })
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

        this.filterCandidatos()

    }

    filterCandidatos = () => {
        const input = document.getElementById('search')
        const { candidatos } = this.state

        if (input) {
            const query = input.value
            if (query) {
                const candidatosFiltrados = candidatos.filter((candidato) => {
                    return candidato.nomeUrna == 'CABO DACIOLO'
                })
                // console.log(candidatosFiltrados);

                this.setState({
                    candidatosView: candidatosFiltrados
                })
                return
            }
            this.setState({
                candidatosView: candidatos
            })
        }




    }

    render() {

        const { candidatos, unidadeEleitoral, cargo, candidatosView } = this.state

        if (candidatos.length > 0) {
            return (
                <div>
                    <Container>
                        <div className='searchbar'>

                            <Card padding='5px' minWidth={'100px'} minHeight={'20px'} maxHeight={'80px'} margin='0'>
                                <div >
                                    <p><b>{candidatos.length} Candidatos a {cargo.nome} no {unidadeEleitoral.nome}</b></p>
                                    <label htmlFor=""><b>Filtrar por </b></label>
                                    <Icon size={20} icon={search} />
                                    <input onKeyUp={this.filterCandidatos} type="text" id='search' placeholder='nome, numero ou partido' />


                                </div>
                            </Card>
                        </div>
                    </Container>
                    <Container marginTop='110px' >

                        {candidatosView.map((candidato, index) => (<div key={candidato.id}><CardCandidato candidato={candidato} link={`/candidato/${this.cargoParametro}/${candidato.id}`} /></div>))}
                    </Container>
                </div>
            );
        }
        return (
            <Loading message='CARREGANDO DADOS DO TSE...' />
        );
    }
}

export default ListarCandidatos;