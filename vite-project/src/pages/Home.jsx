// // //

// // import React, { useState } from "react";
// // import TaskForm from "../components/TaskForm";
// // import TaskList from "../components/TaskList";
// // import CompletedTasks from "../components/CompletedTasks";
// // import Timer from "../components/Timer";
// // import PomodoroTimer from "../components/PomodoroTimer";
// // import SortFilterBar from "../components/SortFilterBar";

// // function Home() {
// //   const [activeTab, setActiveTab] = useState("tasks");

// //   return (
// //     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
// //       {/* Linke Spalte: Timer */}
// //       <div className="col-span-3 md:col-span-1 space-y-4">
// //         <Timer />
// //         <PomodoroTimer />
// //       </div>

// //       {/* Rechte Spalte: Aufgabenverwaltung */}
// //       <div className="col-span-3 md:col-span-2 space-y-4">
// //         {/* Tab-Wechsler */}
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
//   const [usePomodoro, setUsePomodoro] = useState(false); // Umschalter

//   return (
//     <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
//       {/* Linke Spalte: Timer */}
//       <div className="col-span-3 md:col-span-1 space-y-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-lg font-semibold">
//             {usePomodoro ? "🍅 Pomodoro-Modus" : "⏱ Standard-Timer"}
//           </h2>
//           <div className="flex gap-2">
//             <button
//               className={`btn btn-xs ${!usePomodoro ? "btn-active" : ""}`}
//               onClick={() => setUsePomodoro(false)}
//             >
//               Standard
//             </button>
//             <button
//               className={`btn btn-xs ${usePomodoro ? "btn-active" : ""}`}
//               onClick={() => setUsePomodoro(true)}
//             >
//               Pomodoro
//             </button>
//           </div>
//         </div>

//         {!usePomodoro && <Timer />}
//         {usePomodoro && <PomodoroTimer />}
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
import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import CompletedTasks from "../components/CompletedTasks";
import Timer from "../components/Timer";
import PomodoroTimer from "../components/PomodoroTimer";
import SortFilterBar from "../components/SortFilterBar";

function Home() {
  const [activeTab, setActiveTab] = useState("tasks");
  const [showPomodoro, setShowPomodoro] = useState(false);

  return (
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
      {/* Linke Spalte: Timer */}
      <div className="col-span-3 md:col-span-1 space-y-4">
        <div className="card bg-base-100 p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">⏱ Standard-Timer</h2>
          <Timer />
        </div>

        <div className="card bg-base-100 p-4 shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">🍅 Pomodoro-Modus</h2>
            <button
              className="btn btn-sm"
              onClick={() => setShowPomodoro((prev) => !prev)}
            >
              {showPomodoro ? "Ausblenden" : "Anzeigen"}
            </button>
          </div>

          {showPomodoro && <PomodoroTimer />}
          {!showPomodoro && (
            <p className="text-sm text-gray-500">Nicht aktiviert</p>
          )}
        </div>
      </div>

      {/* Rechte Spalte: Aufgabenverwaltung */}
      <div className="col-span-3 md:col-span-2 space-y-4">
        {/* Tabs */}
        <div className="tabs tabs-boxed">
          <button
            className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("tasks")}
          >
            📝 Aktive Aufgaben
          </button>
          <button
            className={`tab ${activeTab === "completed" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("completed")}
          >
            ✅ Erledigt
          </button>
        </div>

        {/* Inhalte je nach Tab */}
        {activeTab === "tasks" && (
          <>
            <SortFilterBar />
            <TaskForm />
            <TaskList />
          </>
        )}

        {activeTab === "completed" && <CompletedTasks />}
      </div>
    </div>
  );
}

export default Home;
