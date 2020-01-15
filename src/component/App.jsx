import React, {Component} from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Header />
				<MemeGenerator />
			</React.Fragment>
		);
	}
}

export default App;
