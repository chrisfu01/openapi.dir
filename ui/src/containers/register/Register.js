import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadOpenApis } from '../../actions/apiActions'
import {Form, Input} from 'reactstrap'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'

import { register } from '../../actions/apiActions'

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            web: '',
            contact: '',
        };

        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    
  
    componentDidMount() {
        console.log("log");
    }

    renderOld() {
        return (
            
            <div className= "position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                Please register your company!
                <form onSubmit={this.handleSubmit}>
                <label>
                    Company Name: 
                <input type="text" value={this.state.value} onChange={e=>this.handleChange(e, 'name')} />
                </label>
                <p></p>
                <label>
                    Company Website: 
                <input type="text" value={this.state.value} onChange={e=>this.handleChange(e, 'web')} />
                </label>
                <p></p>
                <label>
                    Point of Contact: 
                <input type="text" value={this.state.value} onChange={e=>this.handleChange(e, 'contact')} />
                </label>
                <p></p>
                <label>
                    Email: 
                <input type="text" value={this.state.value} onChange={e=>this.handleChange(e, 'email')} />
                </label>
                <p></p>
                <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    render() {
        return (
            <section className="api-section contact-section px-md-4">
				<div className="container">
                    <div className="row d-flex mb-5 contact-info">
					    <div className="col-md-9 offset-md-3 mb-4">
                            <h2 className="h3">Register</h2>
                        </div>
                    </div>
                    
                    <div className="row block-9">
                        <div className="col-md-6  col-sm-12 offset-md-3 d-flex">
                            <form action="#" className="bg-light p-5 contact-form">
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Company Name" />
                                </div>
                                <div className="form-group">
                                  <textarea name="" id="" cols="30" rows="7" className="form-control" 
                                    placeholder="Brief Description of Your Description"></textarea>
                                </div>
                                <div className="form-group">
                                  <input type="submit" value="Submit" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                            
                        </div>
                    </div>
				</div>
			</section>
                  
        )
    }

    handleSubmit() {
        console.log(this.state);
        /*
        alert(this.state.web);
        alert(this.state.name);
        alert(this.state.email);
        alert(this.state.contact);
        */
       
        this.props.register(this.state);
    }

    handleChange(event, field) {
        switch (field ) {
            case 'web':
                this.setState({web: event.target.value});
                break;
            case 'name':
                this.setState({name: event.target.value});
                break;
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'contact':
                this.setState({contact: event.target.value});
                break;

        }
    }
}



const mapStateToProps = ({ openapis }) => ({
  //count: openapis.total,
  //apis: openapis.apis,
 
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      register: (companyInfo) => register(companyInfo),
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
