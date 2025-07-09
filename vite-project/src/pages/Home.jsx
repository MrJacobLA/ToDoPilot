// // // //

// // // import React, { useState } from "react";
// // // import TaskForm from "../components/TaskForm";
// // // import TaskList from "../components/TaskList";
// // // import CompletedTasks from "../components/CompletedTasks";
// // // import Timer from "../components/Timer";
// // // import PomodoroTimer from "../components/PomodoroTimer";
// // // import SortFilterBar from "../components/SortFilterBar";

// // // function Home() {
// // //   const [activeTab, setActiveTab] = useState("tasks");

// // //   return (
// // //     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
// // //       {/* Linke Spalte: Timer */}
// // //       <div className="col-span-3 md:col-span-1 space-y-4">
// // //         <Timer />
// // //         <PomodoroTimer />
// // //       </div>

// // //       {/* Rechte Spalte: Aufgabenverwaltung */}
// // //       <div className="col-span-3 md:col-span-2 space-y-4">
// // //         {/* Tab-Wechsler */}
// // //         <div className="tabs tabs-boxed">
// // //           <button
// // //             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
// // //             onClick={() => setActiveTab("tasks")}
// // //           >
// // //             📝 Aktive Aufgaben
// // //           </button>
// // //           <button
// // //             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
// // //             onClick={() => setActiveTab("completed")}
// // //           >
// // //             ✅ Erledigt
// // //           </button>
// // //         </div>

// // //         {/* Inhalte je nach Tab */}
// // //         {activeTab === "tasks" && (
// // //           <>
// // //             <SortFilterBar />
// // //             <TaskForm />
// // //             <TaskList />
// // //           </>
// // //         )}

// // //         {activeTab === "completed" && <CompletedTasks />}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Home;
// // import React, { useState } from "react";
// // import TaskForm from "../components/TaskForm";
// // import TaskList from "../components/TaskList";
// // import CompletedTasks from "../components/CompletedTasks";
// // import Timer from "../components/Timer";
// // import PomodoroTimer from "../components/PomodoroTimer";
// // import SortFilterBar from "../components/SortFilterBar";

// // function Home() {
// //   const [activeTab, setActiveTab] = useState("tasks");
// //   const [usePomodoro, setUsePomodoro] = useState(false); // Umschalter

// //   return (
// //     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
// //       {/* Linke Spalte: Timer */}
// //       <div className="col-span-3 md:col-span-1 space-y-4">
// //         <div className="flex justify-between items-center">
// //           <h2 className="text-lg font-semibold">
// //             {usePomodoro ? "🍅 Pomodoro-Modus" : "⏱ Standard-Timer"}
// //           </h2>
// //           <div className="flex gap-2">
// //             <button
// //               className={`btn btn-xs ${!usePomodoro ? "btn-active" : ""}`}
// //               onClick={() => setUsePomodoro(false)}
// //             >
// //               Standard
// //             </button>
// //             <button
// //               className={`btn btn-xs ${usePomodoro ? "btn-active" : ""}`}
// //               onClick={() => setUsePomodoro(true)}
// //             >
// //               Pomodoro
// //             </button>
// //           </div>
// //         </div>

// //         {!usePomodoro && <Timer />}
// //         {usePomodoro && <PomodoroTimer />}
// //       </div>

// //       {/* Rechte Spalte: Aufgabenverwaltung */}
// //       <div className="col-span-3 md:col-span-2 space-y-4">
// //         {/* Tabs */}
// //         <div className="tabs tabs-boxed">
// //           <button
// //             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
// //             onClick={() => setActiveTab("tasks")}
// //           >
// //             📝 Aktive Aufgaben
// //           </button>
// //           <button
// //             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
// //             onClick={() => setActiveTab("completed")}
// //           >
// //             ✅ Erledigt
// //           </button>
// //         </div>

// //         {/* Inhalte je nach Tab */}
// //         {activeTab === "tasks" && (
// //           <>
// //             <SortFilterBar />
// //             <TaskForm />
// //             <TaskList />
// //           </>
// //         )}

// //         {activeTab === "completed" && <CompletedTasks />}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;
// import React, { useState } from "react";
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";

