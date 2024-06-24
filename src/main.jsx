import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import routes from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routes} />);

