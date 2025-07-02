// // // import React from "react";
// // import { useTaskContext } from "../context/TaskContext";
// // import FeedbackModal from "./FeedbackModal"; // 👈 Wichtig

// // function CompletedTasks() {
// //   const { tasks } = useTaskContext();
// //   const completedTasks = tasks.filter((task) => task.completed);

// //   return (
// //     <div className="mt-6 space-y-4">
// //       <h2 className="text-2xl font-bold">✅ Erledigte Aufgaben</h2>

// //       {completedTasks.length === 0 && (
// //         <p className="text-gray-500">Du hast noch keine Aufgaben erledigt.</p>
// //       )}

// //       {completedTasks.map((task) => (
// //         <div
// //           key={task.id}
// //           className="card bg-base-100 shadow border-l-4 border-green-500"
// //         >
// //           <div className="card-body">
// //             <h3 className="card-title">{task.title}</h3>
// //             <p className="text-sm text-gray-500">{task.description}</p>

// //             <div className="mt-2 text-sm">
// //               ⏱️ Geschätzt: {task.estimatedMinutes} Min
// //               {task.actualMinutes && (
// //                 <> | ✅ Tatsächlich: {task.actualMinutes} Min</>
// //               )}
// //               {task.feedback && (
// //                 <>
// //                   <br />
// //                   💬 Feedback: <span className="italic">{task.feedback}</span>
// //                 </>
// //               )}
// //             </div>

// //             {/* 👉 Feedback Button */}
// //             <div className="mt-4">
// //               <FeedbackModal task={task} />
// //             </div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default CompletedTasks;
// // import FeedbackModal from "./FeedbackModal"; // ⬅ import nicht vergessen
// // import React from "react";
// // import { useTaskContext } from "../context/TaskContext";

// // function CompletedTasks() {
// //   const { state } = useTaskContext();
// //   const completedTasks = state.tasks.filter((task) => task.completed);

// //   return (
// //     <div className="space-y-4">
// //       <h2 className="text-2xl font-bold">✅ Erledigte Aufgaben</h2>
// //       {completedTasks.length === 0 && (
// //         <p className="text-gray-500">Noch keine erledigten Aufgaben.</p>
// //       )}
// //       {completedTasks.map((task) => (
// //         <div
// //           key={task.id}
// //           className="card bg-base-100 shadow border-l-4 border-green-500"
// //         >
// //           <div className="card-body">
// //             <h3 className="card-title">{task.title}</h3>
// //             <p>{task.description}</p>
// //             <p className="text-sm">
// //               Geschätzt: {task.estimatedMinutes} Min | Schwierigkeit:{" "}
// //               {task.difficulty}
// //             </p>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default CompletedTasks;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import FeedbackModal from "./FeedbackModal"; // ⬅ Wichtig: import

// function CompletedTasks() {
//   const { state } = useTaskContext();
//   const completedTasks = state.tasks.filter((task) => task.completed);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">✅ Erledigte Aufgaben</h2>

//       {completedTasks.length === 0 && (
//         <p className="text-gray-500">Noch keine erledigten Aufgaben.</p>
//       )}

//       {completedTasks.map((task) => (
//         <div
//           key={task.id}
//           className="card bg-base-100 shadow border-l-4 border-green-500"
//         >
//           <div className="card-body">
//             <h3 className="card-title">{task.title}</h3>
//             <p>{task.description}</p>

//             <p className="text-sm">
//               Geschätzt: {task.estimatedMinutes} Min <br />
//               Schwierigkeit: {task.difficulty} <br />
//               Tatsächlich: {task.actualMinutes ?? "—"} Min <br />
//               Feedback: {task.feedback || "—"}
//             </p>

//             {/* ⬇⬇⬇ Hier kommt der Feedback-Button rein */}
//             <div className="mt-4">
//               <FeedbackModal task={task} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CompletedTasks;
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import FeedbackModal from "./FeedbackModal";

function CompletedTasks() {
  const { state } = useTaskContext();
  const completedTasks = state.tasks.filter((task) => task.completed);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">✅ Erledigte Aufgaben</h2>

      {completedTasks.length === 0 && (
        <p className="text-gray-500">Noch keine erledigten Aufgaben.</p>
      )}

      {completedTasks.map((task) => (
        <div
          key={task.id}
          className="card bg-base-100 shadow border-l-4 border-green-500"
        >
          <div className="card-body">
            <h3 className="card-title">{task.title}</h3>
            <p>{task.description}</p>

            <p className="text-sm mt-2">
              ⏳ Geschätzt: {task.estimatedMinutes} Min
              <br />✅ Tatsächlich: {task.actualMinutes ?? "–"} Min
              <br />
              💬 Feedback: {task.feedback || "–"}
            </p>

            <div className="mt-4">
              <FeedbackModal task={task} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompletedTasks;