// function Home() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [showPomodoro, setShowPomodoro] = useState(false);

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
//       {/* Linke Spalte: Timer */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         <div className="card bg-base-100 p-4 shadow">
//           <h2 className="text-lg font-semibold mb-2">⏱ Standard-Timer</h2>
//           <Timer />
//         </div>

//         <div className="card bg-base-100 p-4 shadow">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-semibold">🍅 Pomodoro-Modus</h2>
//             <button
//               className="btn btn-sm"
//               onClick={() => setShowPomodoro((prev) => !prev)}
//             >
//               {showPomodoro ? "Ausblenden" : "Anzeigen"}
//             </button>
//           </div>

//           {showPomodoro && <PomodoroTimer />}
//           {!showPomodoro && (
//             <p className="text-sm text-gray-500">Nicht aktiviert</p>
//           )}
//         </div>
//       </div>

//       {/* Rechte Spalte: Aufgabenverwaltung */}
//       <div className="col-span-3 md:col-span-2 space-y-4">
//         {/* Tabs */}
//         <div className="tabs tabs-boxed">
//           <button
//             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("tasks")}
//           >
//             📝 Aktive Aufgaben
//           </button>
//           <button
//             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("completed")}
//           >
//             ✅ Erledigt
//           </button>
//         </div>

//         {/* Inhalte je nach Tab */}
//         {activeTab === "tasks" && (
//           <>
//             <SortFilterBar />
//             <TaskForm />
//             <TaskList />
//           </>
//         )}

//         {activeTab === "completed" && <CompletedTasks />}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from "react";
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";

// function Home() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [sortKey, setSortKey] = useState("createdAt");
//   const [showPomodoro, setShowPomodoro] = useState(false);

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
//       {/* Linke Spalte: Timer */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         {/* Standard Timer */}
//         <div className="card bg-base-100 p-4 shadow">
//           <h2 className="text-lg font-semibold mb-2">⏱ Standard-Timer</h2>
//           <Timer />
//         </div>

//         {/* Pomodoro Timer (umschaltbar) */}
//         <div className="card bg-base-100 p-4 shadow">
//           <div className="flex justify-between items-center mb-2">
//             <h2 className="text-lg font-semibold">🍅 Pomodoro-Modus</h2>
//             <button
//               className="btn btn-sm"
//               onClick={() => setShowPomodoro((prev) => !prev)}
//             >
//               {showPomodoro ? "Ausblenden" : "Anzeigen"}
//             </button>
//           </div>

//           {showPomodoro ? (
//             <PomodoroTimer />
//           ) : (
//             <p className="text-sm text-gray-500">Nicht aktiviert</p>
//           )}
//         </div>
//       </div>

//       {/* Rechte Spalte: Aufgabenverwaltung */}
//       <div className="col-span-3 md:col-span-2 space-y-4">
//         {/* Tabs */}
//         <div className="tabs tabs-boxed">
//           <button
//             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("tasks")}
//           >
//             📝 Aktive Aufgaben
//           </button>
//           <button
//             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("completed")}
//           >
//             ✅ Erledigt
//           </button>
//         </div>

//         {/* Inhalte je nach Tab */}
//         {activeTab === "tasks" && (
//           <>
//             <SortFilterBar sortKey={sortKey} setSortKey={setSortKey} />
//             <TaskForm />
//             <TaskList sortKey={sortKey} />
//           </>
//         )}

//         {activeTab === "completed" && <CompletedTasks />}
//       </div>
//     </div>
//   );
// }

// export default Home;
// // TO local storage SpeechSynthesisErrorEvent, postejn

// import React, { useState } from "react";
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";
// import TaskFilters from "../components/TaskFilters";

// function Home() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [search, setSearch] = useState("");
//   const [sortKey, setSortKey] = useState("createdAt");
//   const [filters, setFilters] = useState({ category: null, plan: null });

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
//       {/* Linke Spalte: Timer */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         <Timer />
//         <PomodoroTimer />
//       </div>

//       {/* Rechte Spalte: Tabs + Aufgaben */}
//       <div className="col-span-3 md:col-span-2 space-y-4">
//         <div className="tabs tabs-boxed">
//           <button
//             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("tasks")}
//           >
//             📝 Aktive Aufgaben
//           </button>
//           <button
//             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("completed")}
//           >
//             ✅ Erledigt
//           </button>
//         </div>

