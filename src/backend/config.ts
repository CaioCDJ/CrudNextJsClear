import firebase from 'firebase';
import 'firebase/firestore';

if(!firebase.apps.length){
    firebase.initializeApp({
        apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    });
    
    firebase.firestore().settings({
        experimentalForceLongPolling:false
        
    });
}

export default firebase;