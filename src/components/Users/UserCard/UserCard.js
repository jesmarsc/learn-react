import React from 'react';
import { Input, Card, Image, Button } from 'semantic-ui-react';

const UserCard = ({ onChange, onClick, name }) => {
    return (
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header content={name} />
                <Card.Meta content='User' />
                <Card.Description>Welcome to the NetherWorld, {name}!</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Input fluid placeholder="Enter Name..." onChange={onChange} />
            </Card.Content>
            <Card.Content textAlign='center' extra>
                    <Button floated='left' color='green' content='Source Code'/>
                    <Button floated='right' onClick={onClick} color='red' content='Delete'/>
            </Card.Content>
        </Card>
    )
}

export default UserCard;