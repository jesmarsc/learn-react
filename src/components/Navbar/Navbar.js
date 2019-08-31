import React from 'react';
import { Container, Menu } from 'semantic-ui-react'

const Navbar = () => (
    <Menu inverted secondary borderless size='huge'>
        <Container>
            <Menu.Item icon={{ name: 'home', size: 'large' }} as='a' header />

            <Menu.Menu position='right'>
                <Menu.Item as="a" name="projects">
                    Projects
                        </Menu.Item>
                <Menu.Item as="a" name="about">
                    About
                        </Menu.Item>
                <Menu.Item as="a" name="contact">
                    Contact
                        </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
);

export default Navbar;