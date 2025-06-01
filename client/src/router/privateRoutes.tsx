import { Navigate, Outlet, useOutletContext } from 'react-router'

const PrivateRoutes = () => {
    
    const context = useOutletContext<boolean>()

    if(!context) {
        return <Navigate to={"/login"} replace />
    }
    
    return <Outlet/> 
}

export default PrivateRoutes;
