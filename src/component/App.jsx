import React, {Component} from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends Component {
	state = {};
	render() {
		return (
			<>
				<Header />
				<MemeGenerator />
			</>
		);
	}
}

export default App;
