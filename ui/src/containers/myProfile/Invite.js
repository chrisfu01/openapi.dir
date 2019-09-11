import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  bg from '../../assets/images/bg_1.jpg';

class Invite extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // iterate through the tags (id, name of tag, # of apis)

        return (
            <div className="sidebar-box subs-wrap img py-4" style={{backgroundImage: `url(${bg})`}}>
                <div className="overlay"></div>
                <h3 className="mb-4 sidebar-heading">Invite Team Member</h3>

                <form action="#" className="subscribe-form">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" />
                         <input type="text" className="form-control" placeholder="Email Address" />
                         <button type="button" value="Submit" className="mt-2 btn btn-white submit">Send Invite</button>
                    </div>
                </form>
            </div>


        )
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, send the message to site admin
            // sendMessage: () => sendMessage(),
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invite)
