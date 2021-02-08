import auth from '@react-native-firebase/auth';

const userMetadataRegex = /^(\w+-\w+-\w+)T(\w+:\w+:\w+).+Z$/;
export const isFirstTime = (user) => {
  if (user) {
    const cre = user.metadata.creationTime.match(userMetadataRegex);
    const lst = user.metadata.lastSignInTime.match(userMetadataRegex);
    let CrDate = cre[1];
    let CrTime = cre[2];
    let LsDate = lst[1];
    let LsTime = lst[2];
    console.log({user});
    if (CrDate === LsDate && CrTime === LsTime) {
      console.log('first sign in');
      return true;
    } else {
      console.log('welcome back');
      return false;
    }
  }
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
