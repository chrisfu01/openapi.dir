import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class TagCloud extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load the tags (maximum 100 tags)
    }

    render() {
        // iterate through the tags (id, name of tag, # of apis)

        return (
            <div className="sidebar-box ">
                <h3 className="sidebar-heading">Tag Cloud</h3>
                <ul className="tagcloud">
                    <a href="#" className="tag-cloud-link">AWS</a>
                    <a href="#" className="tag-cloud-link">Stripe</a>
                    <a href="#" className="tag-cloud-link">people</a>
                    <a href="#" className="tag-cloud-link">Google</a>
                    <a href="#" className="tag-cloud-link">Oauth</a>
                    <a href="#" className="tag-cloud-link">eCommerce</a>

                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ tags }) => ({
    // map the store tags to props
    // tags: tags.tags,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the tags
            // getTags: () => getTags(),
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagCloud)
