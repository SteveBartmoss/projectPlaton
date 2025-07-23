import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/NotFound";
import { NavBar } from "../components/navbar/navBar";


export function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}