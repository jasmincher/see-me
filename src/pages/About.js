import React from 'react';
import { Col, Row, Container } from 'reactstrap'
import '../css/About.css'

function About() {
  return (
    <Container className="about-container">


      <Row style={{marginBottom: '50px'}}>
        <Col lg="12">

          <h1>Why choose SeeMe?</h1>
          <p>Leading Industry in helping others when in crisis</p>
        </Col>
      </Row>


      <Row>
        <Col lg="3">
          <div className="icon">
            <i className="fas fa-user-friends fa-3x" ></i>
          </div>

          <h5> Perfect Matching </h5>
          <p> Our team are experts in matching you with the right person.</p>
        </Col>

        <Col lg="3">
          <div className="icon">
            <i className="far fa-handshake fa-3x"></i>
          </div>

          <h5> Recognised For Excellence </h5>
          <p> We've been awarded for our high rate of customer satisfaction.</p>
        </Col>

        <Col lg="3">
          <div className="icon">
            <i class="far fa-clock fa-3x"></i>
          </div>

          <h5> Fast Matching </h5>
          <p> Almost immidiate matches with therapists and sponsors.</p>
        </Col>

        <Col lg="3">
          <div className="icon">
          <i class="fas fa-globe fa-3x"></i>
          </div>

          <h5> Support 24/7 </h5>
          <p> We are avaiable all day, for us there is no such thing as a break. </p>
        </Col>
      </Row>

    </Container>

  );
}

export default About;