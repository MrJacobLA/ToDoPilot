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
//

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function Header({ setSearch }) {
//   const { dispatch } = useTaskContext();

//   return (
//     <div className="navbar bg-base-200 justify-between p-4 flex flex-col md:flex-row gap-4 md:gap-0">
//       {/* Logo links mit Reset zur Startansicht */}
//       <div
//         className="flex items-center gap-2 cursor-pointer text-xl font-bold"
//         onClick={() => dispatch({ type: "RESET_TAB" })}
//       >
//         🗂️ TaskFlow
//       </div>

//       {/* Suchfeld mittig */}
//       <input
//         type="text"
//         placeholder="🔎 Suche Aufgaben..."
//         className="input input-bordered w-full max-w-md mx-auto"
//         onChange={(e) => setSearch(e.target.value)}
//       />
//     </div>
//   );
// }

// export default Header;

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function Header({ setSearch }) {
//   const { dispatch } = useTaskContext();

//   const toggleTheme = () => {
//     const html = document.querySelector("html");
//     const current = html.getAttribute("data-theme");
//     const next = current === "dark" ? "light" : "dark";
//     html.setAttribute("data-theme", next);
//   };

//   return (
//     <div className="navbar bg-base-200 justify-between p-4 flex flex-col md:flex-row gap-4 md:gap-0">
//       {/* 🏠 Logo/Home Button */}
//       <div
//         className="flex items-center gap-2 cursor-pointer text-xl font-bold"
//         onClick={() => dispatch({ type: "RESET_TAB" })}
//       >
//         🗂️ TaskFlow
//       </div>

//       {/* 🔍 Suchleiste */}
//       <input
//         type="text"
//         placeholder="🔎 Suche Aufgaben..."
//         className="input input-bordered w-full max-w-md mx-auto"
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* 🌗 Theme-Switcher */}
//       <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
//         🌓 Theme
//       </button>
//     </div>
//   );
// }

// export default Header;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4">
//       <div className="flex-1">
//         <button
//           className="btn btn-ghost text-xl font-bold"
//           onClick={() => navigate("/")}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       <div className="flex-1 justify-center hidden md:flex">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           className="input input-bordered w-full max-w-md"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="flex-none">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() => {
//               document.documentElement.dataset.theme =
//                 document.documentElement.dataset.theme === "dark"
//                   ? "light"
//                   : "dark";
//             }}
//           />
//           <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M5.64 17.66L4.22 19.07..." />
//           </svg>
//           <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M12 4.5c-4.14 0-7.5..." />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4">
//       {/* Linke Seite: Logo/Home */}
//       <div className="flex-1">
//         <button
//           className="btn btn-ghost text-xl font-bold"
//           onClick={() => navigate("/")}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* Mittig: Suchleiste */}
//       <div className="hidden md:flex flex-1 justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           className="input input-bordered w-full max-w-md"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Rechte Seite: Theme-Switcher */}
//       <div className="flex-none">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "dark" ? "light" : "dark"
//               );
//             }}
//           />
//           {/* Sonne = Hellmodus */}
//           <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M5.64 17.66L4.22 19.07..." />
//           </svg>

//           {/* Mond = Dunkelmodus */}
//           <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M12 4.5c-4.14 0-7.5..." />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4">
//       {/* Link: Logo */}
//       <div className="flex-1">
//         <button
//           className="btn btn-ghost text-xl font-bold"
//           onClick={() => navigate("/")}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* Mitte: Suche */}
//       <div className="hidden md:flex flex-none w-full max-w-md justify-center">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered w-full"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Rechts: Theme Toggle */}
//       <div className="flex-none ml-4">
//         <label className="swap swap-rotate cursor-pointer">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "dark" ? "light" : "dark"
//               );
//             }}
//           />

//           {/* Sonne für Hell */}
//           <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M5.64 17.66L4.22 19.07..." />
//           </svg>

//           {/* Mond für Dunkel */}
//           <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M12 4.5c-4.14 0-7.5..." />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;

// suchleiste mittig nun
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 grid grid-cols-3 items-center px-4">
//       {/* Link: Logo / Home */}
//       <div className="flex justify-start">
//         <button
//           className="btn btn-ghost text-xl font-bold"
//           onClick={() => navigate("/")}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* Mitte: Suche */}
//       <div className="flex justify-center">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered w-full max-w-xs"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Rechts: Theme Toggle */}
//       <div className="flex justify-end">
//         <label className="swap swap-rotate cursor-pointer">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "dark" ? "light" : "dark"
//               );
//             }}
//           />

//           {/* 🌞 Licht */}
//           <svg className="swap-on fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M5.64 17.66L4.22 19.07..." />
//           </svg>

//           {/* 🌙 Dunkel */}
//           <svg className="swap-off fill-current w-6 h-6" viewBox="0 0 24 24">
//             <path d="M12 4.5c-4.14 0-7.5..." />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4 grid grid-cols-3 items-center">
//       {/* LINKS: Logo als Home-Button */}
//       <div className="flex justify-start">
//         <button
//           className="btn btn-ghost text-xl font-bold"
//           onClick={() => navigate("/")}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* MITTE: Suchleiste */}
//       <div className="flex justify-center">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered max-w-sm w-full"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* RECHTS: Theme Switch */}
//       <div className="flex justify-end">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "dark" ? "light" : "dark"
//               );
//             }}
//           />

//           {/* 🌞 Licht */}
//           <svg
//             className="swap-on fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
//           </svg>

//           {/* 🌙 Dunkel */}
//           <svg
//             className="swap-off fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// function Header({ search, setSearch }) {
//   return (
//     <div className="navbar bg-base-100 shadow mb-4">
//       {/* Logo links */}
//       <div className="flex-1">
//         <Link to="/" className="btn btn-ghost normal-case text-xl">
//           🗂️ TaskFlow
//         </Link>
//       </div>

//       {/* Suchfeld zentriert */}
//       <div className="flex-none hidden md:flex justify-center w-1/2">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered w-full"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Theme-Wechsel rechts */}
//       <div className="flex-none">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() =>
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 document.documentElement.getAttribute("data-theme") === "light"
//                   ? "dark"
//                   : "light"
//               )
//             }
//           />
//           <svg
//             className="swap-on fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64 17.64A9 9 0 0012 21a9 9 0 007.36-3.64A9 9 0 0112 3a9 9 0 00-6.36 14.64z" />
//           </svg>
//           <svg
//             className="swap-off fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zM4.22 5.64a1 1 0 011.42 0l1.42 1.42a1 1 0 01-1.42 1.42L4.22 7.06a1 1 0 010-1.42zM2 13a1 1 0 100-2h-2a1 1 0 100 2h2zm16.36-7.36a1 1 0 010 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42a1 1 0 011.42 0zM12 20a1 1 0 011-1v-2a1 1 0 00-2 0v2a1 1 0 001 1zm6.36-2.36a1 1 0 010 1.42l-1.42 1.42a1 1 0 01-1.42-1.42l1.42-1.42a1 1 0 011.42 0zM20 13a1 1 0 100-2h-2a1 1 0 100 2h2zm-9 6a7 7 0 110-14 7 7 0 010 14z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

// function Header({ search, setSearch }) {
//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* Logo links */}
//       <div className="flex-1">
//         <Link to="/" className="btn btn-ghost text-xl normal-case">
//           🗂️ TaskFlow
//         </Link>
//       </div>

//       {/* Suche mittig */}
//       <div className="flex-1 justify-center hidden md:flex">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered w-full max-w-md"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Theme Button rechts */}
//       <div className="flex-none">
//         <label className="swap swap-rotate cursor-pointer">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "light" ? "dark" : "light"
//               );
//             }}
//           />
//           {/* Mond (dunkel) */}
//           <svg
//             className="swap-off fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64 17.64A9 9 0 0012 21a9 9 0 007.36-3.64A9 9 0 0112 3a9 9 0 00-6.36 14.64z" />
//           </svg>
//           {/* Sonne (hell) */}
//           <svg
//             className="swap-on fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm9-8a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM5 12a1 1 0 01-1-1H2a1 1 0 110 2h2a1 1 0 011-1zm13.07 7.07a1 1 0 010 1.41l-1.41 1.42a1 1 0 01-1.41-1.42l1.41-1.41a1 1 0 011.41 0zM6.34 6.34a1 1 0 010-1.41L7.75 3.5a1 1 0 111.41 1.41L7.75 6.34a1 1 0 01-1.41 0zm12.72-1.41a1 1 0 010 1.41l-1.42 1.42a1 1 0 01-1.41-1.42l1.42-1.41a1 1 0 011.41 0zM6.34 17.66a1 1 0 010 1.41L4.93 20.5a1 1 0 01-1.41-1.41l1.41-1.43a1 1 0 011.41 0z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

// function Header({ search, setSearch }) {
//   return (
//     <div className="navbar bg-base-100 shadow mb-4">
//       {/* Linke Seite: Logo/Home */}
//       <div className="flex-none">
//         <Link to="/" className="btn btn-ghost text-xl normal-case">
//           🗂️ TaskFlow
//         </Link>
//       </div>

//       {/* Mitte: Suchfeld */}
//       <div className="flex-1 flex justify-center">
//         <input
//           type="text"
//           placeholder="🔍 Suche Aufgaben..."
//           className="input input-bordered w-full max-w-lg"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Rechte Seite: Theme-Toggle */}
//       <div className="flex-none pr-4">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() => {
//               const current =
//                 document.documentElement.getAttribute("data-theme");
//               document.documentElement.setAttribute(
//                 "data-theme",
//                 current === "light" ? "dark" : "light"
//               );
//             }}
//           />

//           {/* Mond (dark mode) */}
//           <svg
//             className="swap-off fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M21.64 13a9 9 0 11-9.64-9.64 7 7 0 009.64 9.64z" />
//           </svg>

//           {/* Sonne (light mode) */}
//           <svg
//             className="swap-on fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9v2a1 1 0 002 0V3a1 1 0 00-2 0zm0 16v2a1 1 0 002 0v-2a1 1 0 00-2 0zM4.22 4.22l1.42 1.42A1 1 0 006.34 4.22L4.93 2.8a1 1 0 00-1.41 1.42zM17.66 17.66l1.42 1.42a1 1 0 001.41-1.41l-1.41-1.42a1 1 0 00-1.42 1.41zM1 12h2a1 1 0 100-2H1a1 1 0 000 2zm20 0h2a1 1 0 100-2h-2a1 1 0 000 2zM4.22 19.78l1.42-1.42a1 1 0 00-1.42-1.41l-1.41 1.41a1 1 0 001.41 1.42zM19.78 4.22a1 1 0 00-1.42 0l-1.41 1.41a1 1 0 001.41 1.42l1.42-1.42a1 1 0 000-1.41z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ search, setSearch }) {
//   const navigate = useNavigate();

//   return (
//     <header className="navbar bg-base-100 shadow mb-4">
//       {/* Logo + Home-Button */}
//       <div className="flex-1">
//         <button onClick={() => navigate("/")} className="text-xl font-bold">
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* Suchfeld zentriert */}
//       <div className="flex-none w-full md:w-auto md:flex-1 md:justify-center flex justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full md:w-96"
//         />
//       </div>

