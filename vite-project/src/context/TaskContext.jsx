// // // // HIer STate Machen. Speicherbereich im createContext, useReducer Aufgaben verwalten und useContext auf dtaen zugreifen.

// // // import { createContext, useReducer, useContext } from "react";

// // // const TaskContext = createContext();

// // // // mein Stae
// // // const initialState = [];

// // // function taskReducer(state, action) {
// // //   switch (action.type) {
// // //     // zufügen der AUfgaben
// // //     case "ADD_TASK":
// // //       return [...state, action.payload];
// // //     //   erledigt oder nicht
// // //     case "TOGGLE_TASK":
// // //       return state.map((task) =>
// // //         task.id === action.payload
// // //           ? { ...task, completed: !task.completed }
// // //           : task
// // //       );
// // //     //   löschen der AUfgaben
// // //     case "DELETE_TASK":
// // //       return state.filter((task) => task.id !== action.payload);
// // //     default:
// // //       return state;
// // //   }
// // // }

// // // // alle elmente mit TaskProvider kann auf UseTask zugreifen und Aufagebn (gloable) ändern
// // // export const TaskProvider = ({ children }) => {
// // //   const [tasks, dispatch] = useReducer(taskReducer, initialState);

// // //   return (
// // //     <TaskContext.Provider value={{ tasks, dispatch }}>
// // //       {children}
// // //     </TaskContext.Provider>
// // //   );
// // // };
// // // // Zugriff in Komponenten; const { tasks, dispatch } = useTaskContext();

// // // export const useTaskContext = () => useContext(TaskContext);
// // // import React, { createContext, useContext, useReducer, useEffect } from "react";

// // // // 1️⃣ Aufgaben-Initialzustand
// // // const initialState = {
// // //   tasks: [],
// // // };

// // // // 2️⃣ Reducer: Wie verhalten sich Aufgaben bei bestimmten Aktionen?
// // // function taskReducer(state, action) {
// // //   switch (action.type) {
// // //     case "ADD_TASK":
// // //       return {
// // //         ...state,
// // //         tasks: [...state.tasks, action.payload],
// // //       };

// // //     case "DELETE_TASK":
// // //       return {
// // //         ...state,
// // //         tasks: state.tasks.filter((task) => task.id !== action.payload),
// // //       };

// // //     case "TOGGLE_COMPLETE":
// // //       return {
// // //         ...state,
// // //         tasks: state.tasks.map((task) =>
// // //           task.id === action.payload
// // //             ? { ...task, completed: !task.completed }
// // //             : task
// // //         ),
// // //       };

// // //     case "ADD_FEEDBACK":
// // //       return {
// // //         ...state,
// // //         tasks: state.tasks.map((task) =>
// // //           task.id === action.payload.id
// // //             ? {
// // //                 ...task,
// // //                 feedback: action.payload.feedback,
// // //                 actualMinutes: action.payload.actualMinutes,
// // //               }
// // //             : task
// // //         ),
// // //       };

// // //     case "SET_TASKS":
// // //       return {
// // //         ...state,
// // //         tasks: action.payload,
// // //       };

// // //     default:
// // //       return state;
// // //   }
// // // }

// // // // 3️⃣ Context erstellen
// // // const TaskContext = createContext();

// // // // 4️⃣ Provider-Komponente, die alles umschließt
// // // export function TaskProvider({ children }) {
// // //   const [state, dispatch] = useReducer(taskReducer, initialState);

// // //   // optional: localStorage verwenden
// // //   useEffect(() => {
// // //     const stored = localStorage.getItem("tasks");
// // //     if (stored) {
// // //       dispatch({ type: "SET_TASKS", payload: JSON.parse(stored) });
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     localStorage.setItem("tasks", JSON.stringify(state.tasks));
// // //   }, [state.tasks]);

// // //   return (
// // //     <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
// // //       {children}
// // //     </TaskContext.Provider>
// // //   );
// // // }

// // // // 5️⃣ Custom Hook zum Verwenden des Contexts
// // // export function useTaskContext() {
// // //   return useContext(TaskContext);
// // // }

// // import React, { createContext, useContext, useReducer, useEffect } from "react";

// // // Hilfsfunktion zum Laden/Speichern aus Local Storage
// // const loadTasks = () => {
// //   const data = localStorage.getItem("tasks");
// //   return data ? JSON.parse(data) : [];
// // };

// // const saveTasks = (tasks) => {
// //   localStorage.setItem("tasks", JSON.stringify(tasks));
// // };

// // // 1️⃣ Initialer Zustand
// // const initialState = {
// //   tasks: loadTasks(),
// //   activeTask: null, // aktuell ausgewählte Aufgabe für den Timer
// // };

// // // 2️⃣ Reducer
// // function taskReducer(state, action) {
// //   switch (action.type) {
// //     case "ADD_TASK":
// //       const newTasks = [...state.tasks, action.payload];
// //       saveTasks(newTasks);
// //       return { ...state, tasks: newTasks };

// //     case "DELETE_TASK":
// //       const filtered = state.tasks.filter((task) => task.id !== action.payload);
// //       saveTasks(filtered);
// //       return { ...state, tasks: filtered };

// //     case "TOGGLE_COMPLETE":
// //       const updated = state.tasks.map((task) =>
// //         task.id === action.payload
// //           ? { ...task, completed: !task.completed }
// //           : task
// //       );
// //       saveTasks(updated);
// //       return { ...state, tasks: updated };

