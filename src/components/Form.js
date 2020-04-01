import React from "react";
import {
  Form as SignupForm,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import "../css/Form.css";
import { Link } from "react-router-dom";

class Form extends React.Component {
  renderLabels(labels) {
    return (
      /* We mapped through the labels that are passed in props, so we can  dynamically create labels */
      labels.map(i => (
        <FormGroup row>
          <Label className="form-label">{i.title}</Label>

          <Input
            className="form-input"
            type={i.type ? i.type : "text"}
            id={i.id}
            placeholder={i.placeholder}
          />
          <span class="focus-border"></span>
        </FormGroup>
      ))
    );
  }

  render() {
    return (
      <SignupForm>
        <h1 className="form-title"> {this.props.title}</h1>

        {this.renderLabels(this.props.labels)}

        <Row style={{ justifyContent: "center" }}>
          <button id="signup">
            {this.props.button}
            <i
              className="fas fa-long-arrow-alt-right"
              style={{ paddingLeft: "5px" }}
            ></i>
          </button>
        </Row>

        <Row>
          <p>{this.props.question}</p>
          <Link to={this.props.to}>{this.props.linkto}</Link>
        </Row>
      </SignupForm>
    );
  }
}

export default Form;
