// new
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
// new

const getToken = async () => {
  if (user) {
    const user = await auth().currentUser;
    // const idTokenResult = await auth().currentUser.getIdToken(
    //   /* forceRefresh */ true,
    // );
    // setUser(user);
    // idTokenResult = user.getIdToken;
    // console.log('User JWT: ', idTokenResult);
    // console.log(user.uid);
  }
};

const LoginContext = React.createContext([]);
function LoginContextProvider(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = auth().currentUser;
    setUser(currentUser);
  }, []);
  // new
  return (
    // new
    <LoginContext.Provider value={{user, setUser}}>
      {props.children}
    </LoginContext.Provider>
  );
}
export {LoginContext, LoginContextProvider};
