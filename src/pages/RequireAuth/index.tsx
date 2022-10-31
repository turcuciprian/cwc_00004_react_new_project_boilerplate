import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../routes/auth";
import { pathLocations } from "../../routes/path";

export function RequireAuth({ children }: { children: JSX.Element }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to={pathLocations.loginPage} state={{ from: location }} replace />;
    }

    return children;
}