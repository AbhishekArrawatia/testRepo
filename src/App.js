import { onAuthStateChanged, auth } from "./firebase";
import { React, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen/HomeScreen";
import LoginScreen from "./LoginScreen/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./Profile/Profile";
function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
      return unsubscribe;
    });
  }, [dispatch]);
  return (
    <div className="app">
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" exact element={<HomeScreen />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
