//

//-----------------------------------TODO----------------------------------

// TODO:  uuid install für feste Zeit!!! npm install uuid

// -----------------------------------------------------------------------------
// import React, { useState } from "react";

// import React, { useState } from "react";
// import { useTaskContext } from "../context/TaskContext";
// import { v4 as uuidv4 } from "uuid";

// function TaskForm() {
//   const { dispatch } = useTaskContext();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [estimatedMinutes, setEstimatedMinutes] = useState(30);
//   const [difficulty, setDifficulty] = useState(3);
//   const [priority, setPriority] = useState("mittel");
//   const [category, setCategory] = useState("persoenlich");
//   const [plan, setPlan] = useState("heute");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTask = {
//       id: uuidv4(),
//       title,
//       description,
//       estimatedMinutes,
//       difficulty,
//       priority,
//       completed: false,
//       createdAt: new Date(),
//       actualMinutes: null,
//       feedback: "",
//       category,
//       plan,
//     };

//     // Neue Aufgabe an Context übergeben
//     dispatch({ type: "ADD_TASK", payload: newTask });

//     // Formular leeren
//     setTitle("");
//     setDescription("");
//     setEstimatedMinutes(30);
//     setDifficulty(3);
//     setPriority("mittel");
//     setCategory("persoenlich");
//     setPlan("heute");
//   };

//   return (
//     <div className="card bg-base-100 shadow p-6">
//       <h2 className="text-xl font-bold mb-4">➕ Neue Aufgabe</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Titel */}
//         <div>
//           <label className="label">Titel</label>
//           <input
//             type="text"
//             className="input input-bordered w-full"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         {/* Beschreibung */}
//         <div>
//           <label className="label">Beschreibung</label>
//           <textarea
//             className="textarea textarea-bordered w-full"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>

//         {/* Dauer */}
//         <div>
//           <label className="label">Geschätzte Dauer (Minuten)</label>
//           <input
//             type="number"
//             className="input input-bordered w-full"
//             value={estimatedMinutes}
//             onChange={(e) => setEstimatedMinutes(Number(e.target.value))}
//             min={1}
//           />
//         </div>

//         {/* Schwierigkeit */}
//         <div>
//           <label className="label">Schwierigkeit (1–5)</label>
//           <input
//             type="number"
//             className="input input-bordered w-full"
//             value={difficulty}
//             onChange={(e) => setDifficulty(Number(e.target.value))}
//             min={1}
//             max={5}
//           />
//         </div>

//         {/* Dringlichkeit */}
//         <div>
//           <label className="label">Dringlichkeit</label>
//           <select
//             className="select select-bordered w-full"
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//           >
//             <option value="hoch">Hoch</option>
//             <option value="mittel">Mittel</option>
//             <option value="niedrig">Niedrig</option>
//           </select>
//         </div>

//         {/* Kategorie */}
//         <div>
//           <label className="label">Kategorie</label>
//           <select
//             className="select select-bordered w-full"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="persoenlich">Persönlich</option>
//             <option value="geschaeftlich">Geschäftlich</option>
//           </select>
//         </div>

//         {/* Zeitplan */}
//         <div>
//           <label className="label">Geplant für</label>
//           <select
//             className="select select-bordered w-full"
//             value={plan}
//             onChange={(e) => setPlan(e.target.value)}
//           >
//             <option value="heute">Heute</option>
//             <option value="woche">Diese Woche</option>
//             <option value="offen">Offen</option>
//           </select>
//         </div>

//         {/* Absenden */}
//         <div className="flex justify-end">
//           <button className="btn btn-primary" type="submit">
//             ➕ Aufgabe hinzufügen
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TaskForm;

// import React, { useState } from "react";
// import { useTaskContext } from "../context/TaskContext";
// import { v4 as uuidv4 } from "uuid";

// function TaskForm() {
//   const { dispatch } = useTaskContext();

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [estimatedMinutes, setEstimatedMinutes] = useState(30);
//   const [difficulty, setDifficulty] = useState(3);
//   const [priority, setPriority] = useState("mittel");
//   const [category, setCategory] = useState("persönlich");
//   const [plan, setPlan] = useState("heute");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTask = {
//       id: uuidv4(),
//       title,
//       description,
//       estimatedMinutes,
//       difficulty,
//       priority,
//       completed: false,
//       createdAt: new Date(),
//       actualMinutes: null,
//       feedback: "",
//       category,
//       plan,
//     };

//     // Neue Aufgabe an den Context "dispatchen"
//     dispatch({ type: "ADD_TASK", payload: newTask });

//     // Formular zurücksetzen
//     setTitle("");
//     setDescription("");
//     setEstimatedMinutes(30);
//     setDifficulty(3);
//     setPriority("mittel");
//     setCategory("persönlich");
//     setPlan("heute");
//   };

