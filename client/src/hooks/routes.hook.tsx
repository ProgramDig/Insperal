import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import AdminPage from "../pages/Admin/Admin.page";
import ApiPage from "../pages/API/Api.page";
import LoginPage from "../pages/Login/Login.page";
import RegistrationPage from "../pages/Registration/Registration.page";
import TablePage from "../pages/Table/Table.page";

const RoutesHook: React.FC = (): JSX.Element => {
  const role = "ADMIN";
  return (
    <>
      <Routes>
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/api"} element={<ApiPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/registration"} element={<RegistrationPage />} />
        <Route path={"/table"} element={<TablePage />} />
        {role ?
          <Route path={"*"} element={<Navigate to={"/home"} replace/>} />
          :
          <Route path={"*"} element={<Navigate to={"/login"} replace/>} />
        }
      </Routes>
    </>
  );
};

export default RoutesHook;
