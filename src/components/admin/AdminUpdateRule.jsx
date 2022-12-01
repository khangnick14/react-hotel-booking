import React from "react";
import Rule from "../Rule";
import AdminNavBar from "./AdminNavBar";
const AdminUpdateRule = ({ data }) => {
  return (
    <div className="w-full h-full bg-slate-300">
      <div className="py-5">
        <AdminNavBar />
      </div>
      <div className="mt-20">
        <Rule data={data} />
      </div>
    </div>
  );
};

export default AdminUpdateRule;