//   return (
//     <div className="card bg-base-100 shadow p-6">
//       <h2 className="text-xl font-bold mb-4">➕ Neue Aufgabe</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Titel */}
//         <div>
//           <label className="label font-medium">Titel</label>
//           <input
//             type="text"
//             className="input input-bordered w-full"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>

//         {/* Beschreibung */}
//         <div>
//           <label className="label font-medium">Beschreibung</label>
//           <textarea
//             className="textarea textarea-bordered w-full"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           ></textarea>
//         </div>

//         {/* Dauer */}
//         <div>
//           <label className="label font-medium">
//             Geschätzte Dauer (Minuten)
//           </label>
//           <input
//             type="number"
//             className="input input-bordered w-full"
//             value={estimatedMinutes}
//             onChange={(e) => setEstimatedMinutes(Number(e.target.value))}
//             min={1}
//           />
//         </div>

//         {/* Schwierigkeit */}
//         <div>
//           <label className="label font-medium">Schwierigkeit (1–5)</label>
//           <input
//             type="number"
//             className="input input-bordered w-full"
//             value={difficulty}
//             onChange={(e) => setDifficulty(Number(e.target.value))}
//             min={1}
//             max={5}
//           />
//         </div>

//         {/* Dringlichkeit */}
//         <div>
//           <label className="label font-medium">Dringlichkeit</label>
//           <select
//             className="select select-bordered w-full"
//             value={priority}
//             onChange={(e) => setPriority(e.target.value)}
//           >
//             <option value="hoch">Hoch</option>
//             <option value="mittel">Mittel</option>
//             <option value="niedrig">Niedrig</option>
//           </select>
//         </div>

//         {/* Kategorie */}
//         <div>
//           <label className="label font-medium">Kategorie</label>
//           <select
//             className="select select-bordered w-full"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           >
//             <option value="persönlich">Persönlich</option>
//             <option value="geschäftlich">Geschäftlich</option>
//           </select>
//         </div>

//         {/* Plan */}
//         <div>
//           <label className="label font-medium">Geplant für</label>
//           <select
//             className="select select-bordered w-full"
//             value={plan}
//             onChange={(e) => setPlan(e.target.value)}
//           >
//             <option value="heute">Heute</option>
//             <option value="woche">Diese Woche</option>
//             <option value="offen">Offen</option>
//           </select>
//         </div>

//         {/* Absenden */}
//         <div className="flex justify-end">
//           <button className="btn btn-primary" type="submit">
//             ➕ Aufgabe hinzufügen
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TaskForm;
import React, { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const { dispatch } = useTaskContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedMinutes, setEstimatedMinutes] = useState(30);
  const [difficulty, setDifficulty] = useState(3);
  const [priority, setPriority] = useState("mittel");
  const [category, setCategory] = useState("persoenlich");
  const [plan, setPlan] = useState("heute");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      title,
      description,
      estimatedMinutes,
      difficulty,
      priority,
      completed: false,
      createdAt: new Date(),
      actualMinutes: null,
      feedback: "",
      category, // wichtig: z. B. "persoenlich"
      plan, // z. B. "heute"
    };

    dispatch({ type: "ADD_TASK", payload: newTask });

    setTitle("");
    setDescription("");
    setEstimatedMinutes(30);
    setDifficulty(3);
    setPriority("mittel");
    setCategory("persoenlich");
    setPlan("heute");
  };

  return (
    <div className="card bg-base-100 shadow p-6">
      <h2 className="text-xl font-bold mb-4">➕ Neue Aufgabe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">Titel</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="label">Beschreibung</label>
          <textarea
            className="textarea textarea-bordered w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="label">Geschätzte Dauer (Minuten)</label>
          <input
            type="number"
            className="input input-bordered w-full"
            value={estimatedMinutes}
            onChange={(e) => setEstimatedMinutes(Number(e.target.value))}
            min={1}
          />
        </div>

        <div>
          <label className="label">
            <span>Schwierigkeit: {difficulty}</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="1"
            value={difficulty}
            onChange={(e) => setDifficulty(Number(e.target.value))}
            className="range range-primary w-full"
          />
          <div className="flex justify-between text-xs px-1 mt-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>

        <div>
          <label className="label">Dringlichkeit</label>
          <select
            className="select select-bordered w-full"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="hoch">Hoch</option>
            <option value="mittel">Mittel</option>
            <option value="niedrig">Niedrig</option>
          </select>
        </div>

        <div>
          <label className="label">Kategorie</label>
          <select
            className="select select-bordered w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="persoenlich">👤 Persönlich</option>
            <option value="geschaeftlich">💼 Geschäftlich</option>
          </select>
        </div>

        <div>
          <label className="label">Geplant für</label>
          <select
            className="select select-bordered w-full"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          >
            <option value="heute">📅 Heute</option>
            <option value="woche">📆 Diese Woche</option>
            <option value="offen">🕓 Offen</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" type="submit">
            ➕ Aufgabe hinzufügen
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
