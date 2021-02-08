// new
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
// new

const LoginContext = React.createContext([]);
function LoginContextProvider(props) {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [magazaLoading, setMagazaLoading] = useState(false);

  useEffect(() => {
    const getJwt = async (user) => {
      const cuser = await auth().currentUser;
      setUser(cuser);
      let jwtToken = await auth().onAuthStateChanged(function (user) {
        if (user) {
          user.getIdToken().then(function (idToken) {
            setToken(idToken); // It shows the Firebase token now
            return idToken;
          });
        }
      });
      return jwtToken;
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
        magazaLoading,
        setMagazaLoading,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
}
export {LoginContext, LoginContextProvider};
