import React from 'react'

const DisplayData = (props) => {
    return (
        <div>
            <p>
                The Person name is : {props.name}
            </p>
            <p>
                Age is : {props.age}
            </p>
        </div>
    )
}

export default DisplayData
