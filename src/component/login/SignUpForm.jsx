import React, { Component } from "react";
import { Link } from "react-router-dom";
var login = require('../login/singUpAndSign')
const emailRegex = RegExp(
  "^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$"
);
const mobileRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$");
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

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      EMAIL: null,
      PASSWORD: null,
      NAME: null,
      CONTACT: null,
      formErrors: {
        EMAIL: "",
        PASSWORD: "",
        NAME: "",
        CONTACT: "",
        hasAgreed: false
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   let target = e.target;
  //   let value = target.type === "checkbox" ? target.checked : target.value;
  //   let name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleChange = e => {
    e.preventDefault();
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
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
      case "NAME":
        formErrors.NAME =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "CONTACT":
        formErrors.CONTACT = mobileRegex.test(value)
          ? ""
          : "minimum 10 characaters required";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  handleSubmit(e) {
    // e.preventDefault();
    // console.log("The form was submitted with the following data:");
    // console.log(this.state);
    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.NAME}
        Email: ${this.state.EMAIL}
        Password: ${this.state.PASSWORD}
        contact:${this.state.CONTACT}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} npValidate className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Full Name
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
              type="text"
              placeholder="Enter your full name"
              className={formErrors.NAME.length > 0 ? "error" : null}
              name="NAME"
              value={this.state.NAME}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.NAME.length > 0 && <span>{formErrors.NAME}</span>}
            </div>
          </div>

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
              id="email"
              // className="FormField__Input"
              placeholder="Enter your email"
              name="EMAIL"
              value={this.state.EMAIL}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.EMAIL.length > 0 && <span>{formErrors.EMAIL}</span>}
            </div>
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
              // className="FormField__Input"
              placeholder="Enter your password"
              name="PASSWORD"
              value={this.state.PASSWORD}
              onChange={this.handleChange}
              onInput={this.validate}
            />
            <div className="errorMessage">
              {formErrors.PASSWORD.length > 0 && (
                <span>{formErrors.PASSWORD}</span>
              )}
            </div>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="phone_number">
              Phone Number
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
              className={formErrors.CONTACT.length > 0 ? "error" : null}
              type="text"
              id="phome_number"
              // className="FormField__Input"
              placeholder="Enter phone number"
              name="CONTACT"
              value={this.state.CONTACT}
              onChange={this.handleChange}
            />
            <div className="errorMessage">
              {formErrors.CONTACT.length > 0 && (
                <span>{formErrors.CONTACT}</span>
              )}
            </div>
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="" className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{""}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
        
      </div>
    );
  }
}
export default SignUpForm;
