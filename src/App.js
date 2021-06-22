import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Home from "./components/Home";
import Signup from "./components/Signup";


function App() {
	const [currentTab, setCurrentTab] = useState("home");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
      case "home":
        return <Home />;
			case "search":
				return <Search />;
      case "signup":
        return <Signup />;
			default:
				return null;
		}
	};

	return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
