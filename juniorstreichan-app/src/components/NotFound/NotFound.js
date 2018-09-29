import React from 'react'
import { Container } from '../Container/Container';
import { Button } from '../Button/Button';
import { reply } from 'react-icons-kit/fa/reply'


export const NotFound = (props) => {

    const { message = 'ERRO 404 / NÃO ENCONTRADO' } = props
    return (
        <div style={{ marginTop: '70px', flexDirection: 'column', color: 'white' }} >

            <Container >
                <h1>{message}</h1>
            </Container>
            <Button label='VOLTAR' bgColor='#9000' icon={reply} onClick={
                ()=>{
                    window.history.go(-1)
                }
            }/>

        </div>
    )

}