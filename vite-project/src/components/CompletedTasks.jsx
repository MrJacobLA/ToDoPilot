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
// import React from "react";
// import { useTaskContext } from "../context/TaskContext";
// import FeedbackModal from "./FeedbackModal";

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

//             <p className="text-sm mt-2">
//               ⏳ Geschätzt: {task.estimatedMinutes} Min
//               <br />✅ Tatsächlich: {task.actualMinutes ?? "–"} Min
//               <br />
//               💬 Feedback: {task.feedback || "–"}
//             </p>

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
import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function CompletedTasks() {
  const { state, dispatch } = useTaskContext();
  const [selectedTask, setSelectedTask] = useState(null);
  const [feedbackText, setFeedbackText] = useState("");

  const completed = state.tasks.filter((task) => task.completed);

  const openModal = (task) => {
    setSelectedTask(task);
    setFeedbackText(task.feedback || "");
    document.getElementById("feedback_modal").showModal();
  };

  const handleSave = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: {
        id: selectedTask.id,
        feedback: feedbackText,
        actualMinutes: selectedTask.actualMinutes || null,
      },
    });
    setSelectedTask(null);
  };

  if (completed.length === 0) {
    return <p className="text-gray-500">Noch keine Aufgaben erledigt.</p>;
  }

  return (
    <div className="space-y-4">
      {completed.map((task) => (
        <div
          key={task.id}
          className="card bg-base-100 shadow border-l-4 border-green-400"
        >
          <div className="card-body">
            <h3 className="card-title">{task.title}</h3>
            <p>{task.description}</p>

            <div className="text-sm text-gray-600">
              ⏱ Tatsächliche Dauer:{" "}
              {task.actualMinutes != null
                ? `${task.actualMinutes} Minuten`
                : "nicht gemessen"}
            </div>

            <div className="text-sm text-gray-600">
              💬 Feedback:{" "}
              {task.feedback ? (
                <span className="italic">"{task.feedback}"</span>
              ) : (
                <span className="text-gray-400">Kein Feedback</span>
              )}
            </div>

            <div className="flex justify-end mt-2">
              <button
                className="btn btn-sm btn-outline"
                onClick={() => openModal(task)}
              >
                ✍️ Feedback bearbeiten
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <dialog id="feedback_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-2">📝 Feedback eingeben</h3>
          <textarea
            className="textarea textarea-bordered w-full"
            rows={4}
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
          ></textarea>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline mr-2">Abbrechen</button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                💾 Speichern
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CompletedTasks;
