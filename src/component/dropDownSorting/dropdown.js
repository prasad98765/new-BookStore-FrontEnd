import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { colors } from "@material-ui/core";
var APIcall = require("../../congfiguration/BookStoreCallAPI");
var ListofBooks = require("../../component/dashboard/listOfBooks");

export default class MenuPopupState extends Component {
  constructor(props) {
    super(props);
    this.ListofBooks = React.createRef();
  }

  highToLowClick = event => {
    APIcall.getSortData("highToLow").then(res => {
      this.props.value(res.data.data);
    });
  };

  lowToHighClick = event => {
    APIcall.getSortData("lowToHigh").then(res => {
      this.props.value(res.data.data);
    });
  };

  sortArrivalClick = event => {
    APIcall.getSortData("sortArrival").then(res => {
      this.props.value(res.data.data);
    });
  };

  render() {
    return (
      <div className="dropdown" style={{ marginLeft: "77%", marginTop:"2%" }}>
        <h4 style={{marginLeft:"-275%" ,color:"grey"}}>
          Books ( {this.props.bookcount} )
        </h4>

        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Button
                {...bindTrigger(popupState)}
                style={{
                  marginTop: "-80px",
                  width: "50%",
                  fontFamily: "Times New Roman",
                  fontSize: 10,
                  borderStyle: "ridge",
                  borderWidth: "thin",
                  borderColor: "grey"
                }}
              >
                Sort By Relevance
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.highToLowClick}
                >
                  High-Low
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.lowToHighClick}
                >
                  Low-High
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.sortArrivalClick}
                >
                  Newest Arrival
                </MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    );
  }
}