//         {activeTab === "tasks" && (
//           <>
//             <SortFilterBar
//               sortKey={sortKey}
//               setSortKey={setSortKey}
//               search={search}
//               setSearch={setSearch}
//             />
//             <TaskFilters filters={filters} setFilters={setFilters} />
//             <TaskForm />
//             <TaskList sortKey={sortKey} search={search} filters={filters} />
//           </>
//         )}

//         {activeTab === "completed" && <CompletedTasks />}
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useState } from "react";
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";
// import TaskFilters from "../components/TaskFilters";

// function Home({ search }) {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [sortKey, setSortKey] = useState("createdAt");
//   const [filters, setFilters] = useState({
//     category: null,
//     plan: null,
//   });

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
//       {/* ⏱ Linke Spalte: Timer + Pomodoro */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         <Timer />
//         <PomodoroTimer />
//       </div>

//       {/* 📋 Rechte Spalte: Aufgaben + Tabs */}
//       <div className="col-span-3 md:col-span-2 space-y-4">
//         {/* 🗂 Tabs */}
//         <div className="tabs tabs-boxed">
//           <button
//             className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("tasks")}
//           >
//             📝 Aktive Aufgaben
//           </button>
//           <button
//             className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
//             onClick={() => setActiveTab("completed")}
//           >
//             ✅ Erledigt
//           </button>
//         </div>

//         {/* 📂 Inhalte je nach Tab */}
//         {activeTab === "tasks" && (
//           <>
//             {/* 🔎 Sortierung & Suche */}
//             <SortFilterBar
//               sortKey={sortKey}
//               setSortKey={setSortKey}
//               search={search}
//               setSearch={() => {}} // wird über Header gesteuert
//             />

//             {/* 🔘 Filterleiste */}
//             <TaskFilters filters={filters} setFilters={setFilters} />

//             {/* ➕ Neue Aufgabe */}
//             <TaskForm />

//             {/* 📋 Aktive Aufgabenliste */}
//             <TaskList sortKey={sortKey} search={search} filters={filters} />
//           </>
//         )}

//         {activeTab === "completed" && <CompletedTasks />}
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useState } from "react";
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";
// import TaskFilters from "../components/TaskFilters";

// function Home() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [search, setSearch] = useState("");
//   const [sortKey, setSortKey] = useState("createdAt");
//   const [filters, setFilters] = useState({ category: null, plan: null });

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4 pb-8">
//       {/* Linke Spalte: Timer nur bei aktiver Aufgabe */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         {activeTab === "tasks" && (
//           <>
//             <Timer />
//             <PomodoroTimer />
//           </>
//         )}
//       </div>

//       {/* Rechte Spalte */}
//       <div className="col-span-3 md:col-span-2 space-y-4">
//         {/* Navigation Tabs */}
//         <div className="flex gap-2">
//           <button
//             className={`btn ${
//               activeTab === "tasks" ? "btn-primary" : "btn-outline"
//             }`}
//             onClick={() => setActiveTab("tasks")}
//           >
//             📝 Aktive Aufgaben
//           </button>
//           <button
//             className={`btn ${
//               activeTab === "completed" ? "btn-primary" : "btn-outline"
//             }`}
//             onClick={() => setActiveTab("completed")}
//           >
//             ✅ Erledigt
//           </button>
//         </div>

//         {activeTab === "tasks" && (
//           <>
//             <SortFilterBar
//               sortKey={sortKey}
//               setSortKey={setSortKey}
//               search={search}
//               setSearch={setSearch}
//             />
//             <TaskFilters filters={filters} setFilters={setFilters} />
//             <TaskForm />
//             <TaskList sortKey={sortKey} search={search} filters={filters} />
//           </>
//         )}

//         {activeTab === "completed" && <CompletedTasks />}
//       </div>
//     </div>
//   );
// }

