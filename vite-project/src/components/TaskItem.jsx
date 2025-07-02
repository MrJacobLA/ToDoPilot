// // // // import { useTaskContext } from "../context/TaskContext";

// // // // const { dispatch } = useTaskContext();

// // // // <button
// // // //   className="btn btn-sm btn-outline btn-primary"
// // // //   onClick={() => dispatch({ type: "SET_ACTIVE_TASK", payload: task })}
// // // // >
// // // //   ⏱ Timer starten
// // // // </button>;

// // // // src/components/TaskItem.jsx

// // // import React from "react";

// // // function TaskItem({ task }) {
// // //   return (
// // //     <div className="card p-4 shadow">
// // //       <h3 className="font-bold">{task.title}</h3>
// // //       <p>{task.description}</p>
// // //       {/* weitere Details */}
// // //     </div>
// // //   );
// // // }

// // // export default TaskItem;
// // import React from "react";
// // import { useTaskContext } from "../context/TaskContext";

// // function TaskItem({ task }) {
// //   const { dispatch } = useTaskContext();

// //   const priorityColor = {
// //     hoch: "border-red-500",
// //     mittel: "border-yellow-500",
// //     niedrig: "border-green-500",
// //   };

// //   return (
// //     <div
// //       className={`card bg-base-100 shadow border-l-4 ${
// //         priorityColor[task.priority]
// //       }`}
// //     >
// //       <div className="card-body">
// //         <h3 className="card-title">{task.title}</h3>
// //         <p>{task.description}</p>
// //         <p className="text-sm">
// //           Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
// //           | Dringlichkeit: {task.priority}
// //         </p>

// //         <div className="flex gap-2 mt-2">
// //           <button
// //             className="btn btn-success btn-sm"
// //             onClick={() =>
// //               dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
// //             }
// //           >
// //             ✔ Erledigt
// //           </button>
// //           <button
// //             className="btn btn-error btn-sm"
// //             onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
// //           >
// //             🗑️ Löschen
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TaskItem;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function TaskItem({ task }) {
//   const { dispatch } = useTaskContext();

//   const priorityColor = {
//     hoch: "border-red-500",
//     mittel: "border-yellow-500",
//     niedrig: "border-green-500",
//   };

//   return (
//     <div
//       className={`card bg-base-100 shadow border-l-4 ${
//         priorityColor[task.priority]
//       }`}
//     >
//       <div className="card-body">
//         <h3 className="card-title">{task.title}</h3>
//         <p>{task.description}</p>
//         <p className="text-sm">
//           Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
//           | Dringlichkeit: {task.priority}
//         </p>

//         <div className="flex gap-2 mt-2">
//           <button
//             className="btn btn-success btn-sm"
//             onClick={() =>
//               dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
//             }
//           >
//             ✔ Erledigt
//           </button>

//           <button
//             className="btn btn-outline btn-sm"
//             onClick={() => dispatch({ type: "SET_ACTIVE_TASK", payload: task })}
//           >
//             ⏱ Timer starten
//           </button>

//           <button
//             className="btn btn-error btn-sm"
//             onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
//           >
//             🗑️ Löschen
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskItem;
import React from "react";
import { useTaskContext } from "../context/TaskContext";

function TaskItem({ task }) {
  const { dispatch } = useTaskContext();

  const priorityColor = {
    hoch: "border-red-500",
    mittel: "border-yellow-500",
    niedrig: "border-green-500",
  };

  const handleComplete = () => {
    // 1. Aufgabe als erledigt markieren
    dispatch({ type: "TOGGLE_COMPLETE", payload: task.id });

    // 2. Timer & aktive Aufgabe zurücksetzen (falls es die aktive ist)
    dispatch({ type: "SET_ACTIVE_TASK", payload: null });

    // Optional: Falls du den Timer per Ref steuern willst, ginge das auch anders.
  };

  return (
    <div
      className={`card bg-base-100 shadow border-l-4 ${
        priorityColor[task.priority]
      }`}
    >
      <div className="card-body">
        <h3 className="card-title">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm">
          Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
          | Dringlichkeit: {task.priority}
        </p>

        <div className="flex gap-2 mt-2">
          <button className="btn btn-success btn-sm" onClick={handleComplete}>
            ✔ Erledigt
          </button>

          <button
            className="btn btn-outline btn-sm"
            onClick={() => dispatch({ type: "SET_ACTIVE_TASK", payload: task })}
          >
            ⏱ Timer starten
          </button>

          <button
            className="btn btn-error btn-sm"
            onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
          >
            🗑️ Löschen
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
