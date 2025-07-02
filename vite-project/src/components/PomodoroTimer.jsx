//

import React, { useState, useEffect } from "react";
import { useTaskContext } from "../context/TaskContext";

function PomodoroTimer() {
  const { state, dispatch } = useTaskContext();
  const task = state.activeTask;

  const workDuration = 25 * 60; // 25 Minuten in Sekunden
  const breakDuration = 5 * 60; // 5 Minuten in Sekunden

  const [secondsLeft, setSecondsLeft] = useState(workDuration);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev === 0) {
            handleSessionEnd();
            return isWorkSession ? breakDuration : workDuration;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isWorkSession]);

  const handleSessionEnd = () => {
    if (isWorkSession && task) {
      const actualMinutes = Math.round((workDuration - secondsLeft) / 60);

      dispatch({
        type: "ADD_FEEDBACK",
        payload: {
          id: task.id,
          actualMinutes,
          feedback: "",
        },
      });

      dispatch({ type: "MARK_COMPLETED", payload: task.id });
      dispatch({ type: "SET_ACTIVE_TASK", payload: null });
    }

    setIsWorkSession(!isWorkSession); // Wechsel zur Pause oder zurück
    setIsRunning(false);
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setSecondsLeft(isWorkSession ? workDuration : breakDuration);
    setIsRunning(false);
  };

  const formatTime = (seconds) =>
    `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  if (!task) {
    return (
      <div className="card bg-base-100 p-4 shadow">
        <p className="text-gray-500">⏳ Keine Aufgabe ausgewählt.</p>
      </div>
    );
  }

  return (
    <div className="card bg-base-100 p-6 shadow-xl space-y-4">
      <h2 className="text-xl font-bold">
        {isWorkSession ? "🔴 Arbeitsphase" : "🟢 Pause"}
      </h2>
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.description}</p>

      <div className="text-5xl font-mono text-center">
        {formatTime(secondsLeft)}
      </div>

      <div className="flex gap-2 justify-center">
        <button onClick={handleStart} className="btn btn-primary btn-sm">
          ▶ Start
        </button>
        <button onClick={handlePause} className="btn btn-outline btn-sm">
          ❚❚ Pause
        </button>
        <button onClick={handleReset} className="btn btn-secondary btn-sm">
          🔁 Reset
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
