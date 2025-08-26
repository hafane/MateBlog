import { PagePath } from '@/utils/page-path-config'
import { Navigate, Outlet, useOutletContext } from 'react-router'

const PrivateRoutes = () => {
    
    const context = useOutletContext<boolean>()

    if(!context) {
        return <Navigate to={PagePath.login} replace />
    }
    
    return <Outlet/> 
}

export default PrivateRoutes;
