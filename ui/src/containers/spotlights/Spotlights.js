import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import defaultLogo from '../../assets/images/default_logo.jpg';
import defaultLogo2 from '../../assets/images/default_logo2.jpg';
import defaultLogo3 from '../../assets/images/default_logo3.jpg';

class Spotlights extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load the spot lights
    }

    render() {
        // iterate through the spotlights in props (which is mapped from redux store)
        // The left image will be the spec logo. if there is no spec logo, we
        // use a default image (rotating the array of logos)

        return (
            <div className="sidebar-box ">
                <h3 className="sidebar-heading">API Spotlights</h3>
                <div className="spotlight mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${defaultLogo})`}}></a>
                    <div className="text">
                        <h3 className="heading"><a href="#">Amazon Managed Blockchain</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                    </div>
                </div>
                <div className="spotlight mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${defaultLogo2})`}}></a>
                    <div className="text">
                        <h3 className="heading"><a href="#">Anchore Engine API Server</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                    </div>
                </div>
                <div className="spotlight mb-4 d-flex">
                    <a className="blog-img mr-4" style={{backgroundImage: `url(${defaultLogo3})`}}></a>
                    <div className="text">
                        <h3 className="heading"><a href="#">Document frequency APIs</a></h3>
                        <div className="meta">
                            <div><a href="#"><span className="icon-calendar"></span> June 28, 2019</a></div>
                            <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
                            <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ spotlights }) => ({
    // map the store spotlight to props
    // categories: openapis.apis,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the spotlights
            // getSpotlights: () => register(getSpotlights),
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Spotlights)
