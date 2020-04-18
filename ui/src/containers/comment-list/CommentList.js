import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadComments } from '../../actions/apiActions'
import { Link } from 'react-router-dom'


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            api_id: 0,
            mycomments: 0
        };
    }

    componentDidMount() {
        if (this.props.api_id) {
            //this.setState({api_id: this.props.api_id});
            this.props.loadComments(this.props.api_id);
            
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.commentnumber);
        if (prevProps.commentnumber !== this.props.commentnumber) {
          this.props.loadComments(this.props.api_id);
        }
    }


    renderComments(comment) {
        //return (<li><a href="#" onClick = {e=>this.handlePageClick(category.id)}>{category.name} <span>({category.counter})</span></a></li>)
        return (
        <li class="comment">
            <div class="vcard bio">
            </div>
        <div class="comment-body">
            <h3>Anon at {comment.created_ip}</h3>
                <div class="meta">{comment.created_at}</div>
                <p>{comment.comments}</p>
        </div>
        </li>
        )
    }

    render() {
        return (
            <div class="pt-5 mt-5">
                <h3 class="mb-5 font-weight-bold">{this.props.total} Comments</h3>
                <ul class="comment-list">
                    {this.props.commentList && this.props.commentList.map(comment => this.renderComments(comment))}
                </ul>
            </div>

        )
    }
}

const mapStateToProps = ({comments}) => ({
    // map the store categories to props
    total: comments.total,
    commentList: comments.comments,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            // bind the action to prop, load the categories
            loadComments: (id) => loadComments(id),
        },
        dispatch
    )
    

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentList)
