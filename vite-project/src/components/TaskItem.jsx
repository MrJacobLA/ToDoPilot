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
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function TaskItem({ task }) {
//   const { dispatch } = useTaskContext();

//   const priorityColor = {
//     hoch: "border-red-500",
//     mittel: "border-yellow-500",
//     niedrig: "border-green-500",
//   };

//   const handleComplete = () => {
//     // 1. Aufgabe als erledigt markieren
//     dispatch({ type: "TOGGLE_COMPLETE", payload: task.id });

//     // 2. Timer & aktive Aufgabe zurücksetzen (falls es die aktive ist)
//     dispatch({ type: "SET_ACTIVE_TASK", payload: null });

//     // Optional: Falls du den Timer per Ref steuern willst, ginge das auch anders.
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
//           <button className="btn btn-success btn-sm" onClick={handleComplete}>
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

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function TaskItem({ task }) {
//   const { dispatch } = useTaskContext();

//   const priorityColor = {
//     hoch: "border-red-500",
//     mittel: "border-yellow-500",
//     niedrig: "border-green-500",
//   };

//   const categoryBadge = {
//     persoenlich: "badge-success",
//     geschaeftlich: "badge-info",
//   };

//   return (
//     <div
//       className={`card bg-base-100 shadow border-l-4 ${
//         priorityColor[task.priority]
//       }`}
//     >
//       <div className="card-body">
//         <div className="flex justify-between items-center">
//           <h3 className="card-title">{task.title}</h3>
//           <div
//             className={`badge ${categoryBadge[task.category]} text-white`}
//             title={`Kategorie: ${task.category}`}
//           >
//             {task.category === "persoenlich"
//               ? "👤 Persönlich"
//               : "💼 Geschäftlich"}
//           </div>
//         </div>

//         <p>{task.description}</p>

//         <p className="text-sm text-gray-500">
//           Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
//           | Dringlichkeit: {task.priority}
//         </p>

//         <div className="text-sm text-gray-400">
//           ⏳ Geplant für: <span className="font-medium">{task.plan}</span>
//         </div>

//         <div className="flex gap-2 mt-3 flex-wrap">
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

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";

// function TaskItem({ task }) {
//   const { dispatch } = useTaskContext();

//   const priorityColor = {
//     hoch: "border-red-500",
//     mittel: "border-yellow-500",
//     niedrig: "border-green-500",
//   };

//   const categoryBadge = {
//     persönlich: "badge-success", // grün
//     geschäftlich: "badge-info", // blau
//   };

//   return (
//     <div
//       className={`card bg-base-100 shadow border-l-4 ${
//         priorityColor[task.priority]
//       }`}
//     >
//       <div className="card-body">
//         <div className="flex justify-between items-start">
//           <h3 className="card-title">{task.title}</h3>
//           {task.category && (
//             <div
//               className={`badge ${
//                 categoryBadge[task.category] || "badge-neutral"
//               }`}
//             >
//               {task.category}
//             </div>
//           )}
//         </div>

//         <p>{task.description}</p>
//         <p className="text-sm text-gray-500">
//           Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
//           | Dringlichkeit: {task.priority}
//         </p>

//         <div className="flex gap-2 mt-3">
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

  const categoryBadge = {
    persoenlich: {
      label: "👤 Persönlich",
      className: "bg-green-100 text-green-800",
    },
    geschaeftlich: {
      label: "💼 Geschäftlich",
      className: "bg-blue-100 text-blue-800",
    },
  };

  return (
    <div
      className={`card bg-base-100 shadow border-l-4 ${
        priorityColor[task.priority]
      }`}
    >
      <div className="card-body relative">
        {/* Kategorie oben rechts */}
        <div className="absolute top-4 right-4">
          <span
            className={`text-xs px-2 py-1 rounded font-semibold ${
              categoryBadge[task.category]?.className
            }`}
          >
            {categoryBadge[task.category]?.label}
          </span>
        </div>

        <h3 className="card-title">{task.title}</h3>
        <p>{task.description}</p>
        <p className="text-sm">
          Dauer: {task.estimatedMinutes} Min | Schwierigkeit: {task.difficulty}{" "}
          | Dringlichkeit: {task.priority}
        </p>

        <div className="flex gap-2 mt-4 flex-wrap">
          <button
            className="btn btn-success btn-sm"
            onClick={() =>
              dispatch({ type: "TOGGLE_COMPLETE", payload: task.id })
            }
          >
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
