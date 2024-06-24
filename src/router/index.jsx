import { createBrowserRouter } from "react-router-dom";
import HomeLayoutContainer from "../pages/Home";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayoutContainer />,
	},
]);

export default routes;
