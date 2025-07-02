// import React from "react";

// function Header() {
//   // toggleTheme für  das Farbschema (Theme)
//   const toggleTheme = () => {
//     const html = document.documentElement; //Holt das <html>-Element aus dem DOM
//     const current = html.getAttribute("data-theme") || "light";
//     // Liest das aktuelle Theme aus dem data-theme-Attribut, Standard ist "light"
//     html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
//     // Setzt das data-theme-Attribut auf das jeweils andere Theme ("dark" <-> "light")
//     //Ist === dark? wenn nicht : wechsel
//   };

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* Logo  */}
//       <div className="flex-1 text-xl font-bold">TaskFlow</div>
//       <div className="flex-none">
//         {/* // Button  */}
//         <button className="btn btn-sm" onClick={toggleTheme}>
//           Theme wechseln
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme") || "light";
    html.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar bg-base-100 shadow mb-4 px-4">
      {/* Logo als Link zur Startseite */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold hover:underline">
          🌟 TaskFlow
        </Link>
      </div>

      {/* Dark Mode Toggle */}
      <div className="flex-none">
        <button className="btn btn-sm" onClick={toggleTheme}>
          Theme wechseln
        </button>
      </div>
    </div>
  );
}

export default Header;
