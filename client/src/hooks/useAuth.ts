import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { loginUser } from '../redux/features/authSlice';

export const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user, status } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      dispatch(loginUser({ token }));
    }
  }, [dispatch, user]);

  return { user, isLoading: status === 'loading' };
};