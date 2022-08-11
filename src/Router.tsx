import { Route, Routes } from "react-router-dom";

// pages
import { Timer } from "@/pages/Timer";

export function Router() {
  return (
    <Routes>
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}
