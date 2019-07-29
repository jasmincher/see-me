import React from 'react';
import '../css/Home.css'
import About from './About';
import { Col } from 'reactstrap'



class Home extends React.Component {

    render() {
        return (

            <div className="main-container">
                <div id="home-container">

                    <p className="home-title"> Welcome to SeeMe </p>


                    <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                        <p className="home-info">
                            A place where you can connect to therapists and sponsors whenever in crisis. 24/7 you'll be able to contact and meet up with them.
                        </p>
                    </Col>

                </div>

                <div name="about-container">
                    <About />
                </div>

            </div>









        );
    }
}

export default Home;