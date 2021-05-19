import Vue from 'vue'
import Vuex from 'vuex'
import bcrypt from 'bcryptjs'

Vue.use(Vuex);

const fb = require('~/plugins/firebaseConfig.js');

const salt = bcrypt.genSaltSync(10);

const tmdb_api = "5fb4a680c0529a8ffdb852e820c5ed68";

// const cookieparser = process.server ? require('cookieparser') : undefined

const createStore = () => {
  return new Vuex.Store({
    state: {
        user : {
          uid: "",
          password : "",
          email: "",
          emailVerified: false,
          userName: "",
          profilePicture: "",
          shoppingList: [],
          favorites: [],
          lightMode: false,
          notificationMode: false,
          advertisementMode: false
        },
        movieInfo: {
          genre: [],
          image: "",
          objectID: "",
          rating: null,
          title: "",
          year: null
        },
        movieInfoForWatchlist: {
          objectID: "",
          title: "",
          genre: [],
          image: "",
          rating: null,
          year: null
        },
        numberOfFavoriteMovies: null,
        numberOfWatchlistsPublic: null,
        numberOfWatchlistsPrivate: null,
        allOfFavoriteMovies: [],
        allOfWatchLists: [],
        userPrivacy: null,
        AllOfTrendingMovies: [],
        AllOfPopularMovies: [],
        AllOfPersonalMovies: [],
        AllOfFantasyMovies: [],
        watchlistInfo: null,
        numberOfPublicWatchlists: null,
        firstPublicWatchlists: [],
        numberOfFirstPublicWatchlists: null,
        secondPublicWatchlists: [],
        numberOfSecondPublicWatchlists: null,

        numberOfPrivateWatchlists: null,
        firstPrivateWatchlists: [],
        numberOfFirstPrivateWatchlists: null,
        secondPrivateWatchlists: [],
        numberOfSecondPrivateWatchlists: null,

        userNameForViewWatchlist: "",
        userPrivacyForViewWatchlist: null,

        publicUIDFVW: "",
        privateUIDFVW: "",

        publicUserProfile: null,
        privateUserProfile: null,

        publicWatchlistInfos : [],
        privateWatchlistInfos : [],

        allPublicUsers : [],
        publicUserID: "",

        publicWatchlistInfosWithUID: [],

        AllStatusOfEmailVerified: [], 

        movieName : "",

        movieYear : null,

        movieId: null,

        movieDetail : null,

        externalIds : null,

        auth : {
          user : null
        },

        authUser : {
          user : null
        },
        darkMode: false
    },

    getters: {
        getUser(state){
          return state.user;
        },
        getUserEmail(state){
          return state.user.email;
        },
        getUserEmailVerified(state){
          return state.user.emailVerified;
        },
        getMovieInfo(state){
          return state.movieInfo;
        },
        getAllOfFavoriteMovies(state) {
          return state.allOfFavoriteMovies;
        },
        getAllOfWatchLists(state) {
          return state.allOfWatchLists;
        },
        getDarkMode(state) {
          return state.darkMode;
        }
    }, 

    mutations: {
      setUserPrivacy(state, payload)
      {
        state.userPrivacy = payload;
        // localStorage.setItem("User_Privacy", state.userPrivacy);
        console.log("Account Privacy HH===>", state.userPrivacy);
      },
      setUser(state, payload){
          state.user = payload;
          console.log("State User ===>", state.user);
      },
      setUserName(state, payload){
        state.user.userName = payload;
        console.log("User Name ===>", state.user.userName);
      },
      setProfilePicture(state, payload) {
        state.user.profilePicture = payload;
        console.log("Profile Picture ===>", state.user.profilePicture);
      },
      setShoppingList(state, payload) {
        state.user.shoppingList = payload;
        console.log("Shopping List ===>", state.user.shoppingList);
      },
      updateUID(state, payload) {
        state.user.uid = payload;
        console.log("UID ===>", state.user.uid);
      },
      updateEmail(state, payload) {
        state.user.email = payload;
        console.log("Email update ===>", state.user.email);
      },
      updatePassword(state, payload) {
        state.user.password = payload;
        console.log("Password update ===>", state.user.password);
      },
      updateEmailVerifiedStatus(state, payload) {
        state.user.emailVerified = payload;
        console.log("Email Verified ===>", state.user.emailVerified);
      },
      setFavorites(state, payload) {
        state.user.favorites = payload;
        console.log("Favorites ===>", state.user.favorites);
      },
      insertLightMode(state,payload) {
        state.user.lightMode = payload;
        console.log("Light Mode ===>", state.user.lightMode);
      },
      insertNotificationMode(state, payload) {
        state.user.notificationMode = payload;
        console.log("NotificationMode ===>", state.user.notificationMode);
      },
      insertAdvertismentMode(state, payload) {
        state.user.advertisementMode = payload;
        console.log("advertisementMode ===>", state.user.advertisementMode);
      },
      insertMovieInfo(state, payload) {
        state.movieInfo.genre = payload.genre;
        state.movieInfo.image = payload.image;
        state.movieInfo.objectID = payload.objectID;
        state.movieInfo.title = payload.title;
        state.movieInfo.rating = payload.rating;
        state.movieInfo.year = payload.year;
      },
      insertNumberOfFavoriteMovies(state, payload){
        state.numberOfFavoriteMovies = payload;
      },
      saveAllofFavoriteMovies(state, payload) {
        state.allOfFavoriteMovies = payload;
        console.log("state All of Favorites movies ===>", state.allOfFavoriteMovies);
      },
      saveAllofWatchLists(state, payload) {
        state.allOfWatchLists = payload;
        console.log("state All of Favorites movies ===>", state.allOfWatchLists);
      },
      insertMovieInfoToWatchlist(state, payload){
        state.movieInfoForWatchlist = payload;
        console.log("movie info for watchlist ===>", state.movieInfoForWatchlist);
      },
      saveWatchlistInfo(state, payload){
        state.watchlistInfo = payload;
        console.log("Watchlist Info ===>", state.watchlistInfo);
      },
      insertNumberOfWatchlistsPublic(state, payload)
      {
        state.numberOfWatchlistsPublic = payload;
      },
      insertNumberOfWatchlistsPrivate(state, payload)
      {
        state.numberOfWatchlistsPrivate = payload;
        console.log(state.numberOfWatchlistsPrivate);
      },
      insertAllOfTrendingMovies(state, payload)
      {
        state.AllOfTrendingMovies = payload;
        // console.log("All of Trending Movies ===>", state.AllOfTrendingMovies);
      },
      insertAllOfPopularMovies(state, payload)
      {
        state.AllOfPopularMovies = payload;
      },
      insertAllOfPersonalMovies(state, payload)
      {
        state.AllOfPersonalMovies = payload;
      },
      insertAllOfFantasyMovies(state, payload)
      {
        state.AllOfFantasyMovies = payload;
      },
      insertNumberOfPublicWatchlist(state, payload)
      {
        state.numberOfPublicWatchlists = payload;
        console.log("number of public watchlists AAA ===>", state.numberOfPublicWatchlists);
      },
      insertNumberOfPrivateWatchlist(state, payload)
      {
        state.numberOfPrivateWatchlists = payload;
        console.log("number of private watchlists AAA ===>", state.numberOfPublicWatchlists);
      },
      insertFirstPublicWatchlists(state,payload)
      {
        state.firstPublicWatchlists = payload;
        console.log("First Public Watchlists ===>", state.firstPublicWatchlists);
      },
      insertFirstPrivateWatchlists(state,payload)
      {
        state.firstPrivateWatchlists = payload;
        console.log("First Private Watchlists ===>", state.firstPrivateWatchlists);
      },
      insertSecondPublicWatchlists(state, payload)
      {
        state.secondPublicWatchlists = payload;
        console.log("Second Public Watchlists ===>", state.secondPublicWatchlists);
      },
      insertSecondPrivateWatchlists(state, payload)
      {
        state.secondPrivateWatchlists = payload;
        console.log("Second Private Watchlists ===>", state.secondPrivateWatchlists);
      },
      insertNumberOfFirstPublicWatchlists(state, payload)
      {
        state.numberOfFirstPublicWatchlists = payload;
        console.log("number of first public watchlists ===>", state.numberOfFirstPublicWatchlists);
      },
      insertNumberOfFirstPrivateWatchlists(state, payload)
      {
        state.numberOfFirstPrivateWatchlists = payload;
        console.log("number of first private watchlists ===>", state.numberOfFirstPrivateWatchlists);
      },
      insertNumberOfSecondPublicWatchlists(state, payload)
      {
        state.numberOfSecondPublicWatchlists = payload;
        console.log("number of second public watchlists ===>", state.numberOfSecondPublicWatchlists);
      },
      insertNumberOfSecondPrivateWatchlists(state, payload)
      {
        state.numberOfSecondPrivateWatchlists = payload;
        console.log("number of second private watchlists ===>", state.numberOfSecondPrivateWatchlists);
      },
      setUserNameForViewWatchlist(state, payload)
      {
        state.userNameForViewWatchlist = payload;
        console.log("User Name For Viewing Watchlist ===>", state.userNameForViewWatchlist);
      },
      privateUserForViewWatchlist(state, payload)
      {
        state.userPrivacyForViewWatchlist = payload;
        console.log("user Privacy for View Watchlist ===>", state.userPrivacyForViewWatchlist);
      },
      publicUserForViewWatchlist(state, payload)
      {
        state.userPrivacyForViewWatchlist = payload;
        console.log("user Privacy for View Watchlist ===>", state.userPrivacyForViewWatchlist);
      },
      publicUserIDFVW(state, payload)
      {
        state.publicUIDFVW = payload;
        console.log("public user ID for FVW ===>", state.publicUIDFVW);
      },
      privateUserIDFVW(state, payload)
      {
        state.privateUIDFVW = payload;
        console.log("private user ID for FVW ===>", state.privateUIDFVW);
      },
      setPublicUserProfile(state, payload)
      {
        state.publicUserProfile = payload;
        console.log("public User Profile Info ===>", state.publicUserProfile);
      },
      setPrivateUserProfile(state, payload)
      {
        state.privateUserProfile = payload;
        console.log("private User Profile Info ===>", state.privateUserProfile);
      },
      setPublicWatchlistInfos(state, payload)
      {
        state.publicWatchlistInfos = payload;
        console.log("Public Watchlist Infos ===>", state.publicWatchlistInfos);
      },
      setPrivateWatchlistInfos(state, payload)
      {
        state.privateWatchlistInfos = payload;
        console.log("Private Watchlist Infos ===>", state.privateWachlistInfos);
      },
      setAllPublicUsers(state, payload)
      {
        state.allPublicUsers = payload;
        console.log("Public Users All ===>", state.allPublicUsers);
      },
      setPublicUserID(state, payload)
      {
        state.publicUserID = payload;
        console.log("Public User ID ===>", state.publicUserID);
      },
      setPublicWatchlistInfosWithUID(state, payload)
      {
        state.publicWatchlistInfosWithUID.push(payload);
        console.log("Public Watchlist Infos with UID ===>", state.publicWatchlistInfosWithUID);
      },
      makePublicWatchlistInfosWithUID(state, payload)
      {
        state.publicWatchlistInfosWithUID = [];
        console.log("Public Watchlist infos array is empty ===>", state.publicWatchlistInfosWithUID);
      },
      setAllEmailVerifiedStatus(state, payload)
      {
        state.AllStatusOfEmailVerified.push(payload);
        console.log("store All Email Status ===>", state.AllStatusOfEmailVerified);
      },
      setMovieName(state, payload) {
        state.movieName = payload;
        console.log("state movie Name ===>", state.movieName);
      },
      setMovieYear(state, payload) {
        state.movieYear = payload;
        console.log("state movie Year ===>", state.movieYear);
      },
      setMovieId(state, payload) {
        state.movieId = payload;
        console.log("movie Id ===>", state.movieId);
      },
      setMovieDetail(state, payload) {
        state.movieDetail = payload;
        console.log("movie detail ===>", state.movieDetail);
      },
      setExternalIds(state, payload){
        state.externalIds = payload;
      },
      setNewUser(state, payload) {
        state.auth.user = payload;
      },
      setDarkMode(state, payload) {
        state.darkMode = payload;
      }
      // setAuth(state, payload)
      // {
      //   state.authUser.user = payload;
      //   console.log("Logged In User =>", state.authUser.user);
      // }
    },

    actions: {
      // nuxtServerInit({commit}, {req}) {
      //   let auth = null;
      //   if(req.headers.cookie) {
      //     const parsed = cookieparser.pase(req.headers.cookie);

      //     try {
      //       auth = JSON.parse(parsed.auth);
      //     } catch(err) {
      //       // No valid Cookie found
      //     }
      //   }
      //   commit('setAuth', auth);
      // },
        async saveNote({commit, state}) {
            const {uid, email, password, adminUser} = state.user;
            console.log("Savenote Action is called");
            const Password = bcrypt.hashSync(password, salt);
            const Email = email;
            const UID = uid;
            const admin = adminUser;
            console.log("Email, Password, UID, adminUser ===>", Email, Password, UID, adminUser);
            // await fb.usersCollection.add({
            //   UID,
            //   Email, 
            //   Password  
            // })  
            await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
               UID: UID,
               Email: Email,
               Password: Password , 
               adminUser: admin
            });
        },
        async emailVerified({commit, state})
        {
          const UID = localStorage.getItem("UID");
          commit("updateEmailVerifiedStatus", true);
          await fb.usersCollection.doc(`${UID}`).set({
            emailVerified : true
          });
        },
        async notEmailVerified({commit, state})
        {
          const UID = localStorage.getItem("UID");
          commit("updateEmailVerifiedStatus", false);
          await fb.usersCollection.doc(`${UID}`).set({
            emailVerified : false
          });
        },
        async getAllVerifiedStatus({commit, state})
        {
          
          await fb.usersCollection.get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc){
              console.log("userID ===>", doc.id);
              const AllStatus = {
                userID : doc.id,
                status: doc.data().emailVerified
              }
              console.log("EmailVerified Status ===>", AllStatus);
              commit("setAllEmailVerifiedStatus", AllStatus);
            });
          })
          // allOfWatchLists.get().then(function(querySnapshot){
          //     querySnapshot.forEach(function(doc){
          //     console.log("Hi");
          //     doc.ref.delete();
          //   })
          // })
        },
        async saveNotePublic({commit, state}) {
            const userInfo = state.user;
            const userEmail = localStorage.getItem("email");
            const userPassword = localStorage.getItem("password");
            const hashedPassword = bcrypt.hashSync(userPassword, salt);
            const UID = localStorage.getItem("UID");
            const user = {
               UID : UID,
               Email: userEmail,
               Password: hashedPassword,
               UserName: userInfo.userName,
               AccountPrivacy: "public"
            }
            commit("updateUID", user.UID);
            commit("setUserName", user.UserName);
            commit("updateEmail", user.Email);
            commit("updatePassword", userPassword);
            // const UID = state.user.uid;
            console.log("UID --->", UID);
            await fb.usersCollection.doc(`credential/public_credential/${UID}`).set({
              ...user
            });
        },
        async saveNotePrivate({commit, state}) {
          const userInfo = state.user;
          const userEmail = localStorage.getItem("email");
          const userPassword = localStorage.getItem("password");
          const hashedPassword = bcrypt.hashSync(userPassword, salt);
          const UID = localStorage.getItem("UID");
          const user = {
              UID : UID,
              Email: userEmail,
              Password: hashedPassword,
              UserName: userInfo.userName,
              AccountPrivacy: "private"
          }
          commit("updateUID", user.UID);
          commit("setUserName", user.UserName);
          commit("updateEmail", user.Email);
          commit("updatePassword", userPassword);
          // const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
             ...user
          });
        },
        async saveProfilePicturePublic({commit, state}) {
          const userInfo = state.user;
          const profilePicture = state.user.profilePicture;
          const user = {
            UID : userInfo.uid,
            Email: userInfo.email,
            Password: userInfo.password,
            UserName: userInfo.userName,
            Profile_Picture: profilePicture,
            AccountPrivacy: "public"
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/public_credential/${UID}`).set({
            ...user
          });
        },
        async saveProfilePicturePrivate({commit, state}){
          const userInfo = state.user;
          const profilePicture = state.user.profilePicture;
          const user = {
            UID : userInfo.uid,
            Email: userInfo.email,
            Password: userInfo.password,
            UserName: userInfo.userName,
            Profile_Picture: profilePicture,
            AccountPrivacy: "private"
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
          });
        },
        async saveShoppingListPublic({commit, state}){
          const shoppingList = state.user.shoppingList;
          console.log("Shopping List ===>", shoppingList);

          await fb.usersCollection.doc('credential/public_credential/shopping_list').set({
            Shopping_List : shoppingList
          });
        },
        async userEmailUpdatePrivate({commit, state}) {
           const userInfo = state.user;
           const user = {
            UID : userInfo.uid,
            Email: userInfo.email,
            Password: userInfo.password,
            UserName: userInfo.userName,
            Profile_Picture: userInfo.profilePicture,
            AccountPrivacy: "private"
           }
           const UID = state.user.uid;
           console.log("UID --->", UID);
           await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
           });
        },
        async updatePasswordPrivate({commit, state}){
           const userInfo = state.user;
           const user = {
            UID : userInfo.uid,
            Email: userInfo.email,
            Password: userInfo.password,
            UserName: userInfo.userName,
            Profile_Picture: userInfo.profilePicture,
            AccountPrivacy: "private"
           }
           const UID = state.user.uid;
           console.log("UID --->", UID);
           await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
           });
        },
        async saveFavoritesPrivate({commit, state}) {
          const userInfo = state.user;
          const user = {
           UID : userInfo.uid,
           Email: userInfo.email,
           Password: userInfo.password,
           UserName: userInfo.userName,
           Profile_Picture: userInfo.profilePicture,
           Favorites: userInfo.favorites
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc('credential/private_credential/favorites').set({
            User_Favorites: user.Favorites
          });
        },
        async insertLightModePrivate({commit, state}) {
          const userInfo = state.user;
          const user = {
           UID : userInfo.uid,
           Email: userInfo.email,
           Password: userInfo.password,
           UserName: userInfo.userName,
           Profile_Picture: userInfo.profilePicture,
           Favorites: userInfo.favorites,
           lightMode: userInfo.lightMode,
           AccountPrivacy: "private"
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
          });
        },
        async insertNotificationPrivate({commit, state}) {
          const userInfo = state.user;
          const user = {
           UID : userInfo.uid,
           Email: userInfo.email,
           Password: userInfo.password,
           UserName: userInfo.userName,
           Profile_Picture: userInfo.profilePicture,
           Favorites: userInfo.favorites,
           lightMode: userInfo.lightMode,
           notificationMode: userInfo.notificationMode,
           AccountPrivacy: "private"
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
          });
        },
        async insertAdvertismentPrivate({commit, state}) {
          const userInfo = state.user;
          const user = {
           UID : userInfo.uid,
           Email: userInfo.email,
           Password: userInfo.password,
           UserName: userInfo.userName,
           Profile_Picture: userInfo.profilePicture,
           Favorites: userInfo.favorites,
           lightMode: userInfo.lightMode,
           notificationMode: userInfo.notificationMode,
           advertisementMode: userInfo.advertisementMode,
           AccountPrivacy: "private"
          }
          const UID = state.user.uid;
          console.log("UID --->", UID);
          await fb.usersCollection.doc(`credential/private_credential/${UID}`).set({
            ...user
          });
        },
        async saveMovieInfoToFirestore({commit, state}) {
          const userID = localStorage.getItem("UID");
          const movieInfo = state.movieInfo;
          console.log("UID ===>", userID);
          console.log("movie info ===>", movieInfo);

          const count = state.numberOfFavoriteMovies;
                 
          await fb.movieFavoritesCollection.doc(`${userID}/favorites/${count}`).set({
            objectID: movieInfo.objectID,
            image: movieInfo.image,
            title: movieInfo.title,
            genre: movieInfo.genre,
            rating: movieInfo.rating,
            year: movieInfo.year
          });
        },
        async saveFirstPublicWatchlistToFirestore({commit, state})
        {
          const userID = localStorage.getItem("UID");
          const watchlistItem = state.movieInfoForWatchlist;
          const watchlistInfo = state.watchlistInfo;

          console.log("Watchlist info ===>", watchlistInfo);
          if(watchlistInfo)
          {
            await fb.watchListsCollection.doc(`public/${userID}/firstWatchlist`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            })
          }
          const count = state.numberOfFirstPublicWatchlists;

          console.log("number of first public watchlists =>", count);

          await fb.watchListsCollection.doc(`public/${userID}/firstWatchlist/watchlists/${count}`).set({
            objectID: watchlistItem.objectID,
            image: watchlistItem.image,
            title: watchlistItem.title,
            genre: watchlistItem.genre,
            rating: watchlistItem.rating,
            year: watchlistItem.year
          });
        },
        async saveFirstPrivateWatchlistToFirestore({commit, state})
        {
          const userID = localStorage.getItem("UID");
          const watchlistItem = state.movieInfoForWatchlist;
          const watchlistInfo = state.watchlistInfo;
          if(watchlistInfo)
          {
            await fb.watchListsCollection.doc(`private/${userID}/firstWatchlist`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            })
          }
          const count = state.numberOfFirstPrivateWatchlists;

          console.log("number of first private watchlists =>", count);

          await fb.watchListsCollection.doc(`private/${userID}/firstWatchlist/watchlists/${count}`).set({
            objectID: watchlistItem.objectID,
            image: watchlistItem.image,
            title: watchlistItem.title,
            genre: watchlistItem.genre,
            rating: watchlistItem.rating,
            year: watchlistItem.year
          });
        },
        async saveSecondPublicWatchlistToFirestore({commit, state})
        {
          const userID = localStorage.getItem("UID");
          const watchlistItem = state.movieInfoForWatchlist;
          const watchlistInfo = state.watchlistInfo;

          console.log("Watchlist info second ===>", watchlistInfo);
          if(watchlistInfo)
          {
            await fb.watchListsCollection.doc(`public/${userID}/secondWatchlist`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            });
          }

          const count = state.numberOfSecondPublicWatchlists;

          await fb.watchListsCollection.doc(`public/${userID}/secondWatchlist/watchlists/${count}`).set({
            objectID: watchlistItem.objectID,
            image: watchlistItem.image,
            title: watchlistItem.title,
            genre: watchlistItem.genre,
            rating: watchlistItem.rating,
            year: watchlistItem.year
          });
        },
        async saveSecondPrivateWatchlistToFirestore({commit, state})
        {
          const userID = localStorage.getItem("UID");
          const watchlistItem = state.movieInfoForWatchlist;
          const watchlistInfo = state.watchlistInfo;
          if(watchlistInfo)
          {
            await fb.watchListsCollection.doc(`private/${userID}/secondWatchlist`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            });
          }

          const count = state.numberOfSecondPrivateWatchlists;

          await fb.watchListsCollection.doc(`private/${userID}/secondWatchlist/watchlists/${count}`).set({
            objectID: watchlistItem.objectID,
            image: watchlistItem.image,
            title: watchlistItem.title,
            genre: watchlistItem.genre,
            rating: watchlistItem.rating,
            year: watchlistItem.year
          });
        },
        async deleteFirstPublicWatchlistFromFirestore({commit, state})
        {
          const objectID = state.movieInfoForWatchlist.objectID;
          const title = state.movieInfoForWatchlist.title;
      
          const userID = localStorage.getItem('UID');

          const allOfWatchLists = await fb.watchListsCollection.doc("public").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").where('objectID', '==', objectID, '&&', 'title', '==', title);
          allOfWatchLists.get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc){
              console.log("Hi");
              doc.ref.delete();
            })
          })
        },
        async deleteFirstPrivateWatchlistFromFirestore({commit, state})
        {
          const objectID = state.movieInfoForWatchlist.objectID;
          const title = state.movieInfoForWatchlist.title;
      
          const userID = localStorage.getItem('UID');

          const allOfWatchLists = await fb.watchListsCollection.doc("private").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").where('objectID', '==', objectID, '&&', 'title', '==', title);
          allOfWatchLists.get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc){
              console.log("Hi");
              doc.ref.delete();
            })
          })
        },
        async deleteSecondPublicWatchlistFromFirestore({commit, state})
        {
          const objectID = state.movieInfoForWatchlist.objectID;
          const title = state.movieInfoForWatchlist.title;

          const userID = localStorage.getItem("UID");

          const allOfWatchLists = await fb.watchListsCollection.doc("public").collection(`${userID}`).doc("secondWatchlist").collection("watchlists").where('objectID', '==', objectID, '&&', 'title', '==', title);
          allOfWatchLists.get().then(function(querySnapshot){
              querySnapshot.forEach(function(doc){
              console.log("Hi");
              doc.ref.delete();
            })
          })
        },
        async saveWatchlistToFirestore({commit, state}) {
          const userID = localStorage.getItem("UID");
          const watchlistItem = state.movieInfoForWatchlist;
          const watchlistInfo = state.watchlistInfo;
          console.log("UID ===>", userID);
          console.log("watch list item ===>", watchlistItem);
          console.log("Watchlist Info in Action ===>", watchlistInfo);

          const userPrivacy = state.userPrivacy;
          // const userPrivacy = localStorage.getItem("User_Privacy");
          console.log("user Privacy in search =>", userPrivacy);

          if(userPrivacy)
          {
            await fb.watchListsCollection.doc(`private/${userID}/watchlistInfo`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            });
            const count = state.numberOfWatchlistsPrivate;
            await fb.watchListsCollection.doc(`private/${userID}/${count}`).set({
              objectID: watchlistItem.objectID,
              image: watchlistItem.image,
              title: watchlistItem.title,
              genre: watchlistItem.genre,
              rating: watchlistItem.rating,
              year: watchlistItem.year
            });
          } else {
            await fb.watchListsCollection.doc(`public/${userID}/watchlistInfo`).set({
              watchlistName: watchlistInfo.name,
              watchlistDescription: watchlistInfo.description
            })
            const count = state.numberOfWatchlistsPublic;
            await fb.watchListsCollection.doc(`public/${userID}/${count}`).set({
              objectID: watchlistItem.objectID,
              image: watchlistItem.image,
              title: watchlistItem.title,
              genre: watchlistItem.genre,
              rating: watchlistItem.rating,
              year: watchlistItem.year
            });
          }
        },
        async deleteMovieInfoFromFirestore({commit, state}) {
          const objectID = state.movieInfo.objectID;
          const title = state.movieInfo.title;
      
          const userID = localStorage.getItem('UID');

          const numberOfFavoriteMovies = state.numberOfFavoriteMovies;

          console.log("I'm Ivan", numberOfFavoriteMovies);

          // Find document with specific condition in a collection and delete 
          const allOfFavoriteMovies = await fb.movieFavoritesCollection.doc(`${userID}`).collection('favorites').where('objectID', '==', objectID, '&&', 'title', '==', title);
          allOfFavoriteMovies.get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
              console.log("Hi");
              doc.ref.delete();
            })
          })
        },
        async deleteWatchlistFromFirestore({commit, state}) {
          const objectID = state.movieInfoForWatchlist.objectID;
          const title = state.movieInfoForWatchlist.title;
      
          const userID = localStorage.getItem('UID');

          // const numberOfWatchlists = state.numberOfWatchlists;

          // console.log("I'm Ivan", numberOfWatchlists);

          const userPrivacy = state.userPrivacy;
          // const userPrivacy = localStorage.getItem("User_Privacy")
          console.log("User Privacy in search delete ===>", userPrivacy);

          if(userPrivacy)
          {
            // Find document with specific condition in a collection and delete 
            const allOfWatchLists = await fb.watchListsCollection.doc("private").collection(`${userID}`).where('objectID', '==', objectID, '&&', 'title', '==', title);
            allOfWatchLists.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                console.log("Hi");
                doc.ref.delete();
              })
            })
          } else {
            const allOfWatchLists = await fb.watchListsCollection.doc("public").collection(`${userID}`).where('objectID', '==', objectID, '&&', 'title', '==', title);
            allOfWatchLists.get().then(function(querySnapshot){
                querySnapshot.forEach(function(doc){
                console.log("Hi");
                doc.ref.delete();
              })
            })
          }
        },
        async getAllOfFavoriteMovies({commit, state}) {
          const allOfFavorites_Alina = [];
          // const userID = state.user.uid;
          const userID = localStorage.getItem("UID");
          const allOfFavoriteMovies = await fb.movieFavoritesCollection.doc(`${userID}`).collection('favorites').get();
          allOfFavoriteMovies.docs.map(doc => {
            console.log("favorite movie ===>", doc.data());
            allOfFavorites_Alina.push(doc.data());
          });
          console.log("All of Favorite movies Alina ===>", allOfFavorites_Alina);
          commit("saveAllofFavoriteMovies", allOfFavorites_Alina);
        },
        async getAllOfWatchLists({commit, state}) {
          const allOfWatchLists_Alina = [];
          const userID = localStorage.getItem("UID");

          console.log("User ID in getAllOfWatchlists =>", userID);
          const userPrivacy = state.userPrivacy;
          console.log("User Privacy ===>", userPrivacy);
          if(userPrivacy)
          {
            const allOfWatchLists = await fb.watchListsCollection.doc('private').collection(`${userID}`).get();
            allOfWatchLists.docs.map(doc => {
              // console.log("watchlist ===>", doc.data());
              allOfWatchLists_Alina.push(doc.data());
            });
            console.log("All of Favorite movies Alina Privacy===>", allOfWatchLists_Alina);
            commit("saveAllofWatchLists", allOfWatchLists_Alina);
          } else {
            const allOfWatchLists = await fb.watchListsCollection.doc('public').collection(`${userID}`).get();
            allOfWatchLists.docs.map(doc => {
              // console.log("watchlist ===>", doc.data());
              allOfWatchLists_Alina.push(doc.data());
            });
            console.log("All of Favorite movies Alina Public===>", allOfWatchLists_Alina);
            commit("saveAllofWatchLists", allOfWatchLists_Alina);
          }
        },
        async getNumberOfPublicWatchlists({commit, state})
        {
          console.log('kkk');
          const publicWatchlists = [];
          const userID = localStorage.getItem("UID");
          const allOfPublicWatchlists = await fb.watchListsCollection.doc("public").collection(`${userID}`).get();
          allOfPublicWatchlists.docs.map(doc => {
            publicWatchlists.push(doc.data());
          });
          const numberOfPublicWatchlists = publicWatchlists.length;
          console.log("number of public watchlists ===>", numberOfPublicWatchlists);
          commit("insertNumberOfPublicWatchlist", numberOfPublicWatchlists);
        },
        async getNumberOfPrivateWatchlists({commit, state})
        {
          const privateWatchlists = [];
          const userID = localStorage.getItem("UID");
          const allOfPublicWatchlists = await fb.watchListsCollection.doc("private").collection(`${userID}`).get();
          allOfPublicWatchlists.docs.map(doc => {
            privateWatchlists.push(doc.data());
          });
          const numberOfPrivateWatchlists = privateWatchlists.length;
          console.log("number of private watchlists ===>", numberOfPrivateWatchlists);
          commit("insertNumberOfPrivateWatchlist", numberOfPrivateWatchlists);
        },
        async getPublicWatchlists({commit, state}){
          const publicWatchlists = [];
          const userID = localStorage.getItem("UID");
          const numberOfPublicWatchlists = state.numberOfPublicWatchlists;
          if(numberOfPublicWatchlists)
          {
            if(numberOfPublicWatchlists == 1)
            {
              const watchlists = await fb.watchListsCollection.doc("public").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").get();
              watchlists.docs.map(doc => {
                publicWatchlists.push(doc.data());
              });
              commit("insertFirstPublicWatchlists", publicWatchlists);
            } else if(numberOfPublicWatchlists == 2)
            {
              const watchlistsFirst = await fb.watchListsCollection.doc("public").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").get();
              const publicFirstWatchlists = [];
              watchlistsFirst.docs.map(doc => {
                publicFirstWatchlists.push(doc.data());
              });
              commit("insertFirstPublicWatchlists", publicFirstWatchlists);
              const watchlistsSecond = await fb.watchListsCollection.doc("public").collection(`${userID}`).doc("secondWatchlist").collection("watchlists").get();
              const publicSecondWatchlists = [];
              watchlistsSecond.docs.map(doc => {
                publicSecondWatchlists.push(doc.data());
              });
              commit("insertSecondPublicWatchlists", publicSecondWatchlists);
            }
          }
        },
        async getPrivateWatchlists({commit, state}){
          const privateWatchlists = [];
          const userID = localStorage.getItem("UID");
          const numberOfPrivateWatchlists = state.numberOfPrivateWatchlists;
          if(numberOfPrivateWatchlists)
          {
            if(numberOfPrivateWatchlists == 1)
            {
              const watchlists = await fb.watchListsCollection.doc("private").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").get();
              watchlists.docs.map(doc => {
                privateWatchlists.push(doc.data());
              });
              commit("insertFirstPrivateWatchlists", privateWatchlists);
            } else if(numberOfPrivateWatchlists == 2)
            {
              const watchlistsFirst = await fb.watchListsCollection.doc("private").collection(`${userID}`).doc("firstWatchlist").collection("watchlists").get();
              const privateFirstWatchlists = [];
              watchlistsFirst.docs.map(doc => {
                privateFirstWatchlists.push(doc.data());
              });
              commit("insertFirstPrivateWatchlists", privateFirstWatchlists);
              const watchlistsSecond = await fb.watchListsCollection.doc("private").collection(`${userID}`).doc("secondWatchlist").collection("watchlists").get();
              const privateSecondWatchlists = [];
              watchlistsSecond.docs.map(doc => {
                privateSecondWatchlists.push(doc.data());
              });
              commit("insertSecondPrivateWatchlists", privateSecondWatchlists);
            }
          }
        },
        async getAllOfTrendingMovies({commit, state})
        {
          const AllOfTrending_Alina = [];
          const AllOfTrendingMovies = await fb.trendingCollection.get();
          AllOfTrendingMovies.docs.map(doc => {
            const data = {
              id : doc.id,
              info : doc.data()
            }
             AllOfTrending_Alina.push(data);
          });
          commit("insertAllOfTrendingMovies", AllOfTrending_Alina);
        },
        async getAllOfPopularMovies({commit, state}) 
        {
          const AllOfPopular_Alina = [];
          const AllOfPopularMovies = await fb.popularCollection.get();
          AllOfPopularMovies.docs.map(doc => {
            const data = {
              id: doc.id,
              info: doc.data()
            }
            AllOfPopular_Alina.push(data);
          });
          commit("insertAllOfPopularMovies", AllOfPopular_Alina);
        },
        async getAllOfPersonalMovies({commit, state})
        {
          const AllOfPersonal_Alina = [];
          const AllOfPersonalMovies = await fb.personalCollection.get();
          AllOfPersonalMovies.docs.map(doc => {
            const data = {
              id: doc.id,
              info: doc.data()
            }
            AllOfPersonal_Alina.push(data);
          });
          commit("insertAllOfPersonalMovies", AllOfPersonal_Alina);
        },
        async getAllOfFantasyMovies({commit, state})
        {
          const AllOfFantasy_Alina = [];
          const AllOfFantasyMovies = await fb.fantasyCollection.get();
          AllOfFantasyMovies.docs.map(doc => {
            const data = {
              id: doc.id,
              info: doc.data()
            }
            AllOfFantasy_Alina.push(data);
          });
          commit("insertAllOfFantasyMovies", AllOfFantasy_Alina);
        },
        async findUserForViewWatchlist({commit, state})
        {
          const userName = state.userNameForViewWatchlist;

          console.log("User Name in Find User For View Watchlist ===>", userName);

          const userForViewWatchlistInPublic = await fb.usersCollection.doc('credential').collection('public_credential').where('UserName', '==', userName).get();
          if(userForViewWatchlistInPublic.empty)
          {
            console.log("This user is not Public User");
          } else {
            userForViewWatchlistInPublic.forEach(doc => {
              console.log(doc.id, "=>", doc.data());
              commit("publicUserIDFVW", doc.id);
            })
            console.log("This user is Public User ===>", userForViewWatchlistInPublic);
            commit("publicUserForViewWatchlist", "public");
          }
          const userForViewWatchlistInPrivate = await fb.usersCollection.doc('credential').collection('private_credential').where('UserName', '==', userName).get();
          if(userForViewWatchlistInPrivate.empty)
          {
            console.log("This user is not Private User");
          } else {
            userForViewWatchlistInPrivate.forEach(doc => {
              console.log(doc.id, "=>", doc.data());
              commit("privateUserIDFVW", doc.id);
            })
            console.log("This user is Private User ===>", userForViewWatchlistInPrivate);
            commit("privateUserForViewWatchlist", "private");
          }
        },
        async getPublicUserInfo({commit, state})
        {
          console.log("I'm called");
          const UID = localStorage.getItem("UID");
          const userInfo = await fb.usersCollection.doc("credential").collection("public_credential").where('UID', '==', UID).get();
          userInfo.forEach(doc => {
            console.log("public user info ===>", doc.data());
            const publicUserProfile = doc.data();
            commit("setPublicUserProfile", publicUserProfile);
          });
        },
        async getAllPublicUsers({commit, state})
        {
          const allPublicUsers = [];
          const allUsers = await fb.usersCollection.doc("credential").collection("public_credential").get();
          allUsers.forEach(doc => {
            console.log("public user ===>", doc.data());
            allPublicUsers.push(doc.data());
          });
          commit("setAllPublicUsers", allPublicUsers);
        },
        async getPrivateUserInfo({commit, state})
        {
          console.log("I'm called");
          const UID = localStorage.getItem("UID");
          const userInfo = await fb.usersCollection.doc("credential").collection("private_credential").where('UID', '==', UID).get();
          userInfo.forEach(doc => {
            console.log("private user info ===>", doc.data());
            const privateUserProfile = doc.data();
            commit("setPrivateUserProfile", privateUserProfile);
          });
        },
        async getPublicWatchlistInfos({commit, state})
        {
          const UID = localStorage.getItem("UID");
          const publicWatchlistInfos = [];
          const publicWatchlists = await fb.watchListsCollection.doc('public').collection(`${UID}`).get();
          publicWatchlists.forEach(doc => {
            console.log("Watchlist info", doc.data());
            publicWatchlistInfos.push(doc.data());
          });
          commit('setPublicWatchlistInfos', publicWatchlistInfos);
        },
        async getPublicWatchlistWithUID({commit, state})
        {
          const UID = state.publicUserID;
          const publicWatchlistInfos = [];
          const publicWatchlists = await fb.watchListsCollection.doc('public').collection(`${UID}`).get();
          publicWatchlists.forEach(doc => {
            console.log("public watchlist Item ===>", doc.data());
            if(doc.data().watchlistName != "" && doc.data().watchlistDescription != "")
            {
              console.log("Do you know me ?");
              publicWatchlistInfos.push(doc.data());
            }
          });
          const data = {
            userID : UID,
            WIFO: publicWatchlistInfos
          };
          commit("setPublicWatchlistInfosWithUID", data);
        },
        async getPrivateWatchlistInfos({commit, state})
        {
          const UID = localStorage.getItem("UID");
          const privateWachlistInfos = [];
          const privateWatchlists = await fb.watchListsCollection.doc('private').collection(`${UID}`).get();
          privateWatchlists.forEach(doc => {
            console.log("Watchlist info private", doc.data());
            privateWachlistInfos.push(doc.data());
          });
          commit("setPrivateWatchlistInfos", privateWachlistInfos);
        },
        signInWithGoogle({commit}) {
          return new Promise(async (resolve, reject) => {
            // await fb.auth.signInWithRedirect(fb.GoogleProvider)
            await fb.auth.signInWithPopup(fb.GoogleProvider).then(function(result){
              var token = result.credential.accessToken;
              var user = result.user;
              var info = {
                user: user,
                token: token
              }
              resolve(info);
            })
            .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              var info = {
                errorCode: errorCode,
                errorMessage: errorMessage,
                email: email,
                credential: credential
              }
              resolve(info);
            })
            resolve();
          })
        },
        signInWithFacebook({commit}) {
          return new Promise((resolve, reject) => {
            fb.auth.signInWithRedirect(fb.FacebookProvider)
            resolve();
          })
        },
        signInWithTwitter({commit}) {
          return new Promise((resolve, reject) => {
            fb.auth.signInWithRedirect(fb.TwitterProvider)
            resolve();
          })
        },
        signInWithApple({commit}) {
          return new Promise((resolve, reject) => {
            fb.auth.signInWithRedirect(fb.AppleProvider)
            resolve();
          })
        },
        async searchMovieDetail({commit, state}) {
          const movie_name = state.movieName;
          const movie_year = state.movieYear;
          const params = {
            api_key : tmdb_api,
            query : movie_name,
            language : "en-US",
            page : 1,
            include_adult : false,
            primary_release_year : movie_year
          }
          let res = await this.$axios.get("/search/movie", { params });
          console.log("Response ===>", res.data.results);
          const resultsFromSearch = res.data.results;
          const length = resultsFromSearch.length;
          for(let i = 0; i < length; i++)
          {
            if(resultsFromSearch[i].original_title == movie_name)
            {
              const id = resultsFromSearch[i].id;
              commit("setMovieId", id);
            }
          }
        },
        async getExternalIds({commit, state}) {
          const id = state.movieId;
          const params = {
            api_key : tmdb_api
          };
          let res = await this.$axios.get(`/movie/${id}/external_ids`, {params});
          console.log("External Ids ===>", res);
          commit("setExternalIds", res.data);
        },
        async getMovieDetail({commit, state}) {
          const id = state.movieId;
          if(id) {
            const params = {
              api_key : tmdb_api,
              language : "en-US",
            }
            let res = await this.$axios.get(`/movie/${id}`, { params });
            console.log("movie Details ===>", res.data);
            commit("setMovieDetail", res.data);
          } else {
            this.$toast.global.error_movie();
          }
        },
        async tmdbMovieCollection({commit, state}) {
          const userID = localStorage.getItem('UID');
          const movieDetail = state.movieDetail;
          const externalIds = state.externalIds;
          var countOfMovies = 0;
          
          const ids = {
            facebook_id : externalIds.facebook_id,
            instagram_id : externalIds.instagram_id,
            twitter_id : externalIds.twitter_id
          }

          await fb.tmdbMovieCollection.doc("tmdbMovies").collection(`${userID}`).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log("Data ===>", doc.data());
              countOfMovies += 1;
            });
          });

          var countN = countOfMovies + 1;

          console.log("Number of Place =>", countN);

          await fb.tmdbMovieCollection.doc("tmdbMovies").collection(`${userID}`).doc(`${countN}`).set({
            ...movieDetail,
            ...ids
          });

          this.$toast.global.success_movie_store();

        }
    }
   
  })
}

export default createStore