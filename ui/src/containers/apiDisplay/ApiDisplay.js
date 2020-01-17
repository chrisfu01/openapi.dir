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
    loadOpenApiSingle
 } from '../../actions/apiActions';

import {
    RedocStandalone
} from 'redoc';

import {
    uploadAPI
} from '../../actions/apiActions'

class ApiDisplay extends Component {
    componentDidMount() {
        this.props.loadOpenApiSingle(this.props.match.params.id); 
     
    }

    constructor(props) {
        super(props);
        this.state = {
            pubid: '',
            url: "https://api.apis.guru/v2/specs/6-dot-authentiqio.appspot.com/6/swagger.json",
            loaded: 0,
        };
        //console.log("http://localhost:3000/public/yaml/" + this.props.match.params.id);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        //{this.props.match.params.id}
        if (this.props.returnedId) {
            let url = this.props.url;
            if (!url) {
                url = "http://localhost:3000/public/yaml/" + this.props.match.params.id
            }
            return (
                <RedocStandalone specUrl = {url} />   
            )
        }
        else {
            return (
                <div>
                    Loading ...
                </div>
            )
        }

        
    }
}


const mapStateToProps = ({ openapisingle }) => ({
    returnedId: openapisingle.api ? openapisingle.api.id : null,
    url: openapisingle.api ? openapisingle.api.url : null,
  })
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        loadOpenApiSingle: (id) => loadOpenApiSingle(id),
        //changePage: () => push('/about-us')
      },
      dispatch
)
    
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApiDisplay)
  

