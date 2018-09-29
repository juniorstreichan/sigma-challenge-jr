import React, { Component } from 'react'
import Spinner from 'react-spinkit'
import { Container } from '../'

export const Loading = (props) => {
    return (
        <div style={{ color: 'white' }}>
            <Container>
                <Spinner name="cube-grid" color='blue' />
                <Spinner name="cube-grid" color='white' />
                <Spinner name="cube-grid" color='green' />
                <Spinner name="cube-grid" color='yellow' />

            </Container>
            <Container>
                <h4> AGUARDE ...</h4>
            </Container>

            <Container>
                <Spinner name="cube-grid" color='green' />
                <Spinner name="cube-grid" color='yellow' />
                <Spinner name="cube-grid" color='blue' />
                <Spinner name="cube-grid" color='white' />
            </Container>
        </div>
    )
}
