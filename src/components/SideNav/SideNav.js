import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { SidebarData } from "./SideNavData";
import "./SideNav.css";

function SideNav() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return(
        <>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                    <i className="fas fa-bars fa-2x" onClick={showSidebar}></i>
                    {/* <li onClick={showSidebar}>Open</li> */}
            </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <i className="far fa-window-close"></i>
                    </Link>
                </li>
                {SidebarData.map((item, index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>

        </>

    )
}

export default SideNav;
