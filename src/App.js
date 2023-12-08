import logo from "./logo.svg";
import "./App.css";
import UserCard from "./UserCard";
// import users from "./heliverse_mock_data.json";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Filters from "./Filters";

function App() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const userPerPage = 20;

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  useEffect(() => {
    fetchUserByName();
  }, [name]);

  const fetchUserByName = async (e) => {
    if (!name) return;
    try {
      const res = await axios.get(
        `https://heliverse-backend-v3.onrender.com/api/search-user?name=${name}`
      );
      console.log(res.data);

      setUserList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    console.log(currentPage);
    try {
      const res = await axios.get(
        `https://heliverse-backend-v3.onrender.com/api/users?page=${currentPage}`
      );
      console.log(res.data);
      setTotalUsers(res.data.totalUsers);
      setUserList(res.data.users);
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeFilter = async (filterMap) => {
    console.log(filterMap);
    try {
      const filterUsers = await axios.get(
        `https://heliverse-backend-v3.onrender.com/filter-users?domain=${filterMap.domain}&gender=${filterMap.gender}&available=${filterMap.availability}`
      );
      setUserList(filterUsers.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App w-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Heliverse
          </a>

          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setName(e.target.value)}
            />

            <button class="btn btn-lg btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Filters onChangeFilter={onChangeFilter} />

      {/* <header className="fs-1 fw-bold">Assignment</header> */}
      <UserCard users={userList} />
      <Pagination
        totalUsers={totalUsers}
        userPerPage={userPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
