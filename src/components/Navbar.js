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
import { scroller} from 'react-scroll'


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




    scrollTo() {
        scroller.scrollTo('about-container', {
          duration: 1000,
          delay: 100,
          smooth: 'easeInOutQuart'
        })
      }



    render() {
        return (
            <Navigation dark expand="md">
                <NavbarBrand href="/"><h3>SeeMe</h3></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>


                    <Nav className="ml-auto">



                        <NavItem>
                            <NavLink tag={Link} exact to="/" className="inactive" activeClassName="active">
                                <h5>Home</h5>
                            </NavLink>

                        </NavItem>


                        <NavItem>
                            <NavLink tag={Link} to="/about" onClick={() => this.scrollTo()} className="inactive" activeClassName="active">
                                <h5>About</h5>
                            </NavLink>
                        </NavItem>



                        <NavItem>
                            <NavLink tag={Link} to="/signup" className="inactive" activeClassName="active">
                                <h5>Signup</h5>
                            </NavLink>
                        </NavItem>


                    </Nav>
                </Collapse>
            </Navigation>

        )
    }
}

export default Navbar;
