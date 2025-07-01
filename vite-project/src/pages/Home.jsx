import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import CompletedTasks from "../components/CompletedTasks";
import Timer from "../components/Timer";
import PomodoroTimer from "../components/PomodoroTimer";
import SortFilterBar from "../components/SortFilterBar";

function Home() {
  return (
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
      <div className="col-span-3 md:col-span-1 space-y-4">
        <Timer />
        <PomodoroTimer />
      </div>

      <div className="col-span-3 md:col-span-2 space-y-4">
        <SortFilterBar />
        <TaskForm />
        <TaskList />
        <CompletedTasks />
      </div>
    </div>
  );
}

export default Home;
