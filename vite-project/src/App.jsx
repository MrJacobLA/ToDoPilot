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
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="min-h-screen bg-base-200 text-base-content">
//       {/* <Header /> */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* weitere Seiten können hier folgen */}
//       </Routes>
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";

// function App() {
//   // 💡 Suche global im Header
//   const [search, setSearch] = useState("");

//   return (
//     <div className="min-h-screen bg-base-200 text-base-content">
//       {/* ⬆️ Header mit Suchfeld & DarkMode */}
//       <Header setSearch={setSearch} />

//       {/* Seitenrouten */}
//       <Routes>
//         <Route path="/" element={<Home search={search} />} />
//         {/* Weitere Seiten (optional) */}
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-base-200 text-base-content">
      {/* <Header search={search} setSearch={setSearch} /> */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
        </Routes>
      </main>
      <footer className="text-center py-4 text-sm opacity-60">
        © {new Date().getFullYear()} TaskFlow – Abschlussprojekt WBS Coding
        School - Jacob Latiff
      </footer>
    </div>
  );
}

export default App;
