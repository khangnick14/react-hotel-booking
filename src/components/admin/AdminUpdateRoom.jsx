import React from "react";
import Room from "../Room";
import AdminNavBar from "./AdminNavBar";

const AdminUpdateRoom = ({ data }) => {
  return (
    <div className="w-full h-full bg-white-300">
      <div className="py-5">
        <AdminNavBar />
      </div>
      <div className="mt-20">
        <Room data={data} />
      </div>
    </div>
  );
};

export default AdminUpdateRoom;
