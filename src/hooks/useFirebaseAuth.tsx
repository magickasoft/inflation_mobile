import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import React from 'react';
export interface AuthFormData {
  email: string;
  password: string;
}

export const useFirebaseAuth = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const currentUser = auth().currentUser;

  const onAuthStateChanged = (data: any) => {
    setUser(data);
    if (initializing) {
      setInitializing(false);
    }
  };

  const getToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('getToken:: ', token);
    } catch (error) {
      console.log('getToken ~ error', error);
    }
  };

  React.useEffect(() => {
    getToken();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const sendEmailVerification = () =>
    currentUser?.sendEmailVerification({
      handleCodeInApp: true,
      url: 'https://realty-nsk.firebaseapp.com',
    });

  const createUserWithEmailAndPassword = async ({
    email,
    password,
  }: AuthFormData) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const signInWithEmailAndPassword = ({email, password}: AuthFormData) =>
    auth().signInWithEmailAndPassword(email, password);

  const signOut = () => auth().signOut();

  const sendPasswordResetEmail = (email: string) =>
    auth().sendPasswordResetEmail(email);

  return {
    currentUser,
    initializing,
    user,
    setUser,
    sendEmailVerification,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
  };
};
