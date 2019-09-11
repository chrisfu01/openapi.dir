import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchBox extends Component {
    render() {
        return (
            <div className="sidebar-box pt-md-4">
                <form action="#" className="search-form">
                    <div className="form-group">
                        <span className="icon icon-search"></span>
                        <input type="text" className="form-control"
                            placeholder="Search API" />
                    </div>
                </form>
            </div>
        );
    }
}
