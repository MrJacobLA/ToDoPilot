// import React from "react";

// function TaskFilters({ filters, setFilters }) {
//   return (
//     <div className="flex flex-wrap gap-2 mb-4">
//       {/* Kategorie-Buttons */}
//       <div className="join">
//         <button
//           className={`btn btn-sm join-item ${
//             filters.category === "persönlich" ? "btn-primary" : "btn-outline"
//           }`}
//           onClick={() => setFilters({ ...filters, category: "persönlich" })}
//         >
//           🏠 Persönlich
//         </button>
//         <button
//           className={`btn btn-sm join-item ${
//             filters.category === "geschäftlich" ? "btn-primary" : "btn-outline"
//           }`}
//           onClick={() => setFilters({ ...filters, category: "geschäftlich" })}
//         >
//           💼 Geschäftlich
//         </button>
//         <button
//           className="btn btn-sm join-item btn-outline"
//           onClick={() => setFilters({ ...filters, category: null })}
//         >
//           ❌ Alle
//         </button>
//       </div>

//       {/* Plan-Buttons */}
//       <div className="join">
//         <button
//           className={`btn btn-sm join-item ${
//             filters.plan === "heute" ? "btn-secondary" : "btn-outline"
//           }`}
//           onClick={() => setFilters({ ...filters, plan: "heute" })}
//         >
//           📅 Heute
//         </button>
//         <button
//           className={`btn btn-sm join-item ${
//             filters.plan === "woche" ? "btn-secondary" : "btn-outline"
//           }`}
//           onClick={() => setFilters({ ...filters, plan: "woche" })}
//         >
//           📆 Diese Woche
//         </button>
//         <button
//           className="btn btn-sm join-item btn-outline"
//           onClick={() => setFilters({ ...filters, plan: null })}
//         >
//           ❌ Alle
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TaskFilters;
import React from "react";

function TaskFilters({ filters, setFilters }) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        className="select select-bordered"
        value={filters.category || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            category: e.target.value || null,
          }))
        }
      >
        <option value="">Alle Kategorien</option>
        <option value="persoenlich">👤 Persönlich</option>
        <option value="geschaeftlich">💼 Geschäftlich</option>
      </select>

      <select
        className="select select-bordered"
        value={filters.plan || ""}
        onChange={(e) =>
          setFilters((prev) => ({
            ...prev,
            plan: e.target.value || null,
          }))
        }
      >
        <option value="">Alle Zeitpläne</option>
        <option value="heute">📅 Heute</option>
        <option value="woche">📆 Diese Woche</option>
        <option value="offen">🕓 Offen</option>
      </select>
    </div>
  );
}

export default TaskFilters;
