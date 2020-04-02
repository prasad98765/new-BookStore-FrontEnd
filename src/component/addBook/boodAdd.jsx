import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { Typography } from "@material-ui/core";
import "../addBook/bookAdd.css";
var APIcall = require("../../congfiguration/BookStoreCallAPI");

const ratings = RegExp("^[0-5][.][0-5]$");
const titles = RegExp("^[A-Z]{1}");
const author = RegExp("^[A-Z]{1}");
const description = RegExp("^[A-Z]{1}");
const year = RegExp("^[12][0-9]{3}$");
const price = RegExp("^[0-9]");
class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TITLE: null,
      AUTHOR: null,
      YEAR: null,
      RATING: null,
      PRICE: null,
      DESCRIPTION: null,
      condition: true,
      COUNT: 0,
      formErrors: {
        TITLE: "",
        AUTHOR: "",
        YEAR: "",
        RATING: "",
        PRICE: "",
        DESCRIPTION: "",
        FILE: null,
        IMAGEPATH: ""
      },
      open: false,
      setOpen: true
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    e.preventDefault();
    let value = e.target.value;
    const { name } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "TITLE":
        formErrors.TITLE = formErrors.TITLE = titles.test(value)
          ? ""
          : "please enter valid title name";
        break;
      case "AUTHOR":
        formErrors.AUTHOR = formErrors.AUTHOR = author.test(value)
          ? ""
          : "please enter valid author name";
        break;
      case "YEAR":
        formErrors.YEAR = year.test(value) ? "" : "Please enter valid year";
        break;

      case "PRICE":
        formErrors.PRICE = price.test(value) ? "" : "Please enter valid price";
        break;
      case "RATING":
        formErrors.RATING = ratings.test(value)
          ? " "
          : "please enter rating in range[0-5]";
        break;
      case "DESCRIPTION":
        formErrors.DESCRIPTION = formErrors.DESCRIPTION = description.test(
          value
        )
          ? ""
          : "please enter description ";
        break;
      default:
        break;
    }
    
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };
  getfile = async event => {
    this.setState({ FILE: event.target.files[0] });
    const formData = new FormData();
    formData.append("filePath", event.target.files[0]);
    APIcall.getImagePath(formData).then(res => {
      this.setState({ IMAGEPATH: res.data.url });
    });
  };

  getbookdetails = () => {
    if(this.state.TITLE == null || this.state.AUTHOR == null || this.state.YEAR == null ||this.state.RATING == null || this.state.DESCRIPTION == null){
      this.setState({ open: true });
      this.setState({ setOpen: true }); 
    }else{
      this.setState({ open: true });
      this.setState({ setOpen: false }); 
    }
    const bookDetails = {
      TITLE: this.state.TITLE,
      AUTHOR: this.state.AUTHOR,
      YEAR: this.state.YEAR,
      RATING: this.state.RATING,
      PRICE: this.state.PRICE,
      DESCRIPTION: this.state.DESCRIPTION,
      IMAGEPATH: this.state.IMAGEPATH,
      NOOFBOOKS: this.state.COUNT
    };
    APIcall.BookDetails(bookDetails).then(res => {});
    
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };

  render() {

    const { formErrors } = this.state;
    return (
      <div className="fullBG">
        <br></br>
        <h2 style={{ marginLeft: "25%" }}>Book Details</h2>
        <div className="FormCenter">
          <form onSubmit={this.handleSubmit}>
            <br></br>
            <br></br>
            <div className="FormField">
              <label className="FormField__Label">Title</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="title"
                className="FormField__Input"
                placeholder="Enter book title name"
                name="TITLE"
              />
              <div className="errorMessage">
                {formErrors.TITLE.length > 0 && <span>{formErrors.TITLE}</span>}
              </div>
            </div>

            <div className="FormField">
              <label className="FormField__Label">Author</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Author"
                className="FormField__Input"
                placeholder="Enter book author name"
                name="AUTHOR"
              />
              <div className="errorMessage">
                {formErrors.AUTHOR.length > 0 && (
                  <span>{formErrors.AUTHOR}</span>
                )}
              </div>
            </div>

            <div className="FormField">
              <label className="FormField__Label">Year</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Year"
                className="FormField__Input"
                placeholder="Enter book published year"
                name="YEAR"
              />
              <div className="errorMessage">
                {formErrors.YEAR.length > 0 && <span>{formErrors.YEAR}</span>}
              </div>
            </div>

            <div className="FormField">
              <label className="FormField__Label">Price</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Price"
                className="FormField__Input"
                placeholder="Enter book price"
                name="PRICE"
              />
              <div className="errorMessage">
                {formErrors.PRICE.length > 0 && <span>{formErrors.PRICE}</span>}
              </div>
            </div>

            <div className="FormField">
              <label className="FormField__Label">Rating</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="rating"
                className="FormField__Input"
                placeholder="Rating of book"
                name="RATING"
              />
              <div className="errorMessage">
                {formErrors.RATING.length > 0 && (
                  <span>{formErrors.RATING}</span>
                )}
              </div>
            </div>
            <div className="FormField">
              <label className="FormField__Label">Description</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Description"
                className="FormField__Input"
                placeholder="Enter book description"
                name="DESCRIPTION"
              />
              <div className="errorMessage">
                {formErrors.DESCRIPTION.length > 0 && (
                  <span>{formErrors.DESCRIPTION}</span>
                )}
              </div>
            </div>
            <div className="FormField">
              <label className="FormField__Label">number of Books</label>
              <input
                value={this.state.value}
                onChange={this.handleChange}
                type="Number"
                className="FormField__Input"
                placeholder="Number of book"
                name="COUNT"
              />
            </div>
            <div className="FormField">
              <input
                accept="image/*"
                type="file"
                name="filePath"
                value={this.state.value}
                onChange={this.getfile}
              />
            </div>
          </form>
          <div className="FormField">
              <button
                type="submit"
                className="FormField__Button mr-20"
                onClick={this.getbookdetails}
              >
                Submit
              </button>
            </div>
          {this.state.setOpen ? (
              <div>
               <Snackbar
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  open={this.state.open}
                  autoHideDuration={2000}
                  onClose={this.handleClose}
                  ContentProps={{
                    "aria-describedby": "message-id"
                  }}
                  message={
                    <span id="message-id">
                    Please Enter All The Required Details
                     </span>
                  }
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={this.handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  ]}
                />
              </div>
            ) : (
              <div>
                <Snackbar
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                  open={this.state.open}
                  autoHideDuration={2000}
                  onClose={this.handleClose}
                  ContentProps={{
                    "aria-describedby": "message-id"
                  }}
                  message={
                    <span id="message-id">
                      Congratulations! Your Book is Added In Data Base
                     </span>
                  }
                  action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={this.handleClose}
                    >
                      <CloseIcon />
                    </IconButton>
                  ]}
                />
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default AddBook;