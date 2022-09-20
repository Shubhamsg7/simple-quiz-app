import { useEffect } from 'react';
import './App.css';
import 'animate.css';
import AppRoutes from './approutes/AppRoutes';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, getCategories, getQuiz } from './actions';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  // If user LOGIN or LOGOUT
  useEffect(() => {
    // If user is not loggedin
    if (state.token === null) {
      // Get token from local storage (Previous Login)
      let token = window.localStorage.getItem("token");
      if (token !== 'null') { // Token Exists
        dispatch(setLogin(token));
      }
    }

    window.localStorage.setItem("token", state.token); // Setting current token in local storage
  }, [state.token, dispatch]);



  /*   useEffect(() => {
      if (state.token) {
        dispatch(getQuiz())
      }
    }, [dispatch, state.token]) */

  return (
    <div className='bg-slate-100 dark:bg-gray-900 h-screen'>
      <AppRoutes />
    </div>
  );
}

export default App;
