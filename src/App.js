import logo from "./logo.svg";
import "./App.css";
import UserCard from "./UserCard";

import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Filters from "./Filters";
import CreateTeam from "./CreateTeam";
import Navbar from "./Navbar";
import DisplayUsers from "./DisplayUsers";

export const baseUrl = "https://heliverse-backend-v3.onrender.com";
// export const baseUrl = "http://localhost:5000";

function App() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isCreateTeam, setIsCreateTeam] = useState(false);
  const [team, setTeam] = useState([]);

  const userPerPage = 20;

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  useEffect(() => {
    fetchUserByName();
  }, [name]);

  const onSubmitHandle = (e) => {
    e.preventDefault();
    fetchUserByName();
  };

  const fetchUserByName = async (e) => {
    if (!name) return;
    try {
      const res = await axios.get(`${baseUrl}/api/search-user?name=${name}`);
      console.log(res.data);

      setUserList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    console.log(currentPage);
    try {
      const res = await axios.get(`${baseUrl}/api/users?page=${currentPage}`);
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
        `${baseUrl}/filter-users?domain=${filterMap.domain}&gender=${filterMap.gender}&available=${filterMap.availability}`
      );
      setUserList(filterUsers.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App w-100">
      <Navbar
        onSubmitHandle={onSubmitHandle}
        setName={setName}
        setIsCreateTeam={setIsCreateTeam}
      />
      <Filters onChangeFilter={onChangeFilter} />

      {team.length !== 0 ? (
        <CreateTeam
          team={team}
          setIsCreateTeam={setIsCreateTeam}
          isCreateTeam={isCreateTeam}
        />
      ) : null}

      <DisplayUsers
        userList={userList}
        totalUsers={totalUsers}
        userPerPage={userPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        isCreateTeam={isCreateTeam}
        setTeam={setTeam}
      />
    </div>
  );
}

export default App;
