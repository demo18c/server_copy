import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

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
				<div className="nav-wrapper blue">
					<Link
						to={this.props.auth ? "/surveys" : "/"}
						className="left brang-logo"
					>
						<h3>Emaily</h3>
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
