import firebase from "firebase/app";
import "firebase/auth";

async function getCurrentUser() {
  return new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged(user => {
      res(user);
    }, rej);
  });
}
export default getCurrentUser;
