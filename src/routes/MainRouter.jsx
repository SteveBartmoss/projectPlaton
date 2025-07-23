import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { AppRouter } from "./AppRouter";
import { DivApp } from "../components/containers/container";

export function MainRouter(){
    return(
        <>
        <DivApp>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/*" element={<AppRouter />}/>
                </Routes>
            </BrowserRouter>
        </DivApp>
        </>
    )
}