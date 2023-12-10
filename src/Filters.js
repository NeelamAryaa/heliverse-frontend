import axios from "axios";
import React, { useState } from "react";
const domains = [
  "Sales",
  "Finance",
  "Marketing",
  "IT",
  "Management",
  "UI Designing",
  "Business Development",
];
const genders = ["Female", "Male"];

export default function Filters({ onChangeFilter }) {
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState("");
  const [availability, setAvailability] = useState("");

  return (
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setDomain(e.target.value)}
          >
            <option value="">Select Domain</option>
            {domains.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            {genders.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
          </select>
        </div>
        <div class="col">
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setAvailability(e.target.value)}
          >
            <option value="">Select Availability</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="col">
          <button
            type="button"
            class="btn btn-primary px-5"
            onClick={() => onChangeFilter({ gender, domain, availability })}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
