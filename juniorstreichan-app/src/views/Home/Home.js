import React, { Component } from 'react';
import { Card, Container, CardItem, Button, Modal } from '../../components'
import { university } from 'react-icons-kit/fa/university'
import { bookOpen } from 'react-icons-kit/feather/bookOpen'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { CARGO } from '../../config/cargos';
import logo from '../../assets/img/logo.png'
import gif from '../../assets/gifs/navigation.gif'
class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    state = {
        showModal: false
    }

    render() {
        const styles = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            margin: '100px',
            marginTop:'40px',
            marginBottom:'20px',
            color: 'blue'

        }

        const stylesImg = {
            maxWidth: '300px'
        }

        const stylesText = {
            textAlign: 'center',
            padding: '2%',
            maxWidth: '300px'
        }
        const { showModal } = this.state
        return (
            <Container >
                <Card flexDirection='row' justifyContent='center' width='100%' bgColor={'#f5f12a'} >
                    <Container >
                        <div style={styles}>
                            <img src={logo} style={stylesImg} alt='ELEIÇÕES 2018' />
                            <h1>PORTAL DEMOCRÁTICO</h1>
                            <div style={stylesText} >
                                <p>
                                    <b>
                                        Este portal tem o objetivo de informar aos eleitores sobre os candidatos que participam das eleições de 2018. {window.innerWidth > 926 ? 'Ao lado' : 'Abaixo'} você pode selecionar uma das opções de candidatos para conferir como está a candidatura e ver mais informações. <br />
                                    </b>
                                </p>
                                <p>
                                    <b>
                                        Todos os dados referentes aos candidatos são providos pelo TSE (Tribunal Superior Eleitoral)
                              </b>
                                </p>
                            </div>
                            <h3>CONHEÇA OS CANDIDATOS</h3>
                        </div>

                    </Container>
                    <Container flexDirection='column' justifyContent='center'>
                        <Link to={`/candidatos/${CARGO.presidente}`} >
                            <CardItem>
                                <h4><Icon icon={university} size={20} />
                                    Governo Federal
                                    </h4>
                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.governador}`} >
                            <CardItem>
                                <h4><Icon icon={university} size={20} />
                                    Governo Estadual
                            </h4>
                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.senador}`} >
                            <CardItem>
                                <h4><Icon icon={bookOpen} size={20} />
                                    Senado Federal
                            </h4>

                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadofederal}`} >
                            <CardItem>
                                <h4><Icon icon={bookOpen} size={20} />
                                    Deputado Federal
                            </h4>
                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadoestadual}`} >
                            <CardItem>

                                <h4><Icon icon={bookOpen} size={20} />
                                    Deputado Estadual
                            </h4>
                            </CardItem>
                        </Link>

                    </Container>

                </Card>
                <p style={{ color: 'white' }}>
                    <b>  Caso exista alguma dúvida, dê uma olhada no</b> <Button onClick={() => {
                        this.setState({ showModal: !showModal })
                    }} label='TUTORIAL' />

                </p>
                <Modal closeBgClick show={showModal} handleClose={() => {
                    this.setState({ showModal: !showModal })
                }}>
                    <div>
                        <img src={gif} style={{width:'100%' , left:'0'}} alt='ELEIÇÕES 2018' />
                    </div>
                </Modal>
            </Container>
        );
    }
}

export default Home;