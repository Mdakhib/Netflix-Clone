import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//we need to somehow seed the database

//we need to config here
const config = {};

const firebase = Firebase.initializeApp(config);

export { firebase };
