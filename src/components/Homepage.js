import React from 'react';
import firebase from 'firebase/app';

function Homgepage() {
  return (
    <>
      <h4><em>welcome back {firebase.auth().currentUser.email}</em></h4>
    </>
  );
}

export default Homgepage;
