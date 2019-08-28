import React from 'react';

const UserInput = ({ onChange, toggle }) => {
    return (
        <div>
            <input type='text' onChange={onChange} />
            <button onClick={toggle}>Show/Hide Names</button>
        </div>
    )
};

export default UserInput;