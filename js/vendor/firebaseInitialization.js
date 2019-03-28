const apiKey = process.env.FIREBAE_API_KEY;
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
const projectId = process.env.FIREBASE_PROJECT_ID;

var config = {
  apiKey: apiKey,
  authDomain: 'discover-funretro-61a4c.firebaseapp.com',
  databaseURL: 'https://' + projectId + '.firebaseio.com',
  projectId: projectId,
  storageBucket: projectId + '.appspot.com',
  messagingSenderId: messagingSenderId
};

firebase.initializeApp(config);
