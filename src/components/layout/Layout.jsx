import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav'
import './layout.css'


const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className="layout">
                    <Sidebar {...props} />
                    <div className="layout__content">
                        <Topnav />
                        <div className="layout__content-main">
                            <Routes />
                        </div>
                    </div>
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
