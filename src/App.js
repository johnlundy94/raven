import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./pages/Directory/Directory";
import Navbar from "./pages/Navbar/Navbar";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Directory />} />
          <Route path="sign-in" element={<SignIn />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
