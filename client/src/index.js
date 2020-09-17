import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";
import { Button, Card, Row, Col } from "react-materialize";

import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
