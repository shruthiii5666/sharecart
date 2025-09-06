import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
