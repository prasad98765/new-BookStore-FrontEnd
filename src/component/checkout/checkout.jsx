import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";
import Footer from "../footer/footer";
import orderImage from "../checkout/download (1).png";
import "../checkout/checkout.css";
import Navbar from "../topbar/navbar";

class OrderPlaced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      set: false
    };
  }
  ContinueShppling = () => {
    this.props.history.push({ pathname: "/" });
  };
  render() {
    return (
      <div
        style={{
          marginTop: "8%",
        }}
      >
        <Navbar set={this.state.set} homepage = {this.ContinueShppling}/>
        <div className="mainDiv">
          <div className="orderImage">
            <img src={orderImage} style={{ height: "210px",width:"50%",marginTop:"-3%" }} />
          </div>
          <div className="orderMessage">
            <p className="messageParagraph">
              {" "}
              hurray!!!your order is confirmed
            </p>
            <p className="messageParagraph">
              the order id is #{this.props.history.location.state} save the
              order id
            </p>
            <p className="messageParagraph">for further communication..</p>
          </div>

          <div className="userDataTable">
            <TableContainer component={Paper}>
              <Table aria-label="caption table">
                <TableHead>
                  <TableRow
                    style={{ fontWeight: "bold", backgroundColor: "#fafafa" }}
                  >
                    <TableCell align="center">Email us</TableCell>
                    <TableCell align="center">Contact us</TableCell>
                    <TableCell align="center">Address</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">dabhade904@gmail.com</TableCell>
                    <TableCell align="center">8888948943</TableCell>
                    <TableCell align="center">
                      Malhotra Chambers, First Floor, Govandi East, Mumbai,
                      Maharashtra 400088
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>

          <div className="continueShoopingButton">
            <Button
              variant="contained"
              color="primary"
              onClick={this.ContinueShppling}
            >
              CONTINUE SHOPPING
            </Button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(OrderPlaced);
