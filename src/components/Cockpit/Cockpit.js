import React from 'react';
import { Header, Button, Container, Segment, Grid } from 'semantic-ui-react';
import Lottie from 'react-lottie';
import animationData from '../../assets/office.json'

const Cockpit = ({ showUsers, onClick }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <React.Fragment>
            <Button active={showUsers} onClick={onClick}>Toggle Users</Button>

            <Segment
                inverted
                vertical
                style={{
                    height: '100vh'
                }}>
                <Container>
                    <Grid stackable verticalAlign='middle' columns={2} style={{ height: '100vh' }}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header
                                    as='h1'
                                    content='Jesmar.'
                                    inverted style={{
                                        fontSize: '8vw',
                                        fontFamily: 'Maven Pro',
                                        color: '#ffffff'
                                    }} />
                                <Button inverted>
                                    View Portfolio
                            </Button>
                                <Button inverted color='youtube' icon='github' content='Github' />
                                <Button inverted color='linkedin' icon='linkedin' content='Linkedin' />
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Lottie options={defaultOptions} height='auto' width='auto' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </React.Fragment>
    )
}

/*
return (
<div>
    <Header as='h1' icon={{ name: 'users', circular: true }} content='Users' />
    <Container text>
        <p>The warming candidate trails into a whale. The displayed ego coasts past its arriving snag. The faulty worst matures. A razor dusts the postcard over the incapable residence.</p>
    </Container>
    <Button active={showUsers} onClick={onClick}>Toggle Users</Button>
</div>
);
*/

export default Cockpit;