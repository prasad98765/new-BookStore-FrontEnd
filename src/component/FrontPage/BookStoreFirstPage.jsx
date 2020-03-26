import React, { Component } from "react";
import ListOfBooks from "../dashboard/listOfBooks";
import TopBar from "../topbar/navbar";
import Sorting from "../dropDownSorting/dropdown";
import Dropdown from '../../component/dropDownSorting/dropdown'
import { withRouter } from 'react-router-dom';

var APIcall = require("../../congfiguration/BookStoreCallAPI");
class BookStoreFirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortfield : null,
      page: 1,
      ALLBOOKS: [],
      noOfRecord: null,
      addToCart : null,
      count:0,
      wishCount:0
    };
  }

  allBooks() {
    APIcall.getAllBooks({ page: this.state.page }).then(res => {
      this.setState({ ALLBOOKS: res.data });
    });
  }

  getNoCount() {
    APIcall.getNoOFBookCount().then(res => {
      console.log("in get no of count books---------->", res.data.data);
      this.setState({ noOfRecord: res.data.data });
    });
  }

  handleSearch = async data => {
    this.setState({ ALLBOOKS: [] });
    this.setState({ ALLBOOKS: data });
  };
  handleChange = async (event, value) => {
    await this.setState({ page: value });
    this.allBooks();
    this.getSorting()
  };
  componentWillMount() {
    this.allBooks();
    this.getNoCount();
   
  }
  addToCart = (value) => {
    console.log("check the add to cart button");
  
    
    this.props.history.push( { pathname : '/addToCart', state: this.state.addToCart })
  }
  login = (value) =>{
    
    this.props.history.push( { pathname : '/login', state: this.state.addToCart })
  }
  getBookToaddToCart = (value) => {
    this.setState({ addToCart:value });
    this.setState({ count:this.state.count +1  });
  }
  getBookToWishList=(value)=>{
    this.setState({addToWishList:value});
    this.setState({wishCount:this.setState.wishCount +1 })
  }
  getSorting = async (data) => {
    console.log(this.state.sortfield);
    console.log(this.state.page);
    
    
    APIcall.getSortData({field : this.state.sortfield || data , page : this.state.page}).then(async res => {
      console.log("ex sorted DAta ===============>",res.data.data);
      this.setState({ ALLBOOKS: [] });
      await this.setState({ ALLBOOKS: res.data.data });
    });
    await this.setState({sortfield : data})
  }

  render() {
    return (
      <div>
        <TopBar bookList={this.state.ALLBOOKS} value={this.handleSearch} value1 = {this.addToCart} count = {this.state.count} wishCount={this.state.wishCount} login ={this.login}  />
        <Sorting bookList={this.state.ALLBOOKS} bookcount = {this.state.noOfRecord} value={this.handleSorting} page = {this.state.page} sort = {this.getSorting}/>
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
