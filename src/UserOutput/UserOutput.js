import React from 'react';

const UserOutput = ({ name }) => {
    return (
        <div>
            <p>Greetings {name},</p>
            <p>from the NetherWorld!</p>
        </div>
    )
}

export default UserOutput;