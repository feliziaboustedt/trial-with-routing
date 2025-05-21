import { Outlet } from "react-router"
import { Header } from "../Components/Header/Header"
import "./Layout.css";

export const Layout = () => {

    return <>
    <div className="layout-container">
    <Header/>
    <main className="main-content">
        <Outlet/>
    </main>
    </div>
    </>
}