import React, { Component,} from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'; 

class Aside extends Component {
    renderUser() {
        return (
            <h5 className="text-primary mb-5">Hello, {this.props.user.firstname}</h5>
        )
    }

    render() {
        console.log(this.props.location.pathname);
        const path = this.props.location.pathname; 
        return (
            <aside id="site-aside" className="js-fullheight">
                <h1 id="site-logo" className="mb-4">
                    <Link  to="/" className="logo">API.dir</Link>
                </h1>
                {this.props.user && this.renderUser()}

                <nav id="site-main-menu" role="navigation">
                    <ul>
                        <li className={classNames({"site-active": path=='/'})} ><Link to="/">API's</Link></li>
                        <li className={classNames({"site-active": path=='/add-api'})}><Link to="/add-api">Submit My API</Link></li>
                        {!this.props.user && <li className={classNames({"site-active": path=='/register'})}><Link to="/register">Register</Link></li>}
                        {!this.props.user && <li className={classNames({"site-active": path=='/login'})}><Link to="/login">Login</Link></li>}

                        {this.props.user && <li className={classNames("mt-4", {"site-active": path=='/logout'})}><a onClick={e=>this.props.logout(e)} href="#">Log out</a></li>}
                    
                    </ul>
                </nav>

                <div className="site-footer">
				    <div className="mb-4">
					<h3>Subscribe for newsletter</h3>
					<form action="#" className="site-subscribe-form">
						<div className="form-group d-flex">
							<div className="icon"><span className="icon-paper-plane"></span></div>
							<input type="text" className="form-control" placeholder="Enter Email Address" />
						</div>
					</form>
				    </div>
				    <p className="pfooter">
					Copyright &copy;
					<script>document.write(new Date().getFullYear());</script> Christian Fu & Contributors</p>
			    </div>

            </aside>    
           
        );
    }
}

export default withRouter(Aside); 