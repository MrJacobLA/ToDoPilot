// import React, { useState } from "react";
// import { useTaskContext } from "../context/TaskContext";

// function FeedbackModal({ task }) {
//   const { dispatch } = useTaskContext();
//   const [showModal, setShowModal] = useState(false);
//   const [feedback, setFeedback] = useState(task.feedback || "");
//   const [actualMinutes, setActualMinutes] = useState(task.actualMinutes || "");

//   const handleSave = () => {
//     dispatch({
//       type: "ADD_FEEDBACK",
//       payload: {
//         id: task.id,
//         feedback,
//         actualMinutes: Number(actualMinutes),
//       },
//     });
//     setShowModal(false);
//   };

//   return (
//     <>
//       <button
//         className="btn btn-sm btn-outline btn-info"
//         onClick={() => setShowModal(true)}
//       >
//         💬 Feedback
//       </button>

//       {showModal && (
//         <dialog className="modal modal-open">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Feedback zu: {task.title}</h3>

//             <div className="form-control mt-4">
//               <label className="label">
//                 <span className="label-text">Tatsächliche Dauer (Minuten)</span>
//               </label>
//               <input
//                 type="number"
//                 className="input input-bordered"
//                 value={actualMinutes}
//                 onChange={(e) => setActualMinutes(e.target.value)}
//               />
//             </div>

//             <div className="form-control mt-4">
//               <label className="label">
//                 <span className="label-text">Dein Feedback</span>
//               </label>
//               <textarea
//                 className="textarea textarea-bordered"
//                 rows="4"
//                 value={feedback}
//                 onChange={(e) => setFeedback(e.target.value)}
//               />
//             </div>

//             <div className="modal-action">
//               <button className="btn btn-success" onClick={handleSave}>
//                 Speichern
//               </button>
//               <button
//                 className="btn btn-ghost"
//                 onClick={() => setShowModal(false)}
//               >
//                 Abbrechen
//               </button>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </>
//   );
// }

// export default FeedbackModal;
import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function FeedbackModal({ task }) {
  const { dispatch } = useTaskContext();
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState(task.feedback || "");
  const [actualMinutes, setActualMinutes] = useState(task.actualMinutes || "");

  const handleSave = () => {
    dispatch({
      type: "ADD_FEEDBACK",
      payload: {
        id: task.id,
        feedback,
        actualMinutes: Number(actualMinutes),
      },
    });
    setOpen(false);
  };

  return (
    <>
      <button
        className="btn btn-sm btn-outline btn-info"
        onClick={() => setOpen(true)}
      >
        💬 Feedback
      </button>

      {open && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Feedback: {task.title}</h3>

            <label className="label mt-4">
              <span className="label-text">Tatsächliche Dauer (Minuten)</span>
            </label>
            <input
              type="number"
              value={actualMinutes}
              onChange={(e) => setActualMinutes(e.target.value)}
              className="input input-bordered w-full"
            />

            <label className="label mt-4">
              <span className="label-text">Feedback</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="3"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <div className="modal-action">
              <button className="btn btn-success" onClick={handleSave}>
                💾 Speichern
              </button>
              <button className="btn" onClick={() => setOpen(false)}>
                ❌ Abbrechen
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default FeedbackModal;
