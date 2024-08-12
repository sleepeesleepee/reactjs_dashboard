import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LuckyDraw from "./pages/LuckyDraw";
import DiamondDraw from "./pages/DiamondDraw";
import RankUp from "./pages/RankUp";
import Partners from "./pages/Partners"; // Updated this import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="luckydraw" element={<LuckyDraw />} />
          <Route path="diamonddraw" element={<DiamondDraw />} />
          <Route path="rankup" element={<RankUp />} />
          <Route path="partners" element={<Partners />} /> {/* Updated this line */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;