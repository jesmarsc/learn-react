import React from 'react';
import UserCard from './UserCard/UserCard';
import { Card, Container } from 'semantic-ui-react';

const Users = ({ users, onChange, onClick }) => (
    <Container>
        <Card.Group centered stackable>
            {users.map((user, index) => {
                return (
                    <UserCard
                        key={user.id}
                        onChange={(event) => onChange(index, event)}
                        onClick={() => onClick(index)} name={user.name} />
                )
            })}
        </Card.Group>
    </Container>
)
        
export default Users;