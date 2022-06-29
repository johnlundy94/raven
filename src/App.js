import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./pages/Directory/Directory";
import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Directory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
