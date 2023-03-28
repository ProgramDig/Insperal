import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Home.page";
import AdminPage from "../pages/Admin/Admin.page";
import ApiPage from "../pages/API/Api.page";
import LoginPage from "../pages/Login/Login.page";
import RegistrationPage from "../pages/Registration/Registration.page";
import TablePage from "../pages/Table/Table.page";
import { RoleEnum } from "../enums/role.enum";

interface RoutesHookProps {
  role: string;
}

const RoutesHook: React.FC<RoutesHookProps> = ({ role }): JSX.Element => {
  switch (role) {
    case RoleEnum.ADMIN:
      return (
        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/admin"} element={<AdminPage />} />
          <Route path={"/api"} element={<ApiPage />} />
          <Route path={"/table"} element={<TablePage />} />
          <Route path={"*"} element={<Navigate to={"/home"} replace />} />
        </Routes>
      );
    case RoleEnum.USER:
      return (
        <Routes>
          <Route path={"/home"} element={<HomePage />} />
          <Route path={"/api"} element={<ApiPage />} />
          <Route path={"/table"} element={<TablePage />} />
          <Route path={"*"} element={<Navigate to={"/home"} replace />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"*"} element={<Navigate to={"/login"} replace />} />
        </Routes>
      );
  }
};

export default RoutesHook;
