import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      button: true
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  wishListClick(event) {
    this.setState({ FACKNAM: event.target.value });
  }
  handleButtonClick() {
    this.setState({
      button: !this.state.button
    });
  }
  AddtoBag() {}
  AddWishList() {}
  render() {
    return (
      <div>
        <Card
          style={{ maxWidth: 180, height: 290, marginLeft: 90, marginTop: 50 }}
        >
          <CardActionArea>
            <Tooltip title={this.props.value.DESCRIPTION} arrow>
              <div className="xyz">
                <img
                  className="imagePath"
                  src={this.props.value.IMAGEURL}
                  style={{
                    height: "150px",
                    width: "70%",
                    marginTop: "6%",
                    marginLeft: "15%"
                  }}
                  alt="no Cover"
                />
              </div>
            </Tooltip>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  marginTop: -10,
                  fontSize: 13,
                  marginLeft: 10
                }}
              >
                {this.props.value.TITLE}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "grey",
                  marginTop: -30,
                  fontSize: 10,
                  marginLeft: 10
                }}
              >
                {this.props.value.AUTHOR}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                style={{
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: 10,
                  marginLeft: 10,
                  marginTop: -45
                }}
              >
                {this.props.value.PRICE}
              </Typography>
              {/* <div style = {{
display: "flex",
flex: "row",
justif: "center",
width: "100%",
color: "white"
}}>
{(this.props.value.NOOFCOUNT == 0)
? <outOfStock></outOfStock>
:<OutOfStck/>
}
</div> */}
            </CardContent>
          </CardActionArea>
          <CardActions className="bookdiv">
            <div className="button1" onClick={this.AddtoBag}>
              <Button
                onClick={this.handleButtonClick}
                className={this.state.button ? "buttonTrue" : "buttonFalse"}
                style={{
                  border: "none",
                  color: "black",
                  textDecoration: "none",
                  display: "inlineBlock",
                  transitionDuration: 0.4,
                  marginTop: -70,
                  marginTop: -70,
                  width: 80,
                  height: 30,
                  fontSize: "0.60em"
                }}
              >
                Add to Bag
              </Button>
            </div>
            <div className="button2" onClick={this.AddWishList}>
              <Button
                style={{
                  width: 70,
                  height: 30,
                  marginTop: -70,
                  fontFamily: "Times New Roman",
                  color: "black",
                  fontSize: "0.60em"
                }}
              >
                Wishlist
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
export default dashboard;
