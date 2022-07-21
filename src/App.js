import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Directory from "./pages/Directory/Directory";
import Navbar from "./pages/Navbar/Navbar";
import Authentication from "./pages/Authentication/Authentication";
import Paintings from "./pages/Paintings/Paintings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Directory />} />
          <Route path="paintings" element={<Paintings />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
