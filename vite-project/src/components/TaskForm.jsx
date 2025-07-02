//

//-----------------------------------TODO----------------------------------

// TODO:  uuid install für feste Zeit!!! npm install uuid

// -----------------------------------------------------------------------------
import React, { useState } from "react";
// useState: React Hook, um lokale Komponenten-States zu verwalten

import { useTaskContext } from "../context/TaskContext";
// custom Hook aus dem Context, um auf Aufgaben und Dispatcher zuzugreifen

import { v4 as uuidv4 } from "uuid";
// uuidv4 erzeugt eine eindeutige ID für jede neue Aufgabe

function TaskForm() {
  // Hole den "dispatch" aus dem TaskContext, um später Aktionen (z.B. neue Aufgabe hinzufügen) auszuführen
  const { dispatch } = useTaskContext();

  // Lokaler State für das Formular, initial leer/mit Standardwerten from user zu füllen:
  const [formData, setFormData] = useState({
    title: "", // Titel der Aufgabe
    description: "", // Beschreibung der Aufgabe
    estimatedMinutes: "", // geschätzte Dauer (Minuten)
    difficulty: 1, // Schwierigkeit, Standard 1
    priority: "mittel", // Dringlichkeit, Standard "mittel"
  });

  // Funktion, die bei Änderungen an Inputs/Textareas/Selects ausgeführt wird
  // Aktualisiert den formData-State mit dem geänderten Wert
  const handleChange = (e) => {
    setFormData({
      ...formData, // alte Werte behalten
      [e.target.name]: e.target.value, // das geänderte Feld neu setzen
    });
  };

  // Funktion, die beim Absenden des Formulars ausgeführt wird
  const handleSubmit = (e) => {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    // Neue Aufgabe wird als Objekt erstellt
    const newTask = {
      id: uuidv4(), // eindeutige ID generieren, ist ein muss
      title: formData.title, // Titel aus Formular
      description: formData.description, // Beschreibung aus Formular
      estimatedMinutes: Number(formData.estimatedMinutes), // geschätzte Dauer in Zahl umwandeln
      difficulty: Number(formData.difficulty), // Schwierigkeit als Zahl
      priority: formData.priority, // Dringlichkeit (niedrig/mittel/hoch)
      completed: false, // Aufgabe ist noch nicht erledigt
      createdAt: new Date(), // Erstellungszeitpunkt
      actualMinutes: null, // noch keine tatsächliche Dauer (wird später ergänzt)
      feedback: "", // Feedback noch leer
    };

    // Neue Aufgabe an den Context "dispatchen" (hinzufügen)
    dispatch({ type: "ADD_TASK", payload: newTask });

    // Formular nach dem Absenden zurücksetzen (leeren)
    setFormData({
      title: "",
      description: "",
      estimatedMinutes: "",
      difficulty: 1,
      priority: "mittel",
    });
  };

  return (
    <div className="card bg-base-100 shadow">
      {/* Überschrift */}
      <div className="card-body">
        <h2 className="card-title">Neue Aufgabe anlegen</h2>

        {/* Formular */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Titel der Aufgabe */}
          <input
            type="text"
            name="title"
            placeholder="Titel"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={handleChange}
            required // Pflichtfeld
          />

          {/* Beschreibung der Aufgabe */}
          <textarea
            name="description"
            placeholder="Beschreibung"
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={handleChange}
          />

          {/* Geschätzte Dauer in Minuten */}
          <input
            type="number"
            name="estimatedMinutes"
            placeholder="Geschätzte Dauer (Minuten)"
            className="input input-bordered w-full"
            value={formData.estimatedMinutes}
            onChange={handleChange}
            min="1" // Minimum 1 Minute
            required
          />

          {/* Schwierigkeit als Range-Slider (1 bis 5) */}
          <label className="block">
            Schwierigkeit (1-5):
            <input
              type="range"
              name="difficulty"
              min="1"
              max="5"
              value={formData.difficulty}
              onChange={handleChange}
              className="range"
            />
          </label>

          {/* Dringlichkeit als Dropdown */}
          <label className="block">
            Dringlichkeit:
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option value="niedrig">Niedrig</option>
              <option value="mittel">Mittel</option>
              <option value="hoch">Hoch</option>
            </select>
          </label>

          {/* Submit-Button */}
          <button type="submit" className="btn btn-primary w-full">
            Aufgabe hinzufügen
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
