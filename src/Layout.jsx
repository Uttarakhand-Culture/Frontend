import React, {Suspense} from 'react'
import { Outlet } from 'react-router-dom'
import Github from "./components/Github.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LoadInfo from "./components/LoadInfo.jsx";

function Layout() {
    return (
        <>
            <Suspense fallback={<div className={"loading"}> <img src={"/loading.svg"}/> </div>}>
                <Navbar/>
                <Github />
                <LoadInfo/>
                <React.StrictMode>
                    <Outlet />
                </React.StrictMode>
                <Footer/>
            </Suspense>
        </>
    )
}
export default Layout