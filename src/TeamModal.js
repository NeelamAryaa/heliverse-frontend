import React from "react";

export default function TeamModal({ createdTeam, handleClose }) {
  return (
    // <div>modal</div>
    <div class="card text-center w-50 m-auto mt-4">
      <div class="card-header fs-3 text-capitalize">
        {`Team Name : ${createdTeam.team_name}`}
      </div>
      <div class="card-body">
        <h5 class="card-title">Team Members : </h5>
        {createdTeam.selected_user.map((m) => {
          return <p class="card-text fs-5">{m.first_name}</p>;
        })}

        <button
          class="btn btn-primary mt-3"
          type="button"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
      {/* <div class="card-footer text-muted">2 days ago</div> */}
    </div>
  );
}
