import { Navigate } from 'react-router-dom';

const PrivateRouter = ({ component: Component, ...rest }) => {
    const firstLogin = localStorage.getItem('firstLogin');

    return firstLogin ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRouter;
