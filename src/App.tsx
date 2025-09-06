import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import MySurplus from "./MySurplus";
import Marketplace from "./Marketplace";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mysurplus" element={<MySurplus />} />
      <Route path="/marketplace" element={<Marketplace />} />
    </Routes>
  );
}
