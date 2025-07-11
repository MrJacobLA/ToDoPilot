// // // //

// // // import React from "react";
// // // import { useTaskContext } from "../context/TaskContext";

// // // function TaskList() {
// // //   const { tasks, dispatch } = useTaskContext();

// // //   // Nur nicht-erledigte Aufgaben anzeigen
// // //   const activeTasks = tasks.filter((task) => !task.completed);

// // //   const getPriorityColor = (priority) => {
// // //     switch (priority) {
// // //       case "hoch":
// // //         return "border-red-500";
// // //       case "mittel":
// // //         return "border-yellow-500";
// // //       case "niedrig":
// // //         return "border-green-500";
// // //       default:
// // //         return "border-gray-300";
// // //     }
// // //   };

// // //   const handleComplete = (id) => {
// // //     dispatch({ type: "TOGGLE_COMPLETE", payload: id });
// // //   };

// // //   const handleDelete = (id) => {
// // //     dispatch({ type: "DELETE_TASK", payload: id });
// // //   };

// // //   return (
// // //     <div className="mt-6 space-y-4">
// // //       <h2 className="text-2xl font-bold">Aktive Aufgaben</h2>

// // //       {activeTasks.length === 0 && (
// // //         <p className="text-gray-500">Keine offenen Aufgaben 🎉</p>
// // //       )}

// // //       {activeTasks.map((task) => (
// // //         <div
// // //           key={task.id}
// // //           className={`card bg-base-100 shadow border-l-4 ${getPriorityColor(
// // //             task.priority
// // //           )}`}
// // //         >
// // //           <div className="card-body">
// // //             <div className="flex justify-between items-start">
// // //               <div>
// // //                 <h3 className="card-title">{task.title}</h3>
// // //                 <p className="text-sm text-gray-500">{task.description}</p>
// // //                 <div className="mt-2 text-sm">
// // //                   ⏱️ Dauer: {task.estimatedMinutes} Minuten
// // //                   <br />
// // //                   💪 Schwierigkeit: {task.difficulty} / 5<br />
// // //                   🚨 Dringlichkeit: {task.priority}
// // //                 </div>
// // //               </div>

// // //               <div className="flex flex-col items-end space-y-2">
// // //                 <button
// // //                   className="btn btn-sm btn-success"
// // //                   onClick={() => handleComplete(task.id)}
// // //                 >
// // //                   ✔ Erledigt
// // //                 </button>
// // //                 <button
// // //                   className="btn btn-sm btn-error"
// // //                   onClick={() => handleDelete(task.id)}
// // //                 >
// // //                   🗑️ Löschen
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default TaskList;

// // import React from "react";
// // import { useTaskContext } from "../context/TaskContext";
// // import TaskItem from "./TaskItem";

// // function TaskList({ showCompleted = false }) {
// //   const { state } = useTaskContext();

// //   // Falls state oder tasks undefiniert sind, default leeres Array
// //   const tasks = state?.tasks || [];

// //   // Filter je nachdem ob erledigte oder aktive Aufgaben angezeigt werden sollen
// //   const filteredTasks = tasks.filter(
// //     (task) => task.completed === showCompleted
// //   );

// //   if (filteredTasks.length === 0) {
// //     return (
// //       <p className="text-center text-gray-500 mt-4">Keine Aufgaben gefunden.</p>
// //     );
// //   }

// //   return (
// //     <div className="space-y-2">
// //       {filteredTasks.map((task) => (
// //         <TaskItem key={task.id} task={task} />
// //       ))}
// //     </div>
// //   );
// // }

// // export default TaskList;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList() {
//   const { state } = useTaskContext();
//   const tasks = state.tasks.filter((task) => !task.completed);

//   return (
//     <div className="space-y-4">
//       <h2 className="text-2xl font-bold">📝 Aktive Aufgaben</h2>
//       {tasks.length === 0 && (
//         <p className="text-gray-500">Keine Aufgaben vorhanden.</p>
//       )}
//       {tasks.map((task) => (
//         <TaskItem key={task.id} task={task} />
//       ))}
//     </div>
//   );
// }

// export default TaskList;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList({ sortKey }) {
//   const { state } = useTaskContext();

