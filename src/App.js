import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import AdminLogIn from "./components/admin/AdminLogIn";
import useFetch from "./components/useFetch";
import AdminUpdateBasic from "./components/admin/AdminUpdateBasic";
import AdminUpdateRoom from "./components/admin/AdminUpdateRoom";
import AdminUpdateRule from "./components/admin/AdminUpdateRule";
import AdminUpdatePrice from "./components/admin/AdminUpdatePrice";

function App() {
  const url = "https://api.npoint.io/1d7ed0e2e20c23cb5c1f";
  const { data, loading, error } = useFetch(url);
  if (loading) return <h1>LOADING....</h1>;
  if (error) console.log(error);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage data={data} />} />
        <Route path="/admin" element={<AdminLogIn data={data} />} />
        <Route
          path="/admin-update-basic"
          element={<AdminUpdateBasic data={data} />}
        />
        <Route
          path="/admin-update-room"
          element={<AdminUpdateRoom data={data} />}
        />
        <Route
          path="/admin-update-rule"
          element={<AdminUpdateRule data={data} />}
        />
        <Route
          path="/admin-update-price"
          element={<AdminUpdatePrice data={data} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
