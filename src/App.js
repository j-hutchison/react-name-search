import React, { useState } from "react";
import logo from "./logo.svg";
import JSONDATA from "./data/MOCK_DATA.json";
import "./App.css";

function App() {
	const data = JSONDATA;

	const [searchValue, setSearchValue] = useState("");
	const [namesList, setNamesList] = useState(data);

	const handleSearch = (e) => {
		setSearchValue(() => {
			return e.target.value;
		});
	};

	return <div className="App"></div>;
}

export default App;
