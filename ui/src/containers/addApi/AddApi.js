import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadPubs } from '../../actions/apiActions'
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
      pubid: '',
      selectedFile: null,
      loaded: 0,
    };



    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    //this.props.loadOpenApis(0); 
    this.props.loadPubs(0);
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
                  <select className="form-control">
                    <option>Select a category</option>
                    <option>Technology</option>
                    <option>e-Commerce</option>
                  </select>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="API Name" />
                </div>

                <div className="form-group">
                  <span className="btnlabel text-primary fileinput-button">
                    Click here to select file to upload
                      <input className="file-input" type="file" name="avatar" />
                  </span>
                  <input type="text" placeholder="API Spec File" className="form-control" readOnly />
                </div>



                <div className="form-group">
                  <input type="submit" value="Submit" className="btn btn-primary mt-4 py-3 px-5" />
                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    )
  }

  renderOpenAPI(pb, idx) {
    return (
        <option key={idx} value={pb.id}>{pb.name}</option>
    )
  }

renderOpenAPIs() {
    if (this.props.pub == null && this.props.pub.length == 0) {
      return null;
    }
    return (
      <div className= "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <form >
                <label>
                    <select onChange={this.handleChange.bind(this)}>
                    Company
                    
                {this.props.pub.map((pb, idx)=>this.renderOpenAPI(pb, idx))}
                </select>
                <p></p>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                </label>
                <p></p>
                <input type="button" value="Submit" onClick={this.handleSubmit}/>
            </form>
        </div>
    )

  }


  handleSubmit() {
      const data = new FormData();
      data.append("file", this.state.selectedFile[0]);
      data.append("pubid", this.state.pubid);
      console.log(data.get("pubid"));
      this.props.uploadAPI(data);
  }

  handleChange(event) {
      this.setState({pubid: event.target.value});        
  }

  onChangeHandler=event=>{
      //console.log(event.target.files[0]);
      this.setState({
        selectedFile: event.target.files,
        loaded: 1,
      })
  }

}



const mapStateToProps = ({ publishers, upload }) => ({
  count: publishers.total,
  pub: publishers.publishers,
  uploading: upload.isUploading,
  completed: upload.isComplete
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      uploadAPI: (apiInfo) => uploadAPI(apiInfo),
      loadPubs: (page) => loadPubs(page),
      changePage: () => push('/')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddApi)
