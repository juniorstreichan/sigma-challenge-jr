import React, { Component } from 'react'
import Spinner from 'react-spinkit'
import { Container } from '../'

export const Loading = (props) => {
    const { message } = props
    return (
        <div style={{ color: 'white', ...props }}>
            <Container>
                <Spinner name="cube-grid" color='blue' />
                <Spinner name="cube-grid" color='white' />
                <Spinner name="cube-grid" color='green' />
                <Spinner name="cube-grid" color='yellow' />

            </Container>
            <Container>
                <h4> {message || 'loading...'}</h4>
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
