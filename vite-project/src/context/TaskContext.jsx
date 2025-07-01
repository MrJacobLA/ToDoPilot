// HIer STate Machen. Speicherbereich im createContext, useReducer Aufgaben verwalten und useContext auf dtaen zugreifen.

import { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();

// mein Stae
const initialState = [];

function taskReducer(state, action) {
  switch (action.type) {
    // zufügen der AUfgaben
    case "ADD_TASK":
      return [...state, action.payload];
    //   erledigt oder nicht
    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    //   löschen der AUfgaben
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

// alle elmente mit TaskProvider kann auf UseTask zugreifen und Aufagebn (gloable) ändern
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
// Zugriff in Komponenten; const { tasks, dispatch } = useTaskContext();

export const useTaskContext = () => useContext(TaskContext);
