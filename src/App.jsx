import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewEntry from "./pages/NewEntry";
import { ToastContainer } from "react-toastify";
import PastEntries from "./pages/PastEntries";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewEntry />} />
        <Route path="/entries" element={<PastEntries />} />
      </Routes>
      <ToastContainer position="bottom-right" />
    </BrowserRouter>
  );
}
