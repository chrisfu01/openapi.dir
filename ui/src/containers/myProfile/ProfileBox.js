import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProfileBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-box pt-md-4">
                <h6><a href="#">Update My Profile</a></h6>
                <h6><a href="#">Update My Company</a></h6>
                
            </div>
        );
    }
}