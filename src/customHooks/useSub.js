import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkUserIsSubscribed } from './../Utils';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const useSub = props => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();
    useEffect(() => {
        if (!checkUserIsSubscribed(currentUser)) {
            history.push('/payment');
        }
    }, [currentUser]);

    return currentUser;
}

export default useSub
