import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/Home";
import Updates from "./pages/Updates";
import ResourceCamp from "./pages/ResourceCamp";
import LocationInfo from "./pages/LocationInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/resource-camp" element={<ResourceCamp />} />
        <Route path="/location" element={<LocationInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
