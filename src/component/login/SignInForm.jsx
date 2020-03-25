import React, { Component } from "react";
import { Link } from "react-router-dom";
import Login from "../login/singUpAndSign"
import { withRouter } from 'react-router-dom';
const emailRegex = RegExp(
  "^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$"
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      EMAIL: null,
      PASSWORD: null,
      formErrors: {
        EMAIL: "",
        PASSWORD: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    // let name = target.name;
    const { name } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "EMAIL":
        formErrors.EMAIL = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "PASSWORD":
        formErrors.PASSWORD =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }
  login =() => {
    this.props.history.push( { pathname : '/addToCart' })
  }

  handleSubmit(e) {
    // e.preventDefault();
    // console.log("The form was submitted with the following data:");
    // console.log(this.state);
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.EMAIL}
        Password: ${this.state.PASSWORD}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="FormCenter">
        <form
          onSubmit={this.handleSubmit}
          className="FormFields"
          // onSubmit={this.handleSubmit}
        >
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              style={{
                width: "40%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              className={formErrors.EMAIL.length > 0 ? "error" : null}
              type="text"
              placeholder="Enter your email"
              name="EMAIL"
              value={this.state.EMAIL}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
            {formErrors.EMAIL.length > 0 && (
              <span >{formErrors.EMAIL}</span>
            )}</div>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              style={{
                width: "40%",
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                outline: "none",
                borderBottom: "1px solid #445366",
                fontSize: "1em",
                fontWeight: "300",
                paddingBottom: "10px",
                marginTop: "10px"
              }}
              className={formErrors.PASSWORD.length > 0 ? "error" : null}
              type="password"
              placeholder="Enter your password"
              name="PASSWORD"
              value={this.state.PASSWORD}
              onChange={this.handleChange}
            />
           <div className="errorMessage">
            {formErrors.PASSWORD.length > 0 && (
              <span >{formErrors.PASSWORD}</span>
            )}</div>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20" onClick = {this.login}>Sign In</button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SignInForm);
