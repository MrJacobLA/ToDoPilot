// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import { TaskProvider } from "./context/TaskContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <TaskProvider>
//       <App />
//     </TaskProvider>
//   </React.StrictMode>
// );
// /

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </React.StrictMode>
);
