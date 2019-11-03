import React, { Component, Fragment } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'; 
import validator from 'validator'
import FormValidator from '../../utils/FormValidator';
import { authenticate } from '../../actions/apiActions'; 

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            validation: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        // create validation rules 
        this.formValidator = new FormValidator( [
            {
                field: 'email',
                method: validator.isEmpty,
                validWhen: false,
            },
            {
                field: 'email',
                method: validator.isEmail,
                validWhen: true,
            },
            {
                field: 'password',
                method: validator.isEmpty,
                validWhen: false,
            },
        ]);
    }

    componentDidUpdate(prevProps) {
        if (this.props.user && !prevProps.user ) {
            this.props.myProfile();
        }
    }

    renderLoginError() {
        if (!this.props.loginError) return null; 
        return (
            <div className="alert alert-danger">
                Invalid email or/and password
            </div>
        )
    }

    render() {
        return (
            <section className="api-section contact-section px-md-4">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="col-md-9 offset-md-3 mb-4">
                            <h2 className="h3">Login</h2>
                        </div>
                    </div>

                    <div className="row block-9">
                        <div className="col-md-6  col-sm-12 offset-md-3">
                            {this.renderLoginError()}
                            <form action="#" className="bg-light p-5 contact-form">
                                <div className="form-group">
                                    <input onChange={e=>this.handleChange(e, 'email')} type="text" className={classnames("form-control", {"is-invalid":  this.state.validation && this.state.validation.email.isInvalid })} placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input onChange={e=>this.handleChange(e, 'password')} type="password" className={classnames("form-control", {"is-invalid":  this.state.validation && this.state.validation.password.isInvalid })} placeholder="Password" />
                                </div>

                                <div className="form-group">
                                    <input type="button" onClick={this.handleSubmit} value="Submit" className="btn btn-primary py-3 px-5" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    handleSubmit() {
        // validate the form 
        let validation = this.formValidator.validate(this.state);
        this.setState({validation: validation}); 

        if (validation.isValid) {  
           this.props.authenticate(this.state.email, this.state.password); 
        }
    }

    handleChange(event, field) {
        switch (field) {
            case 'email':
                this.setState({ email: event.target.value });
                break;
            case 'password':
                this.setState({ password: event.target.value });
                break;

        }
    }
}

const mapStateToProps = ({ auth }) => ({
    user: auth.user,
    loginError: auth.error
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            myProfile: () => push('/my-profile'),
            authenticate: (email, password) => authenticate(email, password),
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
