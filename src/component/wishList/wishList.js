import React, { Component } from 'react';
import TopBar from '../topbar/navbar';

class wishList extends Component {

    render() {
        var Books = this.state.item.map((item, i) => {
            this.state.purchaseBookIndividualCount.push(1)
            if (item != undefined) {
                console.log(item.Title);
                return (
                    <div>
                        <div className="cart-image1">
                            <img className="image" src={item.ImageURL}
                                style={{
                                    height: "100px",
                                    width: "10%",
                                    marginTop: "2%",
                                    marginLeft: "1%"
                                }}></img>
                            <div className="book-title">{item.Title}
                                <div className="book-author">{item.Author}</div>
                                <div className="book-price" > {item.Price}</div>
                                <div>
                                    <button className="minus-plus" onClick={() => { this.decrement() }}>-</button>
                                    <input className="text" value={this.state.purchaseBookIndividualCount} ></input>
                                    <button className="minus-plus" onClick={() => { this.increment() }}>+</button>
                                    <button className="remove" onClick={() => { this.remove() }}>Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
        return (
            <div>
                <TopBar></TopBar>

                <div>
                    <div style={{ borderStyle: "outset", marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}>
                        <div className="cart-title">My Cart({this.state.item.length})</div>
                        {Books}
                        <div className="total-price"><p id="totalprice">Total Price: {this.state.totalPrice}</p></div>
                        <button className="place-order" onClick={this.onClick} >PLACE ORDER </button>
                    </div>

                </div>
            </div>
        )
    }
}