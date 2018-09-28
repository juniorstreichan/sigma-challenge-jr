import React, { Component } from 'react'
import './Container.css'

export const Container = (props) => {
    return (
        <div className='container'>
            {props.children}
        </div>
    )
}

