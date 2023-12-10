import React, { useState } from "react";

const UserCard = ({ users, isCreateTeam, setTeam }) => {
  console.log(users);
  //   debugger;
  return (
    <div className="row justify-content-center m-4">
      {users.map((user, idx) => {
        return (
          <div
            key={idx}
            class={`user-card card m-2 shadow`}
            style={{ width: "18rem" }}
          >
            <img
              className="text-center object-fit-contain "
              src={user.avatar}
              alt={user.first_name}
              width="100%"
              height="100px"
            />
            <div class="card-body">
              <h5 class="card-title">
                {user.first_name + " " + user.last_name}
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Domain : {user.domain}</li>
              <li class="list-group-item">Gender : {user.gender}</li>
              <li class="list-group-item">
                Availability : {user.available ? "Yes" : "No"}
              </li>
            </ul>
            <div class="card-body">
              {isCreateTeam ? (
                <button
                  class="btn btn-outline-primary"
                  type="submit"
                  onClick={() => setTeam((prev) => [...prev, user])}
                >
                  Add
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserCard;
