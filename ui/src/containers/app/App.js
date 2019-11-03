import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import Home from '../home/Home';
import AddApi from '../addApi/AddApi';
import Register from '../register/Register';
import Login from '../login/Login';
import MyProfile from '../myProfile/MyProfile';

import ApiDisplay from '../apiDisplay/ApiDisplay';
import Aside from '../../components/aside/Aside'; 
import {logout} from '../../actions/apiActions';
import { push } from 'connected-react-router'

class App extends Component {
  render() {
    return (
      <div className="site-page">
        <Aside user={this.props.user} logout={this.logout.bind(this)} />
          
        <div id="site-main">
          <Route exact path="/" component={Home} />
          <Route exact path="/add-api" component={AddApi} />
          <Route exact path="/show-api/:id" component={ApiDisplay} />

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)