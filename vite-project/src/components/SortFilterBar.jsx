// import React from "react";

// function SortFilterBar() {
//   return (
//     <div className="card bg-base-100 shadow">
//       <div className="card-body">
//         <h2 className="card-title">Sortieren & Filtern</h2>
//         <p>(Filteroptionen kommen später)</p>
//       </div>
//     </div>
//   );
// }

// export default SortFilterBar;
import React from "react";

function SortFilterBar({ sortKey, setSortKey }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <label className="font-medium">Sortieren nach:</label>
      <select
        className="select select-bordered select-sm"
        value={sortKey}
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option value="createdAt">Erstellt</option>
        <option value="priority">Dringlichkeit</option>
        <option value="estimatedMinutes">Dauer</option>
        <option value="difficulty">Schwierigkeit</option>
        <option value="title">Alphabetisch</option>
      </select>
    </div>
  );
}

export default SortFilterBar;