//       {/* Theme Toggle */}
//       <div className="flex-none ml-4">
//         <label className="swap swap-rotate">
//           <input
//             type="checkbox"
//             onChange={() => document.documentElement.classList.toggle("dark")}
//           />
//           <svg
//             className="swap-on fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64 17.66..." />
//           </svg>
//           <svg
//             className="swap-off fill-current w-6 h-6"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 4.354..." />
//           </svg>
//         </label>
//       </div>
//     </header>
//   );
// }

// export default Header;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useTaskContext } from "../context/TaskContext";

// function Header({ search, setSearch }) {
//   const navigate = useNavigate();
//   const { state } = useTaskContext();

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* 🔙 Logo links */}
//       <div className="flex-1">
//         <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* 🔍 Suchfeld in der Mitte */}
//       <div className="flex-1 flex justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-md"
//         />
//       </div>

//       {/* 🌙 Theme-Wechsler rechts */}
//       <div className="flex-1 flex justify-end">
//         <label className="cursor-pointer grid place-items-center">
//           <input
//             type="checkbox"
//             value="synthwave"
//             className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
//           />
//           <svg
//             className="col-start-1 row-start-1 stroke-base-100 fill-base-100 w-5 h-5 ml-2"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//           >
//             <path d="M5.64 17.657l1.414-1.414A8 8 0 0016.97 7.05l1.415-1.414A10 10 0 015.64 17.657z" />
//           </svg>
//         </label>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTaskContext } from "../context/TaskContext";

