import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from "state"

const RequireAuth = () => {
   /*  const token = useSelector(selectCurrentToken) */
   const token = null
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth