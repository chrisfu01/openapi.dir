import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CategoryList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load all the categories (id, name, # of api's)
    }

    render() {
        return (
            <div className="sidebar-box ">
                <h3 className="sidebar-heading">Categories</h3>
                <ul className="categories">
                    <li><a href="#">Finance <span>(6)</span></a></li>
                    <li><a href="#">Technology <span>(8)</span></a></li>
                    <li><a href="#">Travel <span>(2)</span></a></li>
                    <li><a href="#">e-Commerce <span>(2)</span></a></li>
                    <li><a href="#">Photography <span>(7)</span></a></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    // map the store categories to props
    // categories: openapis.apis,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the categories
            // getCategories: () => register(getCategories),
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)
