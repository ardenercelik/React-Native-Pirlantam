// new
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {isFirstTime} from '../helper/login';
// new

const LoginContext = React.createContext([]);
function LoginContextProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [firstSignIn, setFirstSignIn] = useState();

  useEffect(() => {
    const getJwt = async () => {
      const cuser = await auth().currentUser;
      setUser(cuser);
      let jwtToken = auth().onAuthStateChanged(async function (user) {
        if (user) {
          await user.getIdToken().then(function (idToken) {
            setToken(idToken); // It shows the Firebase token now
            return idToken;
          });
        }
      });
    };
    getJwt(user);
  }, []);
  useEffect(() => {
    console.log('id token: ' + token);
  }, [token]);

  return (
    // new
    <LoginContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
}
export {LoginContext, LoginContextProvider};
