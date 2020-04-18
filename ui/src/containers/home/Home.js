import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadOpenApis } from '../../actions/apiActions'
import { Link } from 'react-router-dom'
import Img from 'react-image'


import SearchBox from '../search-box/SearchBox';
import CategoryList from '../category-list/CategoryList';

import ContactUs from '../contact/ContactUs';

import classNames from 'classnames'; 

import qs from 'qs';

class Home extends Component {
  constructor(props) {
    super(props);
    const query = qs.parse(
                  props.location.search ? props.location.search.substring(1) : ''
              );
    this.state = {
        page: 1,
        search: null,
        category_id: query.categoryId
    };

    //this.props.match.params.id

  }

  componentDidMount() {
    this.props.loadOpenApis(this.state);
  }
  

  componentWillReceiveProps(next) {
    const query = qs.parse(
      next.location.search ? next.location.search.substring(1) : ''
    );

    if (this.state.category_id != query.categoryId) {
      this.setState({
        category_id: query.categoryId
        }, function() {this.props.loadOpenApis(this.state);});
    }

  }

  renderOpenAPI(api, rapi) {

    return (
      <div className="col-md-12">
        <div className="api-entry  d-md-flex">
          <Link to={`/show-api/${api.id}`} className="img img-2" style={{backgroundImage: `url(${(api.avatar_url != null) ? api.avatar_url : "http://pngimages.net/sites/default/files/download-logo-png-image-16277.png"})`}}></Link>
          <div className="text text-2 pl-md-4">
            <h3 className="mb-2"> <Link to={`/show-api/${api.id}`}>{api.name}</Link>
            </h3>

            <div className="author d-flex align-items-center">
              <div className="info">
                <span>{api.publisher && api.publisher.name}</span>
              </div>
            </div>

            <div className="meta-wrap">
              <p className="meta">
                <span><i className="icon-calendar mr-2"></i>{this.formatDate(api.created_at)}</span>
                <span><a onClick = {e=>this.doFilter(api.category_id)}><i
                  className="icon-folder-o mr-2" ></i>{api.category.categoryName}</a></span>
                <span><i className="icon-comment2 mr-2"></i>{api.num_comments} comment(s)</span>
              </p>
            </div>
            <p className="mb-4">{api.description}</p>
            <p> <Link to={`/show-api/${api.id}`}>View Spec</Link> <span
              className="ion-ios-arrow-forward"></span></p>
          </div>
        </div>
      </div>
    )
  }

  formatDate(d) {
    const d8 = new Date(d);
    return ((d8.getMonth()+ 1)+ "/" + d8.getDate() + "/" + d8.getFullYear());

  }

  renderOpenAPIs() {

    return (
      <div className="row pt-md-4">
        {this.props.apis.map(api => this.renderOpenAPI(api))}
      </div>
    )

  }

  handlePageClick(data)  {
    this.setState({page: data}, function(){this.props.loadOpenApis(this.state);});
    this.render();
  }

  
  doFilter(data)  {

  }
  

  doSearch(data) {
    
    this.setState({page: 1, search: data}, function(){ this.props.loadOpenApis(this.state);});
  }

  create() {
    let table = []
    table.push(<li><a href="#" onClick = {e=>this.handlePageClick(1)} >&lt;</a></li>)
    // Outer loop to create parent
    if (Math.ceil(this.props.count/10) <= 5 || this.state.page<5) {
      for (let i = 0; i < 5; i++) {
        table.push(<li className={classNames({"active": this.state.page==(i+1)})} ><a href={"#" + (i + 1)} onClick = {e=>this.handlePageClick(i+1)}>{i+1}</a></li>)
      }
    } else if (this.state.page <= Math.ceil(this.props.count/10) && this.state.page >= Math.ceil(this.props.count/10)-4) {
      for (let i = Math.ceil(this.props.count/10)-5; i < Math.ceil(this.props.count/10); i++) {
        table.push(<li className={classNames({"active": this.state.page==(i+1)})} ><a href={"#" + (i + 1)}  onClick = {e=>this.handlePageClick(i+1)}>{i+1}</a></li>)
      }
    } else {
      for (let i = this.state.page-3; i < this.state.page+2; i++) {        
        table.push(<li className={classNames({"active": this.state.page==(i+1)})} ><a href={"#" + (i + 1)}  onClick = {e=>this.handlePageClick(i+1)}>{i+1}</a></li>)
      }
    }
    table.push(<li onClick = {e=>this.handlePageClick(Math.ceil(this.props.count/10))}><a href="#">&gt;</a></li>)
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
        <div className="container-fluid">
          <div className="row d-flex">
            <div className="col-xl-8 py-5 px-md-5">
              {this.renderOpenAPIs()}
              {this.renderPaginator()}
            </div>
            <div className="col-xl-4 sidebar  bg-light pt-5">
              <SearchBox doSearch={this.doSearch.bind(this)} /> 
              <CategoryList doFilter = {this.doFilter.bind(this)} />
              
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
      loadOpenApis: (params) => loadOpenApis(params),
      changePage: () => push('/about-us')
    },
    dispatch
  )






export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
