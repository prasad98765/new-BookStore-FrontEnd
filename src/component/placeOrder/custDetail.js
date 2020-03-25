import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import '../placeOrder/customerDetail.css';
import BookImage from '../placeOrder/image/first.jpg';
import Minus from '../placeOrder/image/minus.png';
import Plus from '../placeOrder/image/plus.png';

const styles = theme => ({
    container: {

    },
    radiobutton: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: "wrap",
            justifyContent: "place-around"

        },
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap",
            justifyContent: "place-around"

        },

    },
    textField: {
        [theme.breakpoints.down('sm')]: {
            width: "30%"
        },
        [theme.breakpoints.down('xs')]: {
            width: "40%",
            display: "flex",
            justifyContent: "place-around"

        },
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "30%",
    },
    dense: {
        marginTop: "16%",
    },
    menu: {
        width: "25%",
    },
    textArea: {
        [theme.breakpoints.down('sm')]: {
            width: "62%",
            justifyContent: "place-around"
        },

        [theme.breakpoints.down('xs')]: {
            width: "40%",
            display: "flex",
            justifyContent: "place-around"

        },
        width: "62%"
    },
    checked: {

    },

    placeOrderButton: {

        [theme.breakpoints.down('sm')]: {
            width: "50%",
            height: "10%",
            justifyContent: 'left',
            alignContent: 'flex-end',
        },

        [theme.breakpoints.down('xs')]: {
            alignSelf: "Flex-end",
            width: "50%",
            height: "10%",
            justifyContent: 'left',
            alignContent: 'flex-end',
        },

    },

    button: {
        [theme.breakpoints.down('sm')]: {
            display: "flex",
            justifyContent: 'flex-end',
            justifyContent: "place-around"

        },
        [theme.breakpoints.down('xs')]: {
            display: "flex",
            justifyContent: 'flex-end',
            justifyContent: "place-around"
        },
    },
    root: {
        width: "60%",
        marginTop: "2%",
        marginLeft: "20%",
        marginRight: "25%",
        padding: "2%",
    }
});

const CustomExpansionPanel = withStyles(() => ({
    root: {
        width: "100%"
    },
    expanded: {
        // height: "250px"
    }
}))(ExpansionPanel);


class OutlinedTextFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            PhoneNumber: '',
            Pincode: '',
            Locality: '',
            Address: '',
            City: '',
            Landmark: '',
            radioValue: '',
            expanded: false,
            button: '',
            placeOrderButton: '',
            CheckOutButton: '',
            bookName: "The Name Jar",
            authorName: "yangsook chai",
            price: 1500,
            count: 1,
            expandedPanel2: false,

        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };
    handleChangeName = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangePhoneNumber = PhoneNumber => event => {
        this.setState({
            [PhoneNumber]: event.target.value,
        });
    };
    handleChangePincode = Pincode => event => {
        this.setState({
            [Pincode]: event.target.value,
        });
    };
    handleChangeLocality = Locality => event => {
        this.setState({
            [Locality]: event.target.value,
        });
    };
    handleChangeAddress = Address => event => {
        this.setState({
            [Address]: event.target.value,
        });
    };
    handleChangeCity = City => event => {
        this.setState({
            [City]: event.target.value,
        });
    };
    handleChangeLandmark = Landmar => event => {
        this.setState({
            [Landmar]: event.target.value,
        });
    };
    handleChangeOfRadio = event => {
        this.setState({ radioValue: event.target.value });
    };
    handleChangeContinueButton = nextPanelString => (event, expanded) => {

        this.setState({
            expanded: nextPanelString,
        });
    };
    handleChangePlaceOrder = nextPanelString => (event, expanded) => {
        this.setState({
            expandedPanel2: true
        });

    };
    handleChangeCheckOutButton = event => {
        this.setState({ CheckOutButton: event.target.value });
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        // console.log("in custDetails class-----------> ",this.props.history.location.state);
        
     const { expanded } = this.state;
        return (
            <div style={{marginTop:"40px",height:"auto" }}>
                <CustomExpansionPanel expanded={true} style={{width:"70%",height:"auto",marginLeft:"10%"}}>
                    <ExpansionPanelSummary >
                        <Typography>  My cart({this.state.count})</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div style={{display:"flex",flexDirection:"column"}}>
                        <div className="outerBorder">
                            <div className="cartDetails">
                                <img className="image"  src={this.props.history.location.state.ImageURL}
                                                              style={{
                                                                      height: "150px",
                                                                      width: "50%",
                                                                     marginTop: "1%",
                                                                      marginLeft: "-15%"
                                                                  }} />
                                <div className="cartinfo">
                                    <p className="bookname">{this.props.history.location.state.Title}</p>
                                    <p className="authorname">by {this.props.history.location.state.Author}</p>
                                    <p className="p">Rs. {this.state.price}</p>

                                    <img className="plusImg" src={Minus} onClick={this.decrement} />
                                    <input className="inputCount" value={this.state.count}></input>
                                    <img className="plusImg" src={Plus} onClick={this.increment} />
                                </div>
                                {/* <br /> */}
                           
                            </div>
                        </div>
                        <div className="outerBorder">
                            <div className="cartDetails">
                                <img className="image"  src={this.props.history.location.state.ImageURL}
                                                              style={{
                                                                      height: "150px",
                                                                      width: "50%",
                                                                     marginTop: "1%",
                                                                      marginLeft: "-15%"
                                                                  }} />
                                <div className="cartinfo">
                                    <p className="bookname">{this.props.history.location.state.Title}</p>
                                    <p className="authorname">by {this.props.history.location.state.Author}</p>
                                    <p className="p">Rs. {this.state.price}</p>

                                    <img className="plusImg" src={Minus} onClick={this.decrement} />
                                    <input className="inputCount" value={this.state.count}></input>
                                    <img className="plusImg" src={Plus} onClick={this.increment} />
                                </div>
                                {/* <br /> */}
                           
                            </div>
                        </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "25%", marginBottom: "50px", marginLeft: "25%" }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.placeOrderButton}
                                        onClick={this.handleChangePlaceOrder('panel2')}
                                    >
                                        PlaceOrder
                                    </Button>
                                </div>
                       
                    </ExpansionPanelDetails>
                    
                </CustomExpansionPanel>
                <br></br>
                <ExpansionPanel expanded={this.state.expandedPanel2}style={{width:"70%",marginLeft:"10%"}}   >
                    <ExpansionPanelSummary >
                        <Typography>CustomerDetails</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <form noValidate autoComplete="off"  >
                           <div style={{marginTop: "-20px",}}>
                            <TextField 
                                style={{marginLeft:"50px"}}
                                id="outlined-name"
                                label="Name"
                                value={this.state.name}
                                onChange={this.handleChangeName('name')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                style={{marginLeft:"30px", height:"20%"}}
                                id="outlined-name"
                                label="PhoneNo"
                                value={this.state.PhoneNumber}
                                onChange={this.handleChangePhoneNumber('PhoneNumber')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                               style={{marginLeft:"50px"}}
                                id="outlined-name"
                                label="Pincode"
                                value={this.state.Pincode}
                                onChange={this.handleChangePincode('Pincode')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                style={{marginLeft:"30px", height:"20%"}}
                                id="outlined-name"
                                label="Locality"
                                value={this.state.Locality}
                                onChange={this.handleChangeLocality('Locality')}
                                margin="normal"
                                variant="outlined"
                            />
                              <TextField
                                style={{width:"65%",marginLeft:"50px"}}
                                id="outlined-name"
                                label="Address"
                                value={this.state.Address}
                                onChange={this.handleChangeAddress('Address')}
                                margin="normal"
                                variant="outlined"
                            />
                          <br/>
                            <TextField
                             style={{marginLeft:"50px"}}
                                id="outlined-name"
                                label="City/Town"
                                value={this.state.City}
                                onChange={this.handleChangeCity('City')}
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                               style={{marginLeft:"30px", height:"20%"}}
                                id="outlined-name"
                                label="Landmark"
                                value={this.state.Landmark}
                                onChange={this.handleChangeLandmark('Landmark')}
                                margin="normal"
                                variant="outlined"
                            />
                            <div style={{ display: 'flex', }}>
                                <FormLabel >type</FormLabel>
                                <br></br>
                                <br></br>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                                <FormControlLabel
                                    value="Home"
                                    control={<Radio color="primary" />}
                                    label="Home"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Home"}
                                />
                                <FormControlLabel
                                    value="Work"
                                    control={<Radio color="primary" />}
                                    label="Work"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === "Work"}
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio color="primary" />}
                                    label="Other"
                                    labelPlacement="end"
                                    onChange={this.handleChangeOfRadio}
                                    checked={this.state.radioValue === 'other'}
                                />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', height: "10%" }}>
                                    <Button 
                                        style={{width:"120px",height:"40px"}}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.button}
                                        onClick={this.handleChangeContinueButton('panel3')}
                                        CONTINUE
                                    >
                                        CONTINUE
                                    </Button>
                                </div>
                            </div>
                            </div>
                        </form>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br></br>
                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}style={{width:"70%",marginLeft:"10%"}}>
                    <ExpansionPanelSummary ><Typography >
                        Order Summary
                             </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="outerBorder">
                            <div className="cartDetails">
                                <img className="image" src={BookImage} />
                                <div className="cartinfo">
                                    <p className="bookname">{this.state.bookName}</p>
                                    <p className="authorname">by {this.state.authorName}</p>
                                    <p className="p">Rs. {this.state.price}</p>
                                </div><br />
                                <div style={{ display: 'flex', justifyContent: 'flex-end', height: "5%", marginTop: "25%", marginLeft: "30%" }}>
                                    <Button variant="contained"
                                        color="primary"
                                        size="small"
                                        value={this.state.CheckOutButton}
                                        onChange={this.handleChangeCheckOutButton}
                                    >
                                        Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div >
        );
    }
}
OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OutlinedTextFields);