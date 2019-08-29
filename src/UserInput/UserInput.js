import React from 'react';

const UserInput = ({ onChange }) => {
    return (
        <div>
            <input type='text' onChange={onChange} />
        </div>
    )
};

export default UserInput;