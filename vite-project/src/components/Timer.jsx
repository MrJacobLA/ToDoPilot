// import React from "react";

// function Timer() {
//   return (
//     <div className="card bg-base-100 shadow">
//       <div className="card-body">
//         <h2 className="card-title">Live-Timer</h2>
//         <p>(Hier wird der Live-Timer angezeigt)</p>
//       </div>
//     </div>
//   );
// }

// export default Timer;
import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";

function Timer() {
  const { state, dispatch } = useTaskContext();
  const task = state.activeTask;

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleDone = () => {
    if (!task) return;

    const minutes = Math.round(seconds / 60);

    dispatch({
      type: "ADD_FEEDBACK",
      payload: {
        id: task.id,
        feedback: "",
        actualMinutes: minutes,
      },
    });

    dispatch({ type: "MARK_COMPLETED", payload: task.id });
    dispatch({ type: "SET_ACTIVE_TASK", payload: null });
    setSeconds(0);
    setIsRunning(false);
  };

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  if (!task) {
    return (
      <div className="card bg-base-100 shadow p-4">
        <p className="text-gray-500">⏱ Keine Aufgabe ausgewählt</p>
      </div>
    );
  }

  const formatTime = (sec) =>
    `${Math.floor(sec / 60)
      .toString()
      .padStart(2, "0")}:${(sec % 60).toString().padStart(2, "0")}`;

  return (
    <div className="card bg-base-100 shadow p-4 space-y-4">
      <h2 className="text-xl font-bold">⏱ Timer läuft für:</h2>
      <h3 className="font-semibold">{task.title}</h3>

      <div className="text-4xl font-mono text-center">
        {formatTime(seconds)}
      </div>

      <div className="flex gap-2 justify-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "❚❚ Pause" : "▶ Start"}
        </button>
        <button className="btn btn-success btn-sm" onClick={handleDone}>
          ✅ Fertig
        </button>
        <button className="btn btn-outline btn-sm" onClick={handleReset}>
          🔁 Reset
        </button>
      </div>
    </div>
  );
}

export default Timer;
