import React from 'react';
import { Row, Col, Container } from 'reactstrap'
import Form from '../components/Form'
import '../css/Signup.css'

const signin = [{ title: 'Username', id: 'username', placeholder: "Username" }, { title: 'Password', id: 'password', placeholder: '******', type: 'password' }];



function Signin() {
  return (


    <div>

      <Row style={{margin: '0', width: '100%'}}>


        <Col lg="8" style={{padding: '0'}}>
          <div className="side-image">
            Make an account to get a better match
          </div>
        </Col>


        <Col lg="4" style={{padding: '40px 40px 10px 40px'}} >

          {/* add condition to render form depending on if it is signup or sign */}
          <Form title="Sign In" labels={signin}  button="Sign In" to="/signup" question="Don't have an account?" linkto="Sign Up" />
        </Col>

      </Row>
    </div>


  );
}

export default Signin;