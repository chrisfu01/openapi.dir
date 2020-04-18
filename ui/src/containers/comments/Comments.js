import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { comment } from '../../actions/apiActions'
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import CommentList from '../comment-list/CommentList';



class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: '',
            commentnumber: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //this.props.loadCats();
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log(this.state.commentnumber);
        if (!prevProps.issuccessful && this.props.issuccessful) {
          this.setState({commentnumber: this.state.commentnumber + 1});
        }
    }

    handleChange(event, field) {
        this.setState({comments: event.target.value});
    }

    
    handleSubmit () {
        this.props.comment(this.props.api_id, this.state.comments);
    }


    render() {
        return (
            <div>
                <Input type="textarea" value={this.state.comments} onChange={this.handleChange} placeholder="What are you thinking?" rows={5} />
                <Button className="mt-4" color="primary" onClick={this.handleSubmit}>Submit</Button>
                <CommentList api_id = {this.props.api_id} commentnumber = {this.state.commentnumber} ></CommentList>
            </div>
            

        )
    }
}

const mapStateToProps = ({ comments }) => ({
    // map the store categories to props
    //categories: categories.categories,
    issuccessful: comments.postsuccess
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the categories
            comment: (id, comments) => comment(id, comments)
        },
        dispatch
    )
    

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Comments)
