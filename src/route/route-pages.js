import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepath } from "../consts/RoutePaths";

import "../style/variable.css"

export function RoutePage() {
  return (
    <Router>
        <Routes>
        <Route link={Homepath}></Route>
        </Routes>
    </Router>
  );
}
