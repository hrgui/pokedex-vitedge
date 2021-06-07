import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import vitedge from "vitedge";
import routes from "./routes";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

export default vitedge(App, { routes }, () => {});
