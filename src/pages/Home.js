import React from 'react';
import '../css/Home.css'
import About from './About';
import { Col, Button } from 'reactstrap'



class Home extends React.Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js";
        script.async = true;
        script.htmlFor = "https://landbot.io/u/H-174683-NSTNWKIEPS3Z3RCV/index.html"

        document.body.appendChild(script);
    }


    render() {

        return (

            <div className="main-container">
                <div id="home-container">

                    <p className="home-title"> Welcome to SeeMe </p>


                    <Col lg={{ size: 6, offset: 3 }} md={{ size: 8, offset: 2 }}>
                        <p className="home-info">
                            A place where you can connect to therapists and sponsors whenever in crisis. 24/7 you'll be able to contact and meet up with them.
                        </p>

                        <Button color="primary">SEARCH NOW</Button>
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