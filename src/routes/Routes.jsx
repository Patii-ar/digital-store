import {BrowserRouter as Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function PageRoutes () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </Router>
    )
}