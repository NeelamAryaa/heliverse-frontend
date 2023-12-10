import React from "react";

export default function Navbar({ onSubmitHandle, setName, setIsCreateTeam }) {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light border shadow-sm p-0"
        style={{ background: "#bdd6f0" }}
      >
        <div class="container-fluid m-auto">
          <div className="d-flex align-items-center">
            <a class="navbar-brand" href="#">
              <h2
                style={{
                  background: `linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Heliverse
              </h2>
            </a>

            {/* <a href="" className="text-decoration-none">
              <h5 className="ms-3 text-primary ">Teams</h5>
            </a> */}
          </div>

          <div className="d-flex">
            <button
              class="btn btn-outline-primary text-nowrap px-3 me-3"
              type="submit"
              onClick={() => setIsCreateTeam(true)}
            >
              Create Team
            </button>
            <form class="d-flex" onSubmit={onSubmitHandle}>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setName(e.target.value)}
              />

              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
