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

import classNames from 'classnames'; 

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        page: 1
    };
  }

  componentDidMount() {
    this.props.loadOpenApis(1);


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

  renderOpenAPI(api, rapi) {

    return (
      <div className="col-md-12">
        <div className="api-entry  d-md-flex">
          <a href="single.html" className="img img-2" style={{backgroundImage: `url(${api.avatar_url})`}}></a>
          <div className="text text-2 pl-md-4">
            <h3 className="mb-2"><a href="single.html">{api.name}</a></h3>

            <div className="author d-flex align-items-center">
              <div className="info">
                <span>{api.publisher && api.publisher.name}</span>
              </div>
            </div>

            <div className="meta-wrap">
              <p className="meta">
                <span><i className="icon-calendar mr-2"></i>June 28, 2019</span>
                <span><a href="single.html"><i
                  className="icon-folder-o mr-2"></i>{api.category.categoryName}</a></span>
                <span><i className="icon-comment2 mr-2"></i>{api.num_comments} comment(s)</span>
              </p>
            </div>
            <p className="mb-4">{api.description}</p>
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

    //var apis = [defaultLogo, defaultLogo2, defaultLogo3, defaultLogo4, defaultLogo5];

    return (
      <div className="row pt-md-4">
        {this.props.apis.map(api => this.renderOpenAPI(api))}
      </div>
    )

  }

  handlePageClick(data)  {
    let selected = data;
    this.setState({page: selected});
    this.props.loadOpenApis(selected);
  }

  create() {
    let table = []
    table.push(<li><a href="#" onClick = {e=>this.handlePageClick(1)} >&lt;</a></li>)
  //  table.push(<li className="active"><span>{1}</span></li>)
    // Outer loop to create parent
    
    for (let i = 0; i < Math.ceil(this.props.count/5); i++) {
      //Inner loop to create children
      //Create the parent and add the children
    table.push(<li className={classNames({"active": this.state.page==(i+1)})} ><a href="#" onClick = {e=>this.handlePageClick(i+1)}>{i+1}</a></li>)
    }
    table.push(<li onClick = {e=>this.handlePageClick(Math.ceil(this.props.count/5))}><a href="#">&gt;</a></li>)
    return table
  }
  
  renderPaginator() {
    ///{this.createP()}
    return (
      <div className="row">
        <div className="col text-right">
          <div className="paginator">
            <ul>
            {this.create()}
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
  page: openapis.page

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
