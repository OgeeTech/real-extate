import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Waitlist from "./pages/Waitlist";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
};

export default App;
