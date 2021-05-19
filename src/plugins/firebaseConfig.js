import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/functions'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyCb8EyxN8EaPXht7eDoGGezFFh-rMRV6xI",
  authDomain: "awards-box-jamstack-app.firebaseapp.com",
  databaseURL: "https://awards-box-jamstack-app.firebaseio.com",
  projectId: "awards-box-jamstack-app",
  storageBucket: "awards-box-jamstack-app.appspot.com",
  messagingSenderId: "920078951566",
  appId: "1:920078951566:web:786702d582fd49a0f355df",
  measurementId: "G-2Y0SS9V2F6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// firebase utils
const db = firebase.firestore()

// firebase collectionsa
const usersCollection = db.collection('users');

const movieFavoritesCollection = db.collection('movieFavorites');

const watchListsCollection = db.collection('watchLists');

const trendingCollection = db.collection('trending');

const popularCollection = db.collection('popular');

const personalCollection = db.collection('personalization');

const fantasyCollection = db.collection('fantasy');

const tmdbMovieCollection = db.collection('tmdbmovie');

const functions = firebase.functions();

const firedb = firebase.database();

const auth = firebase.auth();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();

const FacebookProvider = new firebase.auth.FacebookAuthProvider();

const TwitterProvider = new firebase.auth.TwitterAuthProvider();

const AppleProvider = new firebase.auth.OAuthProvider('apple.com');

export {
    firebase,
    db,
    usersCollection,
    movieFavoritesCollection,
    watchListsCollection,
    trendingCollection,
    popularCollection,
    personalCollection,
    fantasyCollection,
    firedb,
    auth,
    GoogleProvider,
    FacebookProvider,
    TwitterProvider,
    AppleProvider,
    functions,
    tmdbMovieCollection,
}