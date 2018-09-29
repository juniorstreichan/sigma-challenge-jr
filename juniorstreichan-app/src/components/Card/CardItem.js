import React from 'react'

import { Card } from "./Card";

export const CardItem = (props) => {
    return (
        <Card minWidth={'100px'} minHeight={'50px'} {...props} >
            {props.children}
        </Card>
    )
}