// function Header({ search, setSearch }) {
//   const navigate = useNavigate();
//   const { state } = useTaskContext();

//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDark ? "dark" : "light"
//     );
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* 🗂️ Logo links */}
//       <div className="flex-1">
//         <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* 🔍 Suchfeld zentriert */}
//       <div className="flex-1 flex justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-md"
//         />
//       </div>

//       {/* 🌗 Theme-Toggle rechts */}
//       <div className="flex-1 flex justify-end">
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle text-xl"
//         >
//           {isDark ? (
//             <span role="img" aria-label="Sonne">
//               🌞
//             </span>
//           ) : (
//             <span role="img" aria-label="Mond">
//               🌙
//             </span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTaskContext } from "../context/TaskContext";

// function Header({ search, setSearch }) {
//   const navigate = useNavigate();
//   const { state } = useTaskContext();

//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDark ? "dark" : "light"
//     );
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* 🗂️ Logo links */}
//       <div className="flex-1">
//         <button className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* 🔍 Suchfeld zentriert */}
//       <div className="flex-1 flex justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-md"
//         />
//       </div>

//       {/* 🌗 Theme-Toggle rechts */}
//       <div className="flex-1 flex justify-end">
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle text-xl"
//         >
//           {isDark ? (
//             <span role="img" aria-label="Sonne">
//               🌞
//             </span>
//           ) : (
//             <span role="img" aria-label="Mond">
//               🌙
//             </span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Header({ search, setSearch, setActiveTab }) {
//   const navigate = useNavigate();
//   const [isDark, setIsDark] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDark ? "dark" : "light"
//     );
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);

