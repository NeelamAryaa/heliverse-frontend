import React from "react";

const UserCard = ({ users }) => {
  console.log(users);
  //   debugger;
  return (
    <div className="row m-4">
      {users.map((user, idx) => {
        return (
          <div class="card m-2" style={{ width: "18rem" }}>
            <img src={user.avatar} alt={user.first_name} />
            <div class="card-body">
              <h5 class="card-title">
                {user.first_name + " " + user.last_name}
              </h5>
              {/* <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p> */}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Domain : {user.domain}</li>
              <li class="list-group-item">Gender : {user.gender}</li>
              <li class="list-group-item">
                Availability : {user.available ? "Yes" : "No"}
              </li>
              {/* <li class="list-group-item">Vestibulum at eros</li> */}
            </ul>
            {/* <div class="card-body">
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div> */}
          </div>
        );
        // return (
        //   <div class="col-sm-3 my-2">
        //     <div class="card">
        //       <div class="card-body">
        //         <img src={user.avatar} alt={user.first_name} />
        //         <h2>{user.first_name + " " + user.last_name}</h2>
        //       </div>
        //     </div>
        //   </div>
        // );
      })}
    </div>
  );
};

export default UserCard;
