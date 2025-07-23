import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { AppRouter } from "./AppRouter";

export function MainRouter(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/*" element={<AppRouter />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}