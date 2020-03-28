// import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import InputBase from "@material-ui/core/InputBase";
// import Badge from "@material-ui/core/Badge";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import { withStyles } from "@material-ui/core/styles";
// import SearchIcon from "@material-ui/icons/Search";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MoreIcon from "@material-ui/icons/MoreVert";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
// import MenuBookIcon from "@material-ui/icons/MenuBook";
// var APIcall = require("../../congfiguration/BookStoreCallAPI");

// const styles = theme => ({
//   root: {
//     width: "100%"
//   },
//   grow: {
//     flexGrow: 1
//   },
//   title: {
//     display: "none",
//     [theme.breakpoints.up("sm")]: {
//       display: "block"
//     }
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginRight: theme.spacing.unit * 2,
//     marginLeft: 0,
//     width: "40%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing.unit * 3,
//       width: "45%"
//     }
//   },
//   searchIcon: {
//     width: theme.spacing.unit * 9,
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   inputRoot: {
//     color: "inherit",
//     width: "100%"
//   },
//   inputInput: {
//     paddingTop: theme.spacing.unit,
//     paddingRight: theme.spacing.unit,
//     paddingBottom: theme.spacing.unit,
//     paddingLeft: theme.spacing.unit * 10,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("")]: {
//       width: 200
//     }
//   },
//   sectionDesktop: {
//     display: "none",
//     [theme.breakpoints.up("md")]: {
//       display: "flex"
//     }
//   },
//   sectionMobile: {
//     display: "flex",
//     [theme.breakpoints.up("md")]: {
//       display: "none"
//     }
//   }
// });

// class PrimarySearchAppBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.set = true;
//     this.state = {
//       bookSearch: "",
//       searchedBookList: [],
//       count: 1,
//       wishCount: 1,
//       set: true
//     };
//   }

//   handleProfileMenuOpen = event => {
//     this.props.login("abv");
//   };

//   handleMobileMenuOpen = event => {
//     this.setState({ mobileMoreAnchorEl: event.currentTarget });
//   };

//   onSubmit = event => {
//     if (this.props.count == 0) {
//       this.setState({ set: true });
//     } else {
//       this.props.value1("add");
//     }
//   };
//   SearchBook = async event => {
//     await this.setState({
//       bookSearch: event.target.value
//     });

//     const searchObj = {
//       TITLE: this.state.bookSearch
//     };

//     APIcall.searchBook(searchObj).then(res => {
//       this.props.value(res.data.data);
//     });
//   };

//   render() {
//     console.log("rex addd to bag count", this.props.count);
//     const { anchorEl, mobileMoreAnchorEl } = this.state;
//     const { classes } = this.props;
//     const isMenuOpen = Boolean(anchorEl);
//     const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//     const renderMenu = (
//       <Menu
//         anchorEl={anchorEl}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem onClick={this.handleMenuClose}>
//           <a hrerf="/TextField"> Login</a>
//         </MenuItem>
//       </Menu>
//     );

//     const renderMobileMenu = (
//       <Menu
//         anchorEl={mobileMoreAnchorEl}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         open={isMobileMenuOpen}
//         onClose={this.handleMenuClose}
//       >
//         <MenuItem onClick={this.onSubmit}>
//           <IconButton color="inherit">
//             <Badge badgeContent={this.props.count} color="secondary">
//               <ShoppingCartIcon />
//             </Badge>
//           </IconButton>
//           <p>Add to cart</p>
//         </MenuItem>
//         <MenuItem onClick={this.handleMobileMenuClose}>
//           <IconButton color="inherit">
//             <Badge badgeContent={0} color="secondary">
//               <FavoriteRoundedIcon />
//             </Badge>
//           </IconButton>
//           <p>WishList</p>
//         </MenuItem>
//         <MenuItem onClick={this.handleProfileMenuOpen}>
//           <IconButton color="inherit">
//             <AccountCircle />
//           </IconButton>
//           <a href="TextField" link to="/adminlogin">
//             {" "}
//             Profile
//           </a>
//         </MenuItem>
//       </Menu>
//     );
//     return (
//       <div className={classes.root}>
//         <AppBar position="static" style={{ backgroundColor: "#800000",position:"fixed",marginTop:"-2.5%" }}>
//           <Toolbar>
//             <IconButton style={{ marginLeft: "11%" }} color="inherit">
//               <MenuBookIcon
//                 style={{ width: 40, fontSize: "33px", marginTop: "-7px" }}
//               />
//               Bookstore
//             </IconButton>
//             {this.state.set === true && this.props.set === undefined ? (
//               <div
//                 className={classes.search}
//                 color="inherit"
//                 style={{ backgroundColor: "white" }}
//               >
//                 <div className={classes.searchIcon}>
//                   <SearchIcon
//                     style={{ width: 400 }}
//                     style={{ color: "black" }}
//                   />
//                 </div>
//                 <InputBase
//                   style={{ color: "black" }}
//                   placeholder="Search…"
//                   classes={{
//                     root: classes.inputRoot,
//                     input: classes.inputInput
//                   }}
//                   onChange={this.SearchBook}
//                   value={this.state.bookSearch}
//                 />
//               </div>
//             ) : (
//               ""
//             )}
//             <div className={classes.grow} />
//             <div className={classes.sectionDesktop}>
//               <IconButton color="inherit" onClick={this.onSubmit}>
//                 <Badge badgeContent={this.props.count} color="secondary">
//                   <ShoppingCartIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton color="inherit" onClick={this.onSubmit}>
//                 <Badge color="secondary">
//                   <FavoriteRoundedIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton
//                 aria-owns={isMenuOpen ? "material-appbar" : undefined}
//                 aria-haspopup="true"
//                 onClick={this.handleProfileMenuOpen}
//                 color="inherit"
//               >
//                 <AccountCircle />
//               </IconButton>
//             </div>
//             <div className={classes.sectionMobile}>
//               <IconButton
//                 aria-haspopup="true"
//                 onClick={this.handleMobileMenuOpen}
//                 color="inherit"
//               >
//                 <MoreIcon />
//               </IconButton>
//             </div>
//           </Toolbar>
//         </AppBar>
//         {renderMenu}
//         {renderMobileMenu}
//       </div>
//     );
//   }
// }

// PrimarySearchAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(PrimarySearchAppBar);


import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

var APIcall = require("../../congfiguration/BookStoreCallAPI");

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "40%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3,
      width: "45%"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.set = true;
    this.state = {
      bookSearch: "",
      searchedBookList: [],
      wishList: ["a"],
      count: 1,
      wishCount: 1,
      set: true,
      name: null,
      Author: null,
      Price: null
    };
  }

  handleProfileMenuOpen = event => {
    this.props.login("abv");
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  onSubmit = event => {
    if (this.props.count == 0) {
      this.setState({ set: true });
    } else {
      this.props.value1("add");
    }
  };
  SearchBook = async event => {
    await this.setState({
      bookSearch: event.target.value
    });

    const searchObj = {
      TITLE: this.state.bookSearch
    };

    APIcall.searchBook(searchObj).then(res => {
      this.props.value(res.data.data);
    });
  };
  wishlist = event => {
    if (!this.props.wishList) {
      this.setState({ name: "null" })
    } else {
      this.props.wishList.map((item, i) => {
        this.setState({ name: item.Title })
        this.setState({ Author: item.Author })
        this.setState({ Price: item.Price })
      })
    }

  }

  render() {
    console.log("rex wish list book", this.props.wishList);
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>
          <a hrerf="/TextField"> Login</a>
        </MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.onSubmit}>
          <IconButton color="inherit">
            <Badge badgeContent={this.props.count} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Add to cart</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={0} color="secondary">
              <FavoriteRoundedIcon />
            </Badge>
          </IconButton>
          <p>WishList</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <a href="TextField" link to="/adminlogin">
            {" "}
            Profile
          </a>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root}>
        {/* <AppBar position="static" style={{ backgroundColor: "#800000" }}> */}
        <AppBar position="static" style={{ backgroundColor: "#800000", position: "fixed", marginTop: "-8%" }}>
          <Toolbar>
            <IconButton style={{ marginLeft: "11%" }} color="inherit">
              <MenuBookIcon
                style={{ width: 40, fontSize: "33px", marginTop: "-7px" }}
              />
              Bookstore
            </IconButton>
            {this.state.set === true && this.props.set === undefined ? (
              <div
                className={classes.search}
                color="inherit"
                style={{ backgroundColor: "white" }}
              >
                <div className={classes.searchIcon}>
                  <SearchIcon
                    style={{ width: 400 }}
                    style={{ color: "black" }}
                  />
                </div>
                <InputBase
                  style={{ color: "black" }}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  onChange={this.SearchBook}
                  value={this.state.bookSearch}
                />
              </div>
            ) : (
                ""
              )}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit" onClick={this.onSubmit}>
                <Badge badgeContent={this.props.count} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                  <div>
                    <Button {...bindTrigger(popupState)} color="inherit">
                      <IconButton color="inherit" onClick={this.wishlist}  >
                        <Badge >
                          <FavoriteRoundedIcon />
                        </Badge>
                      </IconButton>

                    </Button>
                    <Popover
                      {...bindPopover(popupState)}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <Box p={2}>
                        <Typography>{this.state.name}</Typography>
                        <Typography>{this.state.Author}</Typography>
                        <Typography>{this.state.Price}</Typography>
                      </Box>
                    </Popover>
                  </div>
                )}
              </PopupState>


              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);



