import React from "react";

export default function Input({ label }) {
  return (
    <div className="d-flex flex-column">
      {label && <label className="py-3">{label}(*)</label>}
      <input
        className="border border-secondary-subtle rounded-1"
        style={{ minHeight: "40px" }}
      />
    </div>
  );
}
