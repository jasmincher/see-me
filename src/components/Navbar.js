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

import { withRouter } from 'react-router'


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


    scrollToAbout() {
        scroller.scrollTo('about-container', {
          duration: 1000,
          delay: 100,
          smooth: 'easeInOutQuart'
        })
      }

      scrollToHome() {
        scroller.scrollTo('home-container', {
          duration: 1000,
          delay: 100,
          smooth: 'easeInOutQuart'
        })
      }


     
      
      render() {

        const { location } = this.props;
        const navbarColor = location.pathname === '/signup' ? {background: 'black'} : { background: 'transparent', position: 'fixed' }


        return (
            <Navigation dark expand="md" style={navbarColor}>
                <NavbarBrand href="/" style={{padding: '0 20px'}}><h3>SeeMe</h3></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />

                <Collapse isOpen={this.state.isOpen} navbar>


                    <Nav className="ml-auto">



                        <NavItem>
                            <NavLink tag={Link} exact to="/" onClick={() => this.scrollToHome()} className="inactive" activeClassName="active">
                                <h5>Home</h5>
                            </NavLink>

                        </NavItem>


                        <NavItem>
                            <NavLink tag={Link} to="/about" onClick={() => this.scrollToAbout()} className="inactive" activeClassName="active">
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

export default withRouter(Navbar);
