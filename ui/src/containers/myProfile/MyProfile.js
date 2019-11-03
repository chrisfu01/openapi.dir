import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ProfileBox from './ProfileBox'
import Invite from './Invite'


class MyProfile extends Component {
    constructor(props) {
        super(props);
    }
  
    componentDidMount() {

    }

    render() {
        return (
            <section className="api-section api-no-pt api-no-pb">
            <div className="container">
              <div className="row d-flex">
                <div className="col-xl-8 py-5 px-md-5">
                  <h3>My API's</h3>
                </div>
                <div className="col-xl-4 sidebar  bg-light pt-5">
                  <ProfileBox />
                  <Invite />
                </div>
              </div>
            </div>
          </section>
           
        )
    }

}



const mapStateToProps = ({ openapis }) => ({
  //count: openapis.total,
  //apis: openapis.apis,
 
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
     
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProfile)
