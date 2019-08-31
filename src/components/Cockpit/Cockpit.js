import React from 'react';
import { Header, Button, Container, Segment, Grid } from 'semantic-ui-react';
import Lottie from 'react-lottie';
import animationData from '../../assets/programming.json'

const Cockpit = ({ showUsers, onClick }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <React.Fragment>
            <Button active={showUsers} onClick={onClick} content='Toggle Users'/>
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
                                    inverted
                                    style={{
                                        fontSize: '8vw',
                                        fontFamily: 'Maven Pro',
                                        color: '#ffffff',
                                        lineHeight: '1em'
                                    }} >
                                    Jesmar.
                                    <Header.Subheader style={{
                                        fontSize: '2vw',
                                        fontFamily: 'Maven Pro',
                                        color: '#ffffff'
                                    }}>
                                        Software Engineer.
                                    </Header.Subheader>
                                </Header>
                                <Button inverted> View Portfolio </Button>
                                <Button inverted color='youtube' icon='github' content='Github' />
                                <Button inverted color='linkedin' icon='linkedin' content='Linkedin' />
                            </Grid.Column>
                            <Grid.Column textAlign='center'>
                                <Lottie isClickToPauseDisabled={true} options={defaultOptions} height='auto' width='auto' />
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