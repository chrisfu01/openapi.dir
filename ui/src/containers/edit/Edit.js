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

import SwaggerEditor, {plugins} from 'swagger-editor';

class Edit extends Component {


    constructor(props) {
        super(props);
 
        
    }

    componentDidMount () {
        this.props.loadOpenApiSingle(this.props.match.params.id); 
        let theurl = this.props.url;


        window.editor = SwaggerEditor({
            dom_id: '#swagger-editor',
            layout: 'EditorLayout',
            //url: "https://api.apis.guru/v2/specs/adobe.com/aem/2.5.0-pre/swagger.json",
            //url: theurl,
            plugins: Object.values(plugins),
            swagger2GeneratorUrl: 'https://generator.swagger.io/api/swagger.json',
            oas3GeneratorUrl: 'https://generator3.swagger.io/openapi.json',
            swagger2ConverterUrl: 'https://converter.swagger.io/api/convert',
        });
    }



    render() {
        //{this.props.match.params.id}
     
        return (
            <div id='swagger-editor'></div>
        )

        
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
)(Edit)
  



