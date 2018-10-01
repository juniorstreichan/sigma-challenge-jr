import React from 'react'
import './Container.css'

export const Container = (props) => {
    return (
        <div style={{...props}} className='container'>
            {props.children}
        </div>
    )
}