// export default Home;
// import React, { useState } from "react";
// import Header from "../components/Header"; // <== NEU!
// import TaskForm from "../components/TaskForm";
// import TaskList from "../components/TaskList";
// import CompletedTasks from "../components/CompletedTasks";
// import Timer from "../components/Timer";
// import PomodoroTimer from "../components/PomodoroTimer";
// import SortFilterBar from "../components/SortFilterBar";
// import TaskFilters from "../components/TaskFilters";

// function Home() {
//   const [activeTab, setActiveTab] = useState("tasks");
//   const [search, setSearch] = useState("");
//   const [sortKey, setSortKey] = useState("createdAt");
//   const [filters, setFilters] = useState({ category: null, plan: null });

//   return (
//     <>
//       {/* ✅ Header mit Suche, Theme und Home-Button */}
//       <Header
//         search={search}
//         setSearch={setSearch}
//         setActiveTab={setActiveTab}
//       />

//       <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4 pb-8">
//         {/* Linke Spalte: Timer nur bei aktiver Aufgabe */}
//         <div className="col-span-3 md:col-span-1 space-y-4">
//           {activeTab === "tasks" && (
//             <>
//               <Timer />
//               <PomodoroTimer />
//             </>
//           )}
//         </div>

//         {/* Rechte Spalte */}
//         <div className="col-span-3 md:col-span-2 space-y-4">
//           {/* Navigation Tabs */}
//           <div className="flex gap-2">
//             <button
//               className={`btn ${
//                 activeTab === "tasks" ? "btn-primary" : "btn-outline"
//               }`}
//               onClick={() => setActiveTab("tasks")}
//             >
//               📝 Aktive Aufgaben
//             </button>
//             <button
//               className={`btn ${
//                 activeTab === "completed" ? "btn-primary" : "btn-outline"
//               }`}
//               onClick={() => setActiveTab("completed")}
//             >
//               ✅ Erledigt
//             </button>
//           </div>

//           {activeTab === "tasks" && (
//             <>
//               <SortFilterBar
//                 sortKey={sortKey}
//                 setSortKey={setSortKey}
//                 search={search}
//                 setSearch={setSearch}
//               />
//               <TaskFilters filters={filters} setFilters={setFilters} />
//               <TaskForm />
//               <TaskList sortKey={sortKey} search={search} filters={filters} />
//             </>
//           )}

//           {activeTab === "completed" && <CompletedTasks />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;
import React, { useState } from "react";
import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import CompletedTasks from "../components/CompletedTasks";
import Timer from "../components/Timer";
import PomodoroTimer from "../components/PomodoroTimer";
import SortFilterBar from "../components/SortFilterBar";
import TaskFilters from "../components/TaskFilters";

function Home() {
  const [activeTab, setActiveTab] = useState("tasks");
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("createdAt");
  const [filters, setFilters] = useState({ category: null, plan: null });

  return (
    <>
      {/* 🔝 Header mit Suche und Home-Button */}
      <Header
        search={search}
        setSearch={setSearch}
        setActiveTab={setActiveTab}
      />

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4 pb-8">
        {/* Linke Spalte: Timer nur bei aktiver Aufgabe */}
        <div className="col-span-3 md:col-span-1 space-y-4">
          {activeTab === "tasks" && (
            <>
              <Timer />
              <PomodoroTimer />
            </>
          )}
        </div>

        {/* Rechte Spalte */}
        <div className="col-span-3 md:col-span-2 space-y-4">
          {/* Tabs */}
          <div className="flex gap-2">
            <button
              className={`btn ${
                activeTab === "tasks" ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setActiveTab("tasks")}
            >
              📝 Aktive Aufgaben
            </button>
            <button
              className={`btn ${
                activeTab === "completed" ? "btn-primary" : "btn-outline"
              }`}
              onClick={() => setActiveTab("completed")}
            >
              ✅ Erledigt
            </button>
          </div>

          {activeTab === "tasks" && (
            <>
              <SortFilterBar
                sortKey={sortKey}
                setSortKey={setSortKey}
                search={search}
                setSearch={setSearch}
              />
              <TaskFilters filters={filters} setFilters={setFilters} />
              <TaskForm />
              <TaskList sortKey={sortKey} search={search} filters={filters} />
            </>
          )}

          {activeTab === "completed" && <CompletedTasks />}
        </div>
      </div>
    </>
  );
}

export default Home;
