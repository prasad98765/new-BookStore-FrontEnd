import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
export default class MenuPopupState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field : "Sort By Relevance"
    }
    this.ListofBooks = React.createRef();
  }

  highToLowClick = event => {
    this.setState({field : "highToLow(Price)"})
    this.props.sort("highToLow")
  };

  lowToHighClick = event => {
    this.setState({field : "lowToHigh(Price)"})
    this.props.sort("lowToHigh")
  };

  sortArrivalClick = event => {
    this.setState({field : "sortArrival"})
    this.props.sort("sortArrival")
  };
  render() {
    return (
      <div  style={{ marginLeft: "77%" ,marginTop:"8%"}}>
        {this.props.search == false ? (
            <h4 style={{marginLeft:"-275%" ,color:"grey",marginTop:"4%"}}>
            Books ( 0 )
          </h4>
        ) : (
          <h4 style={{marginLeft:"-275%" ,color:"grey",marginTop:"4%"}}>
           Books ( {this.props.bookcount} )
         </h4>
      )}

        <PopupState variant="popover" popupId="demo-popup-menu" style={{marginTop:"-220px"}}>
          {popupState => (
            <React.Fragment>
              {this.props.search == true ? (
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
                {this.state.field}
              
              </Button>
                ) : (
                  ""
              )}
              
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.highToLowClick}
                >
                  High-Low(Price)
                </MenuItem>
                <MenuItem
                  style={{ fontFamily: "Times New Roman", fontSize: 12 }}
                  onClick={this.lowToHighClick}
                >
                  Low-High(Price)
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
