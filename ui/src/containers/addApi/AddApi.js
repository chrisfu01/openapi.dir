import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loadOpenApis } from '../../actions/apiActions'
import { Form, Input } from 'reactstrap'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
import { uploadAPI } from '../../actions/apiActions'

class AddApi extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categoryId: null,
      selectedFile: null,
      apiName: null,
      loaded: 0,
      filename: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.user == null) {
      this.props.gotoLogin();
    }
    else {
      // load all the categories
      // this.props.loadCategories();
    }
    
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.completed && prevProps.completed == false) {
      this.props.changePage();
    }
  }

  render() {
    return (
      <section className="api-section contact-section px-md-4">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
            <div className="col-md-12 mb-4">
              <h2 className="h3">Add My API</h2>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-md-12 d-flex">
              <form action="#" className="bg-light p-5 contact-form">
                <div className="form-group">
                  <select className="form-control" onChange={e=>this.handleCategoryChange(e)}>
                    <option>Select a category</option>
                    <option value="1">Technology</option>
                    <option  value="2">e-Commerce</option>
                  </select>
                </div>

                <div className="form-group">
                  <input type="text" value={this.state.apiName} className="form-control" placeholder="API Name" 
                    onChange={e=>this.handleApiNameChange(e)} />
                </div>

                <div className="form-group">
                  <span className="btnlabel text-primary fileinput-button">
                    Click here to select file to upload
                    <input type="file" name="file" onChange={this.onChangeHandler}/>
                  </span>
                  <input type="text" value={this.state.filename}  placeholder="API Spec File" 
                    className="form-control" readOnly />
                </div>

                <div className="form-group">
                  <input type="button" onClick={this.handleSubmit} value="Submit" className="btn btn-primary mt-4 py-3 px-5" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    )
  }

  handleSubmit() {
      const data = new FormData();
      data.append("file", this.state.selectedFile);
      data.append("categoryId", this.state.categoryId);
      if (this.state.apiName) {
        data.append("apiName", this.state.apiName);
      }
      
      console.log(data);

      this.props.uploadAPI(data);
  }

  handleChange(event) {
      this.setState({pubid: event.target.value});        
  }

  handleCategoryChange(event) {
    this.setState({categoryId: event.target.value});        
  }

  handleApiNameChange(event) {
    this.setState({apiName: event.target.value});        
  }

  onChangeHandler=event=>{
      console.log(event.target.files[0]);

      this.setState({
        selectedFile: event.target.files[0],
        filename: event.target.files[0].name,
        loaded: 1,
      })
  }

}

const mapStateToProps = ({ publishers, upload, auth }) => ({
  count: publishers.total,
  uploading: upload.isUploading,
  completed: upload.isComplete, 
  user: auth.user,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadAPI: (apiInfo) => uploadAPI(apiInfo),
      changePage: () => push('/'),
      gotoLogin: () =>push('/login')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddApi)
