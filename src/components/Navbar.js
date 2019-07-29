import {
    Collapse,
    Navbar as Navigation,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand
} from 'reactstrap';

import '../css/Navbar.css'
import React from 'react';
import { NavLink as Link } from 'react-router-dom';


class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navigation light color="light" expand="md">
                <NavbarBrand href="/">SeeMe</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>


                    <Nav className="mx-auto">



                        <NavItem>
                            <NavLink tag={Link} to="/" className="inactive" activeClassName="active">
                                <h3>Home</h3>
                            </NavLink>

                        </NavItem>


                        <NavItem>
                            <NavLink tag={Link} exact to="/about" className="inactive" activeClassName="active">
                                <h3>About</h3>
                            </NavLink>
                        </NavItem>






                        <NavItem>
                            <NavLink tag={Link} to="/signup" className="inactive" activeClassName="active">
                                <h3>Signup</h3>
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navigation>

        )
    }
}

export default Navbar;
