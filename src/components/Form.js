import React from 'react';
import { Button, Form as SignupForm, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import '../css/Form.css'



class Form extends React.Component {

    renderLabels(labels) {

        return (
            /* We mapped through the labels that are passed in props, so we can  dynamically create labels */
            labels.map(i =>

                <FormGroup row>
                    <Label className="form-label">{i.title}</Label>

                    <Input className="form-input" type={i.type ? i.type : "text"} id={i.id} placeholder={i.placeholder} />
           
                </FormGroup>
            )
        )

    }


    render() {
        return (

            <SignupForm>
                <h1 className="form-title"> {this.props.title}</h1> 

                {this.renderLabels(this.props.labels)}

                <Row>

                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />
                            I agree to the Terms of User
                    </Label>
                    </FormGroup>
                </Row>

                <Row>


                    <Button size="lg" className="signup-button">Sign Up</Button>
                    <Button size="lg" className="signin-button">Sign In</Button>


                </Row>

            </SignupForm>
        );
    }
}

export default Form;