//   return (
//     <div className="navbar bg-base-100 shadow mb-4 px-4">
//       {/* 🗂️ Logo links */}
//       <div className="flex-1">
//         <button
//           className="btn btn-ghost text-xl"
//           onClick={() => {
//             if (setActiveTab) setActiveTab("tasks");
//             navigate("/");
//           }}
//         >
//           🗂️ TaskFlow
//         </button>
//       </div>

//       {/* 🔍 Suchfeld zentriert */}
//       <div className="flex-1 flex justify-center">
//         <input
//           type="text"
//           placeholder="🔎 Suche Aufgaben..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="input input-bordered w-full max-w-md"
//         />
//       </div>

//       {/* 🌗 Theme-Toggle rechts */}
//       <div className="flex-1 flex justify-end">
//         <button
//           onClick={toggleTheme}
//           className="btn btn-ghost btn-circle text-xl"
//         >
//           {isDark ? (
//             <span role="img" aria-label="Sonne">
//               🌞
//             </span>
//           ) : (
//             <span role="img" aria-label="Mond">
//               🌙
//             </span>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Header;

// final and responsive
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ search, setSearch, setActiveTab }) {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="bg-base-100 shadow p-4 mb-4">
      {/* Obere Zeile: Logo + Theme Toggle */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* 🗂️ Logo links */}
        <button
          className="btn btn-ghost text-xl"
          onClick={() => {
            if (setActiveTab) setActiveTab("tasks");
            navigate("/");
          }}
        >
          🗂️ TaskFlow
        </button>

        {/* 🌗 Theme-Toggle rechts */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-xl"
        >
          {isDark ? (
            <span role="img" aria-label="Sonne">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="Mond">
              🌙
            </span>
          )}
        </button>
      </div>

      {/* Suchfeld: immer zentriert darunter */}
      <div className="mt-4 flex justify-center">
        <input
          type="text"
          placeholder="🔎 Suche Aufgaben..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>
    </div>
  );
}

export default Header;
