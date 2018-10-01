import React, { Component } from 'react'
import { Loading, Container, Card, Button } from '../../components'
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
import { search, close } from 'react-icons-kit/fa'


class ListarCandidatos extends Component {



    constructor(props) {
        super(props)

        this.state = {
            showSearch: false,
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

        if (window.innerWidth >= 600) {
            this.setState({ showSearch: true })
        }

        const cargo = this.props.match.params.cargo
        this.cargoParametro = cargo
        this.loadData()

    }

    toogleSearch = () => {
        const { showSearch } = this.state
        if (!showSearch) {
            document.getElementById('search').value = ''
            this.filterCandidatos()
        }
        this.setState({
            showSearch: !showSearch
        })
    }

    loadState = (dados) => {
        const { candidatos, cargo, unidadeEleitoral } = dados
        const candidatosView = candidatos
        this.setState({ candidatos, cargo, unidadeEleitoral, candidatosView })
    }

    loadData = () => {

        window.scrollTo(0, 0)
        this.setState({ candidatos: [], candidatosView: [], cargo: {}, unidadeEleitoral: {} })
        switch (this.cargoParametro) {
            case CARGO.presidente:
                getPresidentes().then(dados => {
                    this.loadState(dados)
                })
                break
            case CARGO.governador:
                getGovernadores().then(dados => {
                    this.loadState(dados)
                })
                break
            case CARGO.senador:
                getSenadores().then(dados => {
                    this.loadState(dados)
                })
                break
            case CARGO.deputadofederal:
                getDeputadosFederais().then(dados => {
                    this.loadState(dados)
                })
                break

            case CARGO.deputadoestadual:
                getDeputadosEstaduais().then(dados => {
                    this.loadState(dados)
                })
                break

            default:

                this.props.history.push("/")

                break
        }


    }

    filterCandidatos = () => {
        const input = document.getElementById('search')
        const { candidatos } = this.state

        if (input) {
            const query = input.value.toLocaleUpperCase().trim()
            if (query) {
                const candidatosFiltrados = candidatos.filter((candidato) => {
                    if (query.match('[0-9]')) {

                        return candidato.numero.toString().search(query) > -1
                    }
                    return (
                        candidato.nomeUrna.toLocaleUpperCase().search(query) > -1 ||
                        candidato.nomeCompleto.toLocaleUpperCase().search(query) > -1 ||
                        candidato.partido.sigla.toLocaleUpperCase().search(query) > -1
                    )
                })

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

        const { candidatos, unidadeEleitoral, cargo, candidatosView, showSearch } = this.state

        if (candidatos.length > 0) {
            return (
                <div>



                    <div className={!showSearch ? 'hidden' : ''} >

                        <Container>
                            <div className='searchbar'>



                                <Card padding='5px' minWidth={'100px'} minHeight={'20px'} maxHeight={'150px'} margin='0'>
                                    <div >
                                        <p><b>{candidatos.length} Candidatos a {cargo.nome} / {unidadeEleitoral.nome}</b> {candidatosView.length !== candidatos.length ? (<small>{candidatosView.length} {candidatosView.length > 1 ? 'resultados' : 'resultado'}</small>) : null}</p>

                                        <label htmlFor=""><b>Filtrar por </b></label>
                                        <Icon size={20} icon={search} />
                                        <input onChange={this.filterCandidatos} type="text" id='search' placeholder='nome, numero ou partido' />


                                    </div>
                                </Card>


                            </div>
                        </Container>


                    </div>

                    <Container marginTop='110px' >

                        {candidatosView.map((candidato, index) => (<div key={candidato.id}><CardCandidato candidato={candidato} link={`/candidato/${this.cargoParametro}/${candidato.id}`} /></div>))}
                    </Container>
                    <div className='fab'>
                        <Button
                            onClick={this.toogleSearch}
                            icon={showSearch ? close : search}
                            borderRadius='50px'
                            width='50px'
                            height='50px'
                            bgColor={showSearch ? 'red' : 'green'}
                        />
                    </div>
                </div>
            );
        }
        return (
            <Loading message='CARREGANDO DADOS DO TSE...' />
        );
    }
}

export default ListarCandidatos;