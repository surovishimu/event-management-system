import { Navigate } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const PrivateRout = ({ children }) => {
    const { user, loading } = UseAuth()

    if (loading) return (
        <div className="flex justify-center">
            <span className="loading loading-spinner text-primary loading-lg"></span>
        </div>
    );
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRout;