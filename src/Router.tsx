import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
