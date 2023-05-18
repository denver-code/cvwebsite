import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/cv.jsx";
import Unit from "./pages/unit.jsx";
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/">
						<Route index={true} element={<Main />} />
					</Route>
					<Route path="/unit">
						<Route index={true} element={<Main />} />
						<Route index={false} path=":unitId" element={<Unit />} />
					</Route>
					<Route path="*" element={<Main />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
