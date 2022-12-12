import {useAppDispatch, useAppSelector} from '../hooks';
import {logoutAction} from '../api-action';
import {AuthorizationStatus, LOGIN_ROUT} from '../constants';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus, getUser} from '../store/user-reducer/selector';

function UserBlock() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ?
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <button onClick={() => dispatch(logoutAction())} className="user-block__link">Sign out</button>
          </li>
        </> :
        <li className="user-block__item">
          <Link to={LOGIN_ROUT} className="user-block__link">Sign in</Link>
        </li>}
    </ul>
  );
}

export default UserBlock;