// //     case "MARK_COMPLETED":
// //       const completed = state.tasks.map((task) =>
// //         task.id === action.payload ? { ...task, completed: true } : task
// //       );
// //       saveTasks(completed);
// //       return { ...state, tasks: completed };

// //     case "ADD_FEEDBACK":
// //       const feedbackUpdated = state.tasks.map((task) =>
// //         task.id === action.payload.id
// //           ? {
// //               ...task,
// //               feedback: action.payload.feedback,
// //               actualMinutes: action.payload.actualMinutes,
// //             }
// //           : task
// //       );
// //       saveTasks(feedbackUpdated);
// //       return { ...state, tasks: feedbackUpdated };

// //     case "SET_ACTIVE_TASK":
// //       return { ...state, activeTask: action.payload };

// //     default:
// //       return state;
// //   }
// // }

// // // 3️⃣ Context erzeugen
// // const TaskContext = createContext();

// // // 4️⃣ Provider-Komponente
// // export function TaskProvider({ children }) {
// //   const [state, dispatch] = useReducer(taskReducer, initialState);

// //   // optional: Auto-Speichern bei jedem Update
// //   useEffect(() => {
// //     saveTasks(state.tasks);
// //   }, [state.tasks]);

// //   return (
// //     <TaskContext.Provider value={{ state, dispatch }}>
// //       {children}
// //     </TaskContext.Provider>
// //   );
// // }

// // // 5️⃣ Custom Hook zum Verwenden in Komponenten
// // export function useTaskContext() {
// //   return useContext(TaskContext);
// // }
// import React, { createContext, useContext, useReducer, useEffect } from "react";

// const TaskContext = createContext();

// const initialState = {
//   tasks: [],
//   activeTask: null,
// };

// function taskReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case "TOGGLE_COMPLETE":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };
//     case "DELETE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };
//     case "SET_ACTIVE_TASK":
//       return {
//         ...state,
//         activeTask: action.payload,
//       };
//     default:
//       return state;
//   }
// }

// export const TaskProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(taskReducer, initialState);

//   useEffect(() => {
//     const stored = localStorage.getItem("tasks");
//     if (stored) {
//       try {
//         const parsed = JSON.parse(stored);
//         dispatch({ type: "SET_TASKS", payload: parsed });
//       } catch (e) {}
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(state.tasks));
//   }, [state.tasks]);

//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// export const useTaskContext = () => useContext(TaskContext);
// import React, { createContext, useContext, useReducer, useEffect } from "react";

// // 1️⃣ Initialzustand
// const initialState = {
//   tasks: [],
//   activeTask: null,
// };

// // 2️⃣ Reducer-Funktion
// function taskReducer(state, action) {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };

//     case "TOGGLE_COMPLETE":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };

//     case "DELETE_TASK":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload),
//       };

//     case "MARK_COMPLETED":
//       return {
//         ...state,
//         tasks: state.tasks.map((task) =>
//           task.id === action.payload ? { ...task, completed: true } : task
//         ),
//       };

//     case "ADD_FEEDBACK":
//       const updatedTasks = state.tasks.map((task) =>
//         task.id === action.payload.id
//           ? {
//               ...task,
//               feedback: action.payload.feedback,
//               actualMinutes: action.payload.actualMinutes,
//             }
//           : task
//       );
//       return { ...state, tasks: updatedTasks };

//     case "SET_ACTIVE_TASK":
//       return {
//         ...state,
//         activeTask: action.payload,
//       };

//     case "SET_TASKS":
//       return {
//         ...state,
//         tasks: action.payload,
//       };

//     default:
//       return state;
//   }
// }

// // 3️⃣ Context erstellen
// const TaskContext = createContext();

// // 4️⃣ Provider-Komponente
// export const TaskProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(taskReducer, initialState);

//   // Optional: localStorage laden beim Start
//   useEffect(() => {
//     const saved = localStorage.getItem("tasks");
//     if (saved) {
//       try {
//         const parsed = JSON.parse(saved);
//         dispatch({ type: "SET_TASKS", payload: parsed });
//       } catch (e) {
//         console.error("Fehler beim Laden aus localStorage", e);
//       }
//     }
//   }, []);

//   // Speichern in localStorage bei Änderung
//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(state.tasks));
//   }, [state.tasks]);

//   return (
//     <TaskContext.Provider value={{ state, dispatch }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

// // 5️⃣ Custom Hook zum einfachen Zugriff
// export const useTaskContext = () => useContext(TaskContext);

// mit localStorage
import React, { createContext, useContext, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

const initialState = {
  tasks: [],
  activeTask: null,
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "SET_ACTIVE_TASK":
      return { ...state, activeTask: action.payload };
    case "MARK_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: true } : task
        ),
        activeTask: null,
      };
    case "ADD_FEEDBACK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                feedback: action.payload.feedback,
                actualMinutes: action.payload.actualMinutes,
              }
            : task
        ),
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [storedState, setStoredState] = useLocalStorage(
    "tasksData",
    initialState
  );

  const [state, dispatchBase] = useReducer((state, action) => {
    const newState = taskReducer(state, action);
    setStoredState(newState); // <- speichern nach jeder Aktion
    return newState;
  }, storedState);

  return (
    <TaskContext.Provider value={{ state, dispatch: dispatchBase }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTaskContext = () => useContext(TaskContext);

// konsole zum sehen local JSON.parse(localStorage.getItem("tasksData"))
