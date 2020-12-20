import useAuth from './useAuth';
import useAdminAuth from './useAdminAuth';
import useSub from './useSub';

export {
    // access upon subscription
    useSub,
    // access upon login
    useAuth,
    // access with admin status
    useAdminAuth
};