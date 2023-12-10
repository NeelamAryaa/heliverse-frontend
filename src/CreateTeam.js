import React, { useState } from "react";
import DisplayUsers from "./DisplayUsers";
import UserCard from "./UserCard";
import axios from "axios";
import { baseUrl } from "./App";
import TeamModal from "./TeamModal";

export default function CreateTeam({ team, isCreateTeam, setIsCreateTeam }) {
  console.log(team);

  const [teamName, setTeamName] = useState("");
  const [createdTeam, setCreatedTeam] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const createTeamHandle = async () => {
    try {
      const res = await axios.post(`${baseUrl}/api/team`, { teamName, team });
      console.log(res.data);
      setCreatedTeam(res.data);
      setShowModal(true);
      setIsCreateTeam(false);
    } catch (err) {
      console.log(err);
    }
  };
  //   debugger;
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <TeamModal createdTeam={createdTeam} handleClose={handleClose} />
      ) : null}
      {team && isCreateTeam ? (
        <div
          className="container border border-primary rounded p-3 mt-4"
          style={{ background: "#bed5ed" }}
        >
          <h3 className="text-primary text-left mb-4">Create Your Team</h3>
          <div class="input-group w-75 m-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Team Name"
              onChange={(e) => setTeamName(e.target.value)}
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary"
                type="button"
                onClick={createTeamHandle}
              >
                Create Team
              </button>
            </div>
          </div>

          <UserCard users={team} />
        </div>
      ) : null}
      {}
    </>
  );
}
