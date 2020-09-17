import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

//auth is from user model
class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li>
						<a href="/auth/google">
							<button className="btn">Login With Google</button>
						</a>
					</li>
				);
			default:
				return [
					<li key="1">
						<Payments />
					</li>,
					<li key="3" style={{ margin: "0 0px" }}>
						<h5 style={{ margin: " 20px" }}>
							Credits:
							{this.props.auth.credits}
						</h5>
					</li>,
					<li key="2">
						<a href="/api/logout">
							<button className="btn">Logout</button>
						</a>
					</li>
				];
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper grey">
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className="brand-logo left"
					>
						Emaily
					</Link>
					<ul className="right">{this.renderContent()}</ul>
				</div>
			</nav>
		);
	}
}

//auth come from reducer/index.js
//header aware of if person is logged in
function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);
