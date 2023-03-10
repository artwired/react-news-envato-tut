import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
export default function Layout() {
    const topics = ["ReactJS", "JavaScript", "HTML5"]
    return (
        <>
        <Navbar topics={topics} />
        <div className="container mt-3">
            <Outlet />
        </div>
        </>
    )
}