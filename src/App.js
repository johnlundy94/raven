import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./pages/Directory/Directory";
import Navbar from "./pages/Navbar/Navbar";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Directory />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
