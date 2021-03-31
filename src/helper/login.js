import auth from '@react-native-firebase/auth';
import {URLS} from '../constants';
import {axiosInstance, fetchData} from './axios';
export const isFirstTime = async (uid) => {
  let result = false;
  url = URLS.GET_USER + uid;
  console.log('uid' + uid);
  try {
    const response = await axiosInstance.get(url);
    if (response.status === 200) {
      console.log('User exists on the DB: ' + response.status);
    }
  } catch (e) {
    if (e.response.status === 404) {
      console.log(`User does not exist on DB: ${e.response.status}`);
      result = true;
    }
  }
  return result;
};

export const signOut = (user, setUser, setToken) => {
  if (user) {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    setUser(null);
    setToken(null);
  } else {
    console.log('no user signed in');
  }
};
