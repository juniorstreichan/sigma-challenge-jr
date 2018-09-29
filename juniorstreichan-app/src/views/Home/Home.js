import React, { Component } from 'react';
import { Card, Container, CardItem } from '../../components'
import { university } from 'react-icons-kit/fa/university'
import { bookOpen } from 'react-icons-kit/feather/bookOpen'
import { Icon } from 'react-icons-kit'
import { Link } from 'react-router-dom'
import { CARGO } from '../../config/cargos';

class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {
        const styles = {
            display: 'flex',
            flexDirection: 'column'
        }
        return (
            <Container>
                <Card width='100%' bgColor={'#f5f12a'} >
                    <div style={styles}>
                        <h1>ELEIÇOES 2018</h1>
                        <h2>CONHEÇA OS CANDIDATOS</h2>
                    </div>
                    <Link to={`/candidatos/${CARGO.presidente}`} >
                        <CardItem>
                            <h4><Icon icon={university} size={16} />
                                Governo Federal
                                    </h4>
                        </CardItem>
                    </Link>
                    <Container >
                        <Link to={`/candidatos/${CARGO.governador}`} >
                            <CardItem>
                                <h4><Icon icon={university} size={16} />
                                    Governo Estadual
                            </h4>
                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.senador}`} >
                            <CardItem>
                                <h4><Icon icon={bookOpen} size={16} />
                                    Senado Federal
                            </h4>

                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadofederal}`} >
                            <CardItem>
                                <h4><Icon icon={bookOpen} size={16} />
                                    Deputado Federal
                            </h4>
                            </CardItem>
                        </Link>
                        <Link to={`/candidatos/${CARGO.deputadoestadual}`} >
                            <CardItem>

                                <h4><Icon icon={university} size={16} />
                                    Deputado Estadual
                            </h4>
                            </CardItem>
                        </Link>

                    </Container>
                </Card>

            </Container>
        );
    }
}

export default Home;