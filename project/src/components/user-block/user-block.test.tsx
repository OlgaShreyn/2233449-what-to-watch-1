import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import UserBlock from './user-block';
import {Provider} from 'react-redux';
import {AuthorizationStatus} from '../../constants';
import {configureMockStore} from '@jedmao/redux-mock-store';

describe('Component: UserBlock', () => {
  it('should render sign out when auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      user: {authorizationStatus: AuthorizationStatus.Auth},
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render sign in when no auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      user: {authorizationStatus: AuthorizationStatus.NoAuth},
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
