import { Route, Routes } from "react-router-dom";
import LoginNav from "../LoginNav";
import Register from "../Register";
import Main from "../Main";
import Login from "../Login";
import LoginEmailAndPassword from "../LoginEmailAndPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginNav />} />
      <Route path="/register" element={<Register />} />
      <Route path="/accounts" element={<Login />} />
      <Route path="/accounts/email" element={<LoginEmailAndPassword />} />
    </Routes>
  );
}
