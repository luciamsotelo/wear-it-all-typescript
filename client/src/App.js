// folder src file App.tsx

import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./views/home";
import Buy from "./views/buy";
import Gift from "./views/gift";
import Sell from "./views/sell";
import Show from "./views/show";
import Update from "./views/update";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/show" element={<Show />} />
                <Route path="/update" element={<Update />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
