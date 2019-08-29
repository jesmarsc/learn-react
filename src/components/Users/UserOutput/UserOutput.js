import React from 'react';
import "./UserOutput.css"

const UserOutput = ({ onChange, onClick, name }) => {
    return (
        <div className="UserOutput">
            <input type="text" onChange={onChange} value={name} />
            <p onClick={onClick}>Greetings from the NetherWorld, {name}!</p>
        </div>
    )
}

export default UserOutput;