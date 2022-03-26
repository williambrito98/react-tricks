import React from 'react'

const nota = (props) => {
    return (
        <ul>
            {['a','b', 'c', 'd'].map(item => 
                <li>{item}</li>
            )}
        </ul>
    )
}


export default nota