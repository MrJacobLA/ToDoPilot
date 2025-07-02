// import React from "react";
// import Header from "./components/Header";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen bg-base-200 text-base-content">
//       <Header />
//       <Home />
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* weitere Seiten können hier folgen */}
      </Routes>
    </div>
  );
}

export default App;
