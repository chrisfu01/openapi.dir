import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadOpenApis } from '../../actions/apiActions'
import { Link } from 'react-router-dom'
import Img from 'react-image'


import defaultLogo from '../../assets/images/default_logo.jpg';
import defaultLogo2 from '../../assets/images/default_logo2.jpg';
import defaultLogo3 from '../../assets/images/default_logo3.jpg';
import defaultLogo4 from '../../assets/images/default_logo4.jpg';
import defaultLogo5 from '../../assets/images/default_logo5.jpg';


import SearchBox from '../../components/search/SearchBox'
import CategoryList from '../category-list/CategoryList'
import Spotlights from '../spotlights/Spotlights';
import TagCloud from '../tag-cloud/TagCloud';
import ContactUs from '../contact/ContactUs';

class Home extends Component {

  componentDidMount() {
    this.props.loadOpenApis(0);

  }

  renderHero() {
    return (
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">OpenAPI Portal</h1>
          <p className="lead font-weight-normal">
            The best ever portal
      </p>
          <a className="btn btn-outline-secondary" href="#">Coming soon</a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    );
  }

  renderOpenAPI(api) {
    /*
    // render each api
    return (
        <div className="bg-light col-md-6 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5"><Link to= {"/show-api/" + api.id}>{api.name}</Link></h2> 
            <p className="lead">{api.created_by}</p>
          </div>
          <div className="bg-dark shadow-sm mx-auto api-desc">
            <div className="pt-5">
            <img src={api.avatar_url}></img>
            <p></p>
            {api.description}
            </div>
          
          </div>
        </div>
    )
    */

    // api is just a number. replace with the right values

    return (
      <div className="col-md-12">
        <div className="api-entry  d-md-flex">
          <a href="single.html" className="img img-2" style={{backgroundImage: `url(${api})`}}></a>
          <div className="text text-2 pl-md-4">
            <h3 className="mb-2"><a href="single.html">Forge</a></h3>

            <div className="author d-flex align-items-center">
              <div className="info">
                <span>Published by ABC Company</span>
              </div>
            </div>

            <div className="meta-wrap">
              <p className="meta">
                <span><i className="icon-calendar mr-2"></i>June 28, 2019</span>
                <span><a href="single.html"><i
                  className="icon-folder-o mr-2"></i>Financial</a></span>
                <span><i className="icon-comment2 mr-2"></i>5 Comment</span>
              </p>
            </div>
            <p className="mb-4">Stock and Forex Data and Realtime Quotes</p>
            <p><a href="spec.html" className="btn-custom">View Spec <span
              className="ion-ios-arrow-forward"></span></a></p>
          </div>
        </div>
      </div>
    )
  }

  renderOpenAPIs() {
    /*
    // todo: load the apis, and iterate through
    if (this.props.apis == null && this.props.api.length == 0) {
      return null;
    }
    return (
      <div className="row">
        {this.props.apis.map(api=>this.renderOpenAPI(api))}
      </div>
    )
    */

    var apis = [defaultLogo, defaultLogo2, defaultLogo3, defaultLogo4, defaultLogo5];

    return (
      <div className="row pt-md-4">
        {apis.map(api => this.renderOpenAPI(api))}
      </div>
    )

  }

  renderPaginator() {
    return (
      <div className="row">
        <div className="col text-right">
          <div className="paginator">
            <ul>
              <li><a href="#">&lt;</a></li>
              <li className="active"><span>1</span></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section className="api-section api-no-pt api-no-pb">
        <div className="container">
          <div className="row d-flex">
            <div className="col-xl-8 py-5 px-md-5">
              {this.renderOpenAPIs()}
              {this.renderPaginator()}
            </div>
            <div className="col-xl-4 sidebar  bg-light pt-5">
              <SearchBox />
              <CategoryList />
              <Spotlights />
              <TagCloud />
              <ContactUs />
            </div>
          </div>
        </div>
      </section>

    );
  }
}


const mapStateToProps = ({ openapis }) => ({
  count: openapis.total,
  apis: openapis.apis,

})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadOpenApis: (page) => loadOpenApis(page),
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
