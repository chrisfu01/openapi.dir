import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadCats } from '../../actions/apiActions'


class SearchBox extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
        <input type="text" className="form-control"  onKeyDown={this._handleKeyDown}
                            placeholder="Search API" />
        )
    }
                       
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.doSearch(e.target.value)
        }
    }
}
    

export default connect(

)(SearchBox)
