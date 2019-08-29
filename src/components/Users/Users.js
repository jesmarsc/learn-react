import React from 'react';
import UserOutput from './UserOutput/UserOutput';

const Users = ({ users, onChange, onClick }) => {
    return users.map((user, index) => {
        return (
            <UserOutput key={user.id} onChange={(event) => onChange(index, event)} onClick={() => onClick(index)} name={user.name}/>
        );
    });
}

export default Users;