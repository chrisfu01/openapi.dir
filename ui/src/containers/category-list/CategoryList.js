import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCats } from '../../actions/apiActions'


class CategoryList extends Component {
    constructor(props) {
        super(props);
        

    }

    componentDidMount() {
        // Load all the categories (id, name, # of api's)
        this.props.loadCats();
    }


    renderCategories(category) {
        return (<li><a href="#" onClick = {e=>this.handlePageClick(category.id)}>{category.name} <span>({category.counter})</span></a></li>)
    }

    handlePageClick (id) {
        this.props.doFilter(id);
    }

    render() {
        return (
            <div className="sidebar-box ">
                <h3 className="sidebar-heading">Categories</h3>
                <ul className="categories">
                    {this.props.categories.map(category => this.renderCategories(category))}
                    
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ categories }) => ({
    // map the store categories to props
    categories: categories.categories,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the categories
            loadCats: () => loadCats(),
        },
        dispatch
    )
    

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList)
