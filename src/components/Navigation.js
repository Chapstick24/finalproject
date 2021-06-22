import React from "react";

function Navigation(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<nav>
			<ul className="flex-row mobile-view">
				<li className={currentTab === "home" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("home")}>Home</span>
				</li>
                <li className={currentTab === "search" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("search")}>Search</span>
				</li>
                <li className={currentTab === "signup" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("signup")}>Sign up</span>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;