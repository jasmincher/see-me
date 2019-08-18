import React from 'react';
import { Row, Col, Container } from 'reactstrap'
import Form from '../components/Form'
import '../css/Signup.css'

const Labels = [{ title: 'Full Name', id: 'name', placeholder: 'Name' }, { title: 'Email', id: 'email', placeholder: 'Email address', type: 'email' }, { title: 'Username', id: 'username', placeholder: "Username" }, { title: 'Password', id: 'password', placeholder: '******', type: 'password' }, { title: 'Repeat Password', id: 'repassword', placeholder: '******' }];


function Signup() {
  return (


    <div>

      <Row style={{margin: '0', width: '100%'}}>


        <Col lg="8" style={{padding: '0'}}>
          <div className="side-image">
            Make an account to get a better match
          </div>
        </Col>


        <Col lg="4" style={{padding: '40px'}} >
          <Form title="Sign Up" labels={Labels} />
        </Col>

      </Row>
    </div>


  );
}

export default Signup;