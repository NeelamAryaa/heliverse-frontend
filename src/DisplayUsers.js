import React from "react";
import UserCard from "./UserCard";
import Pagination from "./Pagination";

export default function DisplayUsers({
  userList,
  totalUsers,
  userPerPage,
  setCurrentPage,
  currentPage,
  isCreateTeam,

  setTeam,
}) {
  return (
    <>
      <UserCard
        users={userList}
        isCreateTeam={isCreateTeam}
        setTeam={setTeam}
      />
      <Pagination
        totalUsers={totalUsers}
        userPerPage={userPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
