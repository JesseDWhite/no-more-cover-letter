import firebase from '../firebase';

const socialMediaAuth = provider => {
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(res => res.user)
    .catch(er => er);
};

export default socialMediaAuth;
