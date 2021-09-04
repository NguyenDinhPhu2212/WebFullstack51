import React, { Component } from "react";
import "./card.css"
class CardComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card-container">
                <div className="card-image">
                    <img
                        src={`${this.props.item.url}`}
                        className="img-fluid rounded-start"
                        alt="avatar"
                    />
                </div>
                <div className="card-detail">
                    <div className="card-body">
                        <h5 className="card-title">{this.props.item.name}</h5>
                        <p className="card-text">
                            Price: {this.props.item.price}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardComponent;
