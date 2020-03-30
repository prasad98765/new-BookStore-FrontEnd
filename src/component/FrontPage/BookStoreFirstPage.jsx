import React, { Component } from "react";
import ListOfBooks from "../dashboard/listOfBooks";
import TopBar from "../topbar/navbar";
import Sorting from "../dropDownSorting/dropdown";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Image from "/home/admin1/Desktop/new front End/new-BookStore-FrontEnd/src/Image/not found.png"
import '../FrontPage/bookStoreFirstPage.css'
var APIcall = require("../../congfiguration/BookStoreCallAPI");
class BookStoreFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortfield: null,
      page: 1,
      ALLBOOKS: [],
      addToWishList :null,
      bookCount : false,
      noOfRecord: null,
      addToCart: null,
      count: 0,
      wishCount: 0,
      search: true,
    };
  }

  allBooks() {
    APIcall.getAllBooks({ page: this.state.page }).then(res => {
      this.setState({ ALLBOOKS: res.data });
    });
  }

  getNoCount() {
    APIcall.getNoOFBookCount().then(res => {
      this.setState({ noOfRecord: res.data.data });
    });
  }

  handleSearch = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
    this.setState({ search: true });
    if (data == 0) {
      this.setState({ search: false });
    }
  };
  handleChange = async (event, value) => {
    await this.setState({ page: value });
    this.allBooks();
    this.getSorting();
  };
  componentWillMount() {
    this.allBooks();
    this.getNoCount();
  }
  addToCart = value => {
    if (!this.state.addToCart) {
      this.homepage()
    } else {
      this.props.history.push({
        pathname: "/addToCart",
        state: this.state.addToCart
      });
    }
  };
  login = value => {
    this.props.history.push({
      pathname: "/login",
      state: this.state.addToCart
    });
  };
  
  homepage = value => {
    this.props.history.push({ pathname: "/" });
  };
  getBookToaddToCart = value => {
    this.setState({ addToCart: value });
    this.setState({ count: this.state.count + 1 });
  };
  getBookToWishList = value => {
    this.setState({ addToWishList: value });
    this.setState({ wishCount: this.setState.wishCount + 1 });
  };
  getSorting = async data => {
    APIcall.getSortData({
      field: this.state.sortfield || data,
      page: this.state.page
    }).then(async res => {
      this.setState({ ALLBOOKS: [] });
      await this.setState({ ALLBOOKS: res.data.data });
    });
    await this.setState({ sortfield: data });
  };

  render() {
    console.log("add TO Wish list ",this.state.addToWishList);
    
    return (
      <div>
        <TopBar
          bookList={this.state.ALLBOOKS}
          value={this.handleSearch}
          value1={this.addToCart}
          wishList = {this.state.addToWishList}
          count={this.state.count}
          wishCount={this.state.wishCount}
          login={this.login}
        />
        <Sorting
          bookList={this.state.ALLBOOKS}
          bookcount={this.state.noOfRecord}
          value={this.handleSorting}
          page={this.state.page}
          search={this.state.search}
          sort={this.getSorting}
        />
        {this.state.search ? (
          <div></div>
        ) : (
          <div>
            <img src={Image}style={{display:"flex",marginLeft:"25%",width:"50%",height:"500px",marginBottom:"",marginTop:"-10%"}} ></img>
          </div>
        )}
        <ListOfBooks
          bookList={this.state.ALLBOOKS}
          handleChange={this.handleChange}
          
          getBookToaddToCart={this.getBookToaddToCart}
          getBookToWishList={this.getBookToWishList}
          noOfRecord={this.state.noOfRecord}
        />
      </div>
    );
  }
}
export default withRouter(BookStoreFirstPage);