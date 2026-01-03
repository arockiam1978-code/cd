import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
    return (

        <div className="site-root">
            <Header />
            <div className="site-content">{props.children}</div>
            <Footer />
        </div>
    )
}
export default Layout;