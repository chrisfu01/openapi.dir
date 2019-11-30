import React, {
    Component,
    Fragment
} from 'react'
import {
    push
} from 'connected-react-router'
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'
import {
    loadPubs
} from '../../actions/apiActions'
import {
    loadOpenApis
} from '../../actions/apiActions'
import {
    RedocStandalone
} from 'redoc';

import {
    uploadAPI
} from '../../actions/apiActions'

class ApiDisplay extends Component {
    componentDidMount() {
        //this.props.loadOpenApis(0); 
        //this.props.loadPubs(0);
    }

    constructor(props) {
        super(props);
        this.state = {
            pubid: '',
            selectedFile: null,
            loaded: 0,
        };

        console.log(this.props.match.params.id);

        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (<RedocStandalone specUrl={"http://localhost:3000/public/yaml/" + this.props.match.params.id} />
        )
    }
}

export default ApiDisplay;