import React from 'react';
import "./UserOutput.css";
import { Input } from 'semantic-ui-react';

const UserOutput = ({ onChange, onClick, name }) => {
    return (
        <div className="UserOutput">
            <Input fluid placeholder="Enter Name..." onChange={onChange} />
            <p onClick={onClick}>Greetings from the NetherWorld, {name}!</p>
        </div>
    )
}

export default UserOutput;