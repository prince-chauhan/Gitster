import("./styles/main.scss");
import React from "react";
import ReactDOM from "react-dom";
import users from "./components/usernames_arr";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { AppContainer } from "react-hot-loader";
import { rehydrate, hotRehydrate } from "rfx-core";

import { isProduction } from "./utils/constants";
import App from "./components/App";
import stores from "./stores/stores";


const store = rehydrate();

const renderApp = Component => {
	render(
		<AppContainer>
			<Router>
				<Provider store={isProduction ? store : hotRehydrate()}>
					<App users = {users}/>
				</Provider>
			</Router>
		</AppContainer>,
		document.getElementById("root")
	);
};


renderApp(App);

if (module.hot) {
	module.hot.accept(() => renderApp(App));
}


//ReactDOM.render(<App users={users} />, document.getElementById("root"))