//   let tasks = state.tasks.filter((task) => !task.completed);

//   // Sortierlogik
//   tasks.sort((a, b) => {
//     switch (sortKey) {
//       case "priority":
//         const prio = { hoch: 3, mittel: 2, niedrig: 1 };
//         return prio[b.priority] - prio[a.priority];
//       case "estimatedMinutes":
//         return a.estimatedMinutes - b.estimatedMinutes;
//       case "difficulty":
//         return b.difficulty - a.difficulty;
//       case "title":
//         return a.title.localeCompare(b.title);
//       case "createdAt":
//       default:
//         return new Date(b.createdAt) - new Date(a.createdAt);
//     }
//   });

//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">Keine aktiven Aufgaben.</p>
//       ) : (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       )}
//     </div>
//   );
// }

// export default TaskList;

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList({ sortKey, search = "", filters = {} }) {
//   const { state } = useTaskContext();

//   let tasks = state.tasks.filter((task) => !task.completed);

//   // 🔍 Filter: Suche (Titel + Beschreibung)
//   tasks = tasks.filter(
//     (task) =>
//       task.title.toLowerCase().includes(search.toLowerCase()) ||
//       task.description.toLowerCase().includes(search.toLowerCase())
//   );

//   // 🏷️ Kategorie & Plan-Filter
//   if (filters.category) {
//     tasks = tasks.filter((task) => task.category === filters.category);
//   }
//   if (filters.plan) {
//     tasks = tasks.filter((task) => task.plan === filters.plan);
//   }

//   // 🔁 Sortierung
//   tasks.sort((a, b) => {
//     switch (sortKey) {
//       case "priority":
//         const prio = { hoch: 3, mittel: 2, niedrig: 1 };
//         return prio[b.priority] - prio[a.priority];
//       case "estimatedMinutes":
//         return a.estimatedMinutes - b.estimatedMinutes;
//       case "difficulty":
//         return b.difficulty - a.difficulty;
//       case "title":
//         return a.title.localeCompare(b.title);
//       case "createdAt":
//       default:
//         return new Date(b.createdAt) - new Date(a.createdAt);
//     }
//   });

//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">Keine passenden Aufgaben gefunden.</p>
//       ) : (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       )}
//     </div>
//   );
// }

// export default TaskList;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList({ sortKey, search, filters }) {
//   const { state } = useTaskContext();

//   let tasks = state.tasks.filter((task) => !task.completed);

//   // 🔍 Suche
//   if (search) {
//     tasks = tasks.filter(
//       (task) =>
//         task.title.toLowerCase().includes(search.toLowerCase()) ||
//         task.description.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   // 🔘 Filter
//   if (filters.category) {
//     tasks = tasks.filter((task) => task.category === filters.category);
//   }
//   if (filters.plan) {
//     tasks = tasks.filter((task) => task.plan === filters.plan);
//   }

//   // 🔃 Sortierung
//   tasks.sort((a, b) => {
//     switch (sortKey) {
//       case "priority":
//         const prio = { hoch: 3, mittel: 2, niedrig: 1 };
//         return prio[b.priority] - prio[a.priority];
//       case "estimatedMinutes":
//         return a.estimatedMinutes - b.estimatedMinutes;
//       case "difficulty":
//         return b.difficulty - a.difficulty;
//       case "title":
//         return a.title.localeCompare(b.title);
//       case "createdAt":
//       default:
//         return new Date(b.createdAt) - new Date(a.createdAt);
//     }
//   });

//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">Keine passenden Aufgaben gefunden.</p>
//       ) : (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       )}
//     </div>
//   );
// }

// export default TaskList;

// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList({ sortKey, search, filters }) {
//   const { state } = useTaskContext();

//   // 1️⃣ Nur aktive Aufgaben
//   let tasks = state.tasks.filter((task) => !task.completed);

//   // 2️⃣ 🔍 Suchbegriff im Titel oder Beschreibung
//   if (search) {
//     tasks = tasks.filter(
//       (task) =>
//         task.title.toLowerCase().includes(search.toLowerCase()) ||
//         task.description.toLowerCase().includes(search.toLowerCase())
//     );
//   }

//   // 3️⃣ 🧊 Filter: Kategorie (persönlich / geschäftlich)
//   if (filters?.category) {
//     tasks = tasks.filter((task) => task.category === filters.category);
//   }

//   // 4️⃣ 🗓️ Filter: Plan (heute / woche / offen)
//   if (filters?.plan) {
//     tasks = tasks.filter((task) => task.plan === filters.plan);
//   }

//   // 5️⃣ 🔃 Sortieren
//   tasks.sort((a, b) => {
//     switch (sortKey) {
//       case "priority":
//         const prio = { hoch: 3, mittel: 2, niedrig: 1 };
//         return prio[b.priority] - prio[a.priority];
//       case "estimatedMinutes":
//         return a.estimatedMinutes - b.estimatedMinutes;
//       case "difficulty":
//         return b.difficulty - a.difficulty;
//       case "title":
//         return a.title.localeCompare(b.title);
//       case "createdAt":
//       default:
//         return new Date(b.createdAt) - new Date(a.createdAt);
//     }
//   });

//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">Keine passenden Aufgaben gefunden.</p>
//       ) : (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       )}
//     </div>
//   );
// }

// export default TaskList;
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import TaskItem from "./TaskItem";

// function TaskList({ sortKey, search, filters }) {
//   const { state } = useTaskContext();

//   // Schritt 1: Nur nicht-erledigte Aufgaben
//   let tasks = state.tasks.filter((task) => !task.completed);

//   // Schritt 2: Suchbegriff (Titel + Beschreibung)
//   if (search && search.trim() !== "") {
//     const query = search.toLowerCase();
//     tasks = tasks.filter(
//       (task) =>
//         task.title.toLowerCase().includes(query) ||
//         task.description.toLowerCase().includes(query)
//     );
//   }

//   // Schritt 3: Filter nach Kategorie (wenn gesetzt)
//   if (filters?.category) {
//     tasks = tasks.filter((task) => task.category === filters.category);
//   }

//   // Schritt 4: Filter nach Plan (wenn gesetzt)
//   if (filters?.plan) {
//     tasks = tasks.filter((task) => task.plan === filters.plan);
//   }

//   // Schritt 5: Sortierung
//   tasks.sort((a, b) => {
//     const prio = { hoch: 3, mittel: 2, niedrig: 1 };

//     switch (sortKey) {
//       case "priority":
//         return prio[b.priority] - prio[a.priority];
//       case "estimatedMinutes":
//         return a.estimatedMinutes - b.estimatedMinutes;
//       case "difficulty":
//         return b.difficulty - a.difficulty;
//       case "title":
//         return a.title.localeCompare(b.title);
//       case "createdAt":
//       default:
//         return new Date(b.createdAt) - new Date(a.createdAt);
//     }
//   });

//   return (
//     <div className="space-y-4">
//       {tasks.length === 0 ? (
//         <p className="text-gray-500">Keine passenden Aufgaben gefunden.</p>
//       ) : (
//         tasks.map((task) => <TaskItem key={task.id} task={task} />)
//       )}
//     </div>
//   );
// }

// export default TaskList;
import React from "react";
import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

function TaskList({ sortKey, search, filters }) {
  const { state } = useTaskContext();

  let tasks = state.tasks.filter((task) => !task.completed);

  // 🔎 Suche
  if (search) {
    tasks = tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 🏷️ Kategorie
  if (filters?.category) {
    tasks = tasks.filter((task) => task.category === filters.category);
  }

  // 📅 Plan
  if (filters?.plan) {
    tasks = tasks.filter((task) => task.plan === filters.plan);
  }

  // 🔀 Sortierung
  tasks.sort((a, b) => {
    switch (sortKey) {
      case "priority":
        const prio = { hoch: 3, mittel: 2, niedrig: 1 };
        return prio[b.priority] - prio[a.priority];
      case "estimatedMinutes":
        return a.estimatedMinutes - b.estimatedMinutes;
      case "difficulty":
        return b.difficulty - a.difficulty;
      case "title":
        return a.title.localeCompare(b.title);
      case "createdAt":
      default:
        return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div className="space-y-4">
      {tasks.length === 0 ? (
        <p className="text-gray-500">Keine passenden Aufgaben gefunden.</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
}

export default TaskList;
