import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

//we need to somehow seed the database

//we need to config here
const config = {
  apiKey: "AIzaSyC4_r3STP1qc2Ne-_oVykZlc9zXjoxMbyo",
  authDomain: "netflix-aee7f.firebaseapp.com",
  projectId: "netflix-aee7f",
  storageBucket: "netflix-aee7f.appspot.com",
  messagingSenderId: "60622029233",
  appId: "1:60622029233:web:6119653be3f2c0ba2c3d90",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase)

export { firebase };
