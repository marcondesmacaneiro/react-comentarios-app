import Rebase from "re-base";
import firebase from "firebase";

// import dotenv from 'dotenv'
// dotenv.config()

const firebaseApp = firebase.initializeApp({
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // databaseURL: process.env.DATABASE_URL,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID

  apiKey: "AIzaSyA547TTighDUQ0s7yjV_Pu7zSJrcZAalKU",
  authDomain: "comentarios-app-d71e0.firebaseapp.com",
  databaseURL: "https://comentarios-app-d71e0.firebaseio.com",
  projectId: "comentarios-app-d71e0",
  storageBucket: "comentarios-app-d71e0.appspot.com",
  messagingSenderId: "125933744611"
});
const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
  facebook: new firebase.auth.FacebookAuthProvider()
};

export const auth = firebaseApp.auth();
export default base;
