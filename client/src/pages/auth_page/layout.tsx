import { Outlet } from "react-router"
import classnames from "classnames"
import cl from "./layout.module.css"

const Layout = () => {
    return (
        <div className={classnames('container', cl["container"])}>
           <Outlet/>  
        </div>
    );
}

export default Layout;
