import React from 'react'

export default function Animal(props) {
    return (
        <div>
            <h1>{props.name} is not a {props.species}</h1>
        </div>
    )
}
