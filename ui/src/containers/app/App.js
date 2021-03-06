import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import Home from '../home/Home';
import AddApi from '../addApi/AddApi';
import Register from '../register/Register';
import Login from '../login/Login';
import MyProfile from '../myProfile/MyProfile';
import Edit from "../edit/Edit";

import ApiDisplay from '../apiDisplay/ApiDisplay';
import Aside from '../../components/aside/Aside'; 
import {logout} from '../../actions/apiActions';
import { push } from 'connected-react-router'
import { withRouter } from 'react-router-dom'


import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fas, far, fab);

class App extends Component {
  render() {
    console.log(this.props.location.pathname);
        const path = this.props.location.pathname; 

        let isshowapi = false;
        if (path.includes("show-api")) {
            isshowapi = true;
        }
    
    return (
      <div className="site-page">
        <Aside user={this.props.user} logout={this.logout.bind(this)} />
          
        <div id="site-main" className = {isshowapi ? "expand": ""}>
          <Route exact path="/" component={Home} />
          <Route exact path="/add-api" component={AddApi} />
          <Route exact path="/show-api/:id" component={ApiDisplay} />
          <Route exact path="/edit/:id" component={Edit} />

          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />


        
        </div>

      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.goHome();
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
          goHome: () => push('/'),
          logout: () => logout(),
        },
        dispatch
    )

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))