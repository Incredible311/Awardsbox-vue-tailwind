const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { Storage } = require('@google-cloud/storage');
const spawn = require('child-process-promise').spawn;
const sgMail = require("@sendgrid/mail");
const algoliasearch = require("algoliasearch");
const axios = require('axios');
const cors = require('cors')({ origin: true });
const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const unzip = require('unzipper');
var path = require('path');
var Buffer = require('buffer').Buffer;

const os = require('os');

var request = require('request');

require("firebase-functions/lib/logger/compat");

var serviceAccount = require('./awards-box-platform-firebase-adminsdk-temox-d709d17af3.json');

// credential: admin.credential.cert(serviceAccount)
admin.initializeApp({});

const db = admin.firestore();
// const db = admin.firestore();

//Set up Algolia
//The app id and API key are coming from cloud functions environment as we set up before
const algoliaClient = algoliasearch("XYQ3JMPNFD", "04ba98e27f55dab99fc628a8b2e7b795");
const collectionIndex = algoliaClient.initIndex('searchDB');

const FavoriteMoviesIndex = algoliaClient.initIndex("FavoriteMovies");

const TrendingMoviesIndex = algoliaClient.initIndex('trending');

const FantasyMoviesIndex = algoliaClient.initIndex('fantasy');

const PersonalizationIndex = algoliaClient.initIndex('personalization');

const PopularIndex = algoliaClient.initIndex('popular');

const PublicWatchlistIndex = algoliaClient.initIndex('Public_Watchlist');

const PrivateWatchlistIndex = algoliaClient.initIndex('Private_Watchlist');

const tmdbIndex = algoliaClient.initIndex('tmdbmovie');
 
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

exports.algoliaTestWithFirestoreSync = functions.region('europe-west1').firestore.document(`movies/{doc}`).onWrite(async (change, _context) => {
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    console.log("new data ===>", newData);
    return collectionIndex.saveObject(Object.assign({}, {objectID}, data));
})

exports.addFavoriteMoviesToAlgolia = functions.region('europe-west1').firestore.document(`movieFavorites/{uid}/favorites/{count}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
      return FavoriteMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(!newData.exists && oldData.exists) {
        return FavoriteMoviesIndex.deleteObject(objectID);
    } else {
        return FavoriteMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addTrendingMoviesToAlgolia = functions.region('europe-west1').firestore.document(`trending/{doc}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return TrendingMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return TrendingMoviesIndex.deleteObject(objectID);
    } else {
        return TrendingMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addFantasyMoviesToAlgolia = functions.region('europe-west1').firestore.document(`fantasy/{doc}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return FantasyMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return FantasyMoviesIndex.deleteObject(objectID);
    } else {
        return FantasyMoviesIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addPersonalizationMoivesToAlgolia = functions.region('europe-west1').firestore.document(`personalization/{doc}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return PersonalizationIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return PersonalizationIndex.deleteObject(objectID);
    } else {
        return PersonalizationIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addPopularMoviesToAlgolia = functions.region('europe-west1').firestore.document(`popular/{doc}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return PopularIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return PopularIndex.deleteObject(objectID);
    } else {
        return PopularIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addPublicWatchlistToAlgolia = functions.region('europe-west1').firestore.document(`watchLists/public/{doc}/{count}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return PublicWatchlistIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return PublicWatchlistIndex.deleteObject(objectID);
    } else {
        return PublicWatchlistIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.addPrivateWatchlistToAlgolia = functions.region('europe-west1').firestore.document(`watchLists/private/{doc}/{count}`).onWrite(async (change, _context) => {
    const oldData = change.before;
    const newData = change.after;
    const data = newData.data();
    const objectID = newData.id;

    if(!oldData.exists && newData.exists)
    {
        return PrivateWatchlistIndex.saveObject(Object.assign({}, {objectID}, data));
    } else if(oldData.exists && !newData.exists)
    {
        return PrivateWatchlistIndex.deleteObject(objectID);
    } else {
        return PrivateWatchlistIndex.saveObject(Object.assign({}, {objectID}, data));
    }
})

exports.storetmdbMovieToAlgolia = functions.region('europe-west1').firestore.document(`tmdbmovie/tmdbMovies/{doc}/{count}`).onWrite(async (change, _context) => {
  // const oldData = change.before;
  const newData = change.after;
  const data = newData.data();
  const objectID = newData.id;
  return tmdbIndex.saveObject(Object.assign({}, {objectID}, data));
})

const runtimeOpts = {
    timeoutSeconds: 540,
    memory: '2GB'
  }

exports.welcomeEmail = functions.runWith(runtimeOpts).region('europe-west1').auth.user().onCreate( async (user) => {

    // // const link = await admin.auth().generateEmailVerificationLink(user.email, {
    // //     url: 'http://localhost:3000/signin',
    // //   });

    // // console.log("Email Verification Link ===>", link);

    // const msg = {
    //     to: user.email,
    //     from: 'info@awardsbox.com',
    //     templateId: TEMPLATE_ID,
    //     dynamic_template_data: {
    //         AppName: 'Firebase Nuxt SSR',
    //         displayName: "Alina",
    //         // emailVerificationLink: link,
    //         // http://localhost:3000/userProfile?mode=action&oobCode=code
    //     },
    // };

    // return sgMail.send(msg);

    var text = " <div><h4>Information</h4><ul><li>Name - Alexandr</li><li>Email - shura.rysmendiyev@mail.ru</li><li>Phone - 555-5555</li></ul><h4>Message</h4><p>Nice to meet you</p></div>";
    const msg = {
        to: user.email,
        from: 'verify@awardsbox.com',
        subject: "Confirm your email address",
        text: text,
        html: text
    };
    return sgMail.send(msg);
});

exports.scheduledFunctionCheckMovie = functions.region('europe-west1').pubsub.schedule('every 6 minutes').onRun(async (context) => {

    const storage = new Storage();
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    const file_name = 'movie_ids_' + date + '.json';

    await storage.bucket('awards-box-platform-movie').file('Total_List/movie.json')
            .exists().then(async (exists) => {
                if(exists[0])
                {

                    console.log("Total_List/movie.json is exists !!!!");

                    await storage.bucket('awards-box-platform-movie').file('Total_List/movie.json')
                            .download().then(async (data) => {

                                const apiEndPointToTMDB = "https://api.themoviedb.org/3/movie/changes?";


                                const api_key = 'b5f70ea6e9364c21a98506dd6b815a42';
            
                                const page = 1;
            
                                const requestUrlToTMDB = apiEndPointToTMDB + "api_key=" + api_key + "&page=" + page;

                                const changedIDs = [];

                                // const test = [
                                //     {
                                //         "id": 2,
                                //         "adult": false
                                //     },
                                //     {
                                //         "id": 3924,
                                //         "adult": false
                                //     },
                                //     {
                                //         "id": 25449,
                                //         "adult": null
                                //     }
                                // ];

                                let saveChangedMovie = [];                   
                                let contents = data[0];
                                let movieInfo = contents.toString();
                                let arrayMoviesOfTotal = movieInfo.split('\n');

                                console.log("Array Movies Of Total ====>", arrayMoviesOfTotal);

                                // console.log("Total_List Movie Data =====>", arrayMovies);

                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                        .exists().then(async (exists) => {
                                            if(exists[0])
                                            {
                                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                                .download().then(async (data) => {
                                                    const contents = data[0];
                                                    const movieInfo = contents.toString();
                                                    const arrayMovies = movieInfo.split('\n');
                                                      axios.get(requestUrlToTMDB).then((res) => {
                                                          // setTimeout(() => {
                                                              for(let i = 0; i < res.data.results.length; i++)
                                                              {
                                                                  changedIDs.push(res.data.results[i]);
                                                              }
                                                          // }, 300000)
                                                          console.log("Response ====>", changedIDs);
                                                          return ;
                                                      }).catch((err) => {
                                                          console.log("Error is occurred ========>", err);
                                                      });
                                                  setInterval(() => {
                                                      console.log("res.data.results movie arrays ====>", arrayMovies);
                                                      console.log("Changed Ids Length =====>", changedIDs.length);
                                                    //   setTimeout(() => {
                                                        for(var k = 0; k < changedIDs.length; k++)
                                                        {
                                                          const change = changedIDs[k];
                                                          console.log("change Id ====>", change);
                                                          console.log("Total List of Movie Data length ====>", arrayMovies.length);
                                                          for(var i = 0; i < arrayMovies.length; i++)
                                                          {
                                                              // const json = JSON.parse(arrayMovies[i]);
                                                              const singleJsonArray = arrayMovies[i];
                                                            //   setTimeout(() => {
                                                                  const json = JSON.parse(singleJsonArray);
                                                                  console.log("json Id ======>", json["id"]);
                                                                  if(change["id"] === json["id"])
                                                                  {
                                                                    console.log("JSON stringify =====>", JSON.stringify(json));
                                                                    saveChangedMovie.push(JSON.stringify(json));
                                                                  //   saveChangedMovie = [...new Set(saveChangedMovie)];
                                                                    saveChangedMovie = saveChangedMovie.filter((item, index) => {
                                                                        return saveChangedMovie.indexOf(item) === index;
                                                                    });
                                                                    console.log("single saved movie =====>", saveChangedMovie);
                                                                  }
                                                            //   }, 10000);
                                                          }
                                                        }
                                                    //   }, 300000);
                                                    if(saveChangedMovie.length !== 0)
                                                    {
                                                      for(let i = 0; i < saveChangedMovie.length; i ++)
                                                      {
                                                          arrayMoviesOfTotal.push(saveChangedMovie[i] + '\r');
                                                      }
                                                      arrayMoviesOfTotal = arrayMoviesOfTotal.filter((item, index) => {
                                                          return arrayMoviesOfTotal.indexOf(item) === index;
                                                      })
                                                      console.log("Total Array of Movies ====>", arrayMoviesOfTotal);
      
                                                      // const newBuffer = Buffer.from(arrayMoviesOfTotal);
                                                      // console.log("New Buffer =====>", newBuffer);
                                                      const bucket = storage.bucket('awards-box-platform-movie');
                                                      const MovieDest = bucket.file('Total_List/' + 'movie.json');
                                                      const downloadData = bucket.file(file_name);                                               
      
                                                      let total_buffer;
      
                                                      total_buffer = Buffer.from(arrayMoviesOfTotal[0]);
      
                                                      for(let i = 1; i < arrayMoviesOfTotal.length; i++)
                                                      {
                                                          const singleBuffer = Buffer.from(arrayMoviesOfTotal[i]);
                                                          const singelBuffer_length = singleBuffer.length;
                                                          const toal_buffer_length = total_buffer.length + singelBuffer_length;
                                                          total_buffer = Buffer.concat([total_buffer, singleBuffer], toal_buffer_length);
                                                      }
      
                                                      console.log("Total Buffer ======>", total_buffer);
      
                                                      MovieDest.save(total_buffer).then(() => {
                                                          console.log("Successfully Saved to Total_List/movie.json again !!!!");
                                                          downloadData.delete().then(() => {
                                                              console.log("Successfully Deleted ^^^^^^^^");
                                                          
                                                              return ;
                                                          }).catch((err) => {
                                                              if(err) {
                                                           
                                                                 console.log("Error is occurred for delete ^^^^^^^");
                                                              }
                                                          })
                                                          return ;
                                                        }).catch((err) => {
                                                              if(err) {
                                                                  console.log("Error is occurred !!!!");
                                                              }
                                                        })
                                                      }
                                                  }, 500000);
                                                  return ;
                                                })
                                            } else {
                                                console.log(`${file_name}`, "is not exists on awards box platform bucket of Firebase Cloud Storage");
                                            }
                                            return;
                                        })
                               
                                
                            return ;
                    })
                } else {
                   console.log("Total_List/Movie.json is not exists !!!!");
                   console.log("File name ====>", file_name);
                   await storage.bucket('awards-box-platform-movie').file(file_name)
                   .exists().then(async (exists) => {
                       if(exists[0])
                       {
                           console.log(file_name, "is exists!!!");
                        await storage.bucket('awards-box-platform-movie').file(file_name)
                        .download().then((data) => {
                            const contents = data[0];
                            
                            // const movie_json_array = [];

                            // arrayMovies.forEach((item, index) => {
                            //     movie_json_array.push(JSON.parse(item));
                            // });

                            const bucket = storage.bucket('awards-box-platform-movie');
                            const MovieDest = bucket.file('Total_List/' + 'movie.json');
                            const downloadData = bucket.file(file_name);
                           
                            MovieDest.save(contents).then(() => {
                                console.log("Successfully Saved to Total_List/movie.json !!!!");
                                downloadData.delete().then(() => {
                                    console.log("Successfully Deleted ^^^^^^^^");
                                    return ;
                                }).catch((err) => {
                                    if(err) {
                                        console.log("Error is occurred for delete ^^^^^^^");
                                    }
                                })
                                return ;
                            }).catch((err) => {
                                if(err) {
                                    console.log("Error is occurred !!!!");
                                }
                            })
                            return ;
                        })
                       } else {
                           console.log(file_name, "is not exists !!!");
                       }
                       return;
                   });
                }
                return ;
            })
})

exports.scheduledFunctionCheckTV = functions.region('europe-west1').pubsub.schedule('every 6 minutes').onRun(async (context) => {

    const storage = new Storage();
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    const file_name = 'tv_series_ids_' + date + '.json';

    await storage.bucket('awards-box-platform-movie').file('Total_List/tv.json')
            .exists().then(async (exists) => {
                if(exists[0])
                {

                    console.log("Total_List/tv.json is exists !!!!");

                    await storage.bucket('awards-box-platform-movie').file('Total_List/tv.json')
                            .download().then(async (data) => {

                                const apiEndPointToTMDB = "https://api.themoviedb.org/3/tv/changes?";


                                const api_key = 'b5f70ea6e9364c21a98506dd6b815a42';
            
                                const page = 1;
            
                                const requestUrlToTMDB = apiEndPointToTMDB + "api_key=" + api_key + "&page=" + page;

                                const changedIDs = [];

                                let saveChangedTV = [];                   
                                let contents = data[0];
                                let tvInfo = contents.toString();
                                let arrayTVOfTotal = tvInfo.split('\n');

                                console.log("Array Movies Of Total ====>", arrayTVOfTotal);

                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                        .exists().then(async (exists) => {
                                            if(exists[0])
                                            {
                                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                                .download().then(async (data) => {
                                                    const contents = data[0];
                                                    const tvInfo = contents.toString();
                                                    const arrayTVs = tvInfo.split('\n');
                                                      axios.get(requestUrlToTMDB).then((res) => {
                                                          // setTimeout(() => {
                                                              for(let i = 0; i < res.data.results.length; i++)
                                                              {
                                                                  changedIDs.push(res.data.results[i]);
                                                              }
                                                          // }, 300000)
                                                          console.log("Response ====>", changedIDs);
                                                          return ;
                                                      }).catch((err) => {
                                                          console.log("Error is occurred ========>", err);
                                                      });
                                                  setInterval(() => {
                                                      console.log("res.data.results tv arrays ====>", arrayTVs);
                                                      console.log("Changed Ids Length =====>", changedIDs.length);
                                                        for(var k = 0; k < changedIDs.length; k++)
                                                        {
                                                          const change = changedIDs[k];
                                                          console.log("change Id ====>", change);
                                                          console.log("Total List of TV Data length ====>", arrayTVs.length);
                                                          for(var i = 0; i < arrayTVs.length; i++)
                                                          {
                                                              const singleJsonArray = arrayTVs[i];
                                                                  const json = JSON.parse(singleJsonArray);
                                                                  console.log("json Id ======>", json["id"]);
                                                                  if(change["id"] === json["id"])
                                                                  {
                                                                    console.log("JSON stringify =====>", JSON.stringify(json));
                                                                    saveChangedTV.push(JSON.stringify(json));
                                                                  saveChangedTV = saveChangedTV.filter((item, index) => {
                                                                        return saveChangedTV.indexOf(item) === index;
                                                                    });
                                                                    console.log("single saved movie =====>", saveChangedTV);
                                                                  }
                                                          }
                                                        }
                                                    if(saveChangedTV.length !== 0)
                                                    {
                                                      for(let i = 0; i < saveChangedTV.length; i ++)
                                                      {
                                                        arrayTVOfTotal.push(saveChangedTV[i] + '\r');
                                                      }
                                                      arrayTVOfTotal = arrayTVOfTotal.filter((item, index) => {
                                                          return arrayTVOfTotal.indexOf(item) === index;
                                                      })
                                                      console.log("Total Array of Movies ====>", arrayTVOfTotal);
      
                                                      const bucket = storage.bucket('awards-box-platform-movie');
                                                      const MovieDest = bucket.file('Total_List/' + 'tv.json');
                                                      const downloadData = bucket.file(file_name);                                               
      
                                                      let total_buffer;
      
                                                      total_buffer = Buffer.from(arrayTVOfTotal[0]);
      
                                                      for(let i = 1; i < arrayTVOfTotal.length; i++)
                                                      {
                                                          const singleBuffer = Buffer.from(arrayTVOfTotal[i]);
                                                          const singelBuffer_length = singleBuffer.length;
                                                          const toal_buffer_length = total_buffer.length + singelBuffer_length;
                                                          total_buffer = Buffer.concat([total_buffer, singleBuffer], toal_buffer_length);
                                                      }
      
                                                      console.log("Total Buffer ======>", total_buffer);
      
                                                      MovieDest.save(total_buffer).then(() => {
                                                          console.log("Successfully Saved to Total_List/tv.json again !!!!");
                                                          downloadData.delete().then(() => {
                                                              console.log("Successfully Deleted ^^^^^^^^");                                                          
                                                              return ;
                                                          }).catch((err) => {
                                                              if(err) {                                                                                                                             
                                                                console.log("Error is occurred for delete ^^^^^^^");
                                                              }
                                                          })
                                                          return ;
                                                        }).catch((err) => {
                                                              if(err) {
                                                                console.log("Error is occurred !!!!");
                                                              }
                                                        })
                                                      }
                                                  }, 500000);
                                                  return ;
                                                })
                                            } else {
                                                console.log(`${file_name}`, "is not exists on awards box platform bucket of Firebase Cloud Storage");
                                            }
                                            return;
                                        })
                               
                                
                            return ;
                    })
                } else {
                   console.log("Total_List/tv.json is not exists !!!!");
                   console.log("File name ====>", file_name);
                   await storage.bucket('awards-box-platform-movie').file(file_name)
                   .exists().then(async (exists) => {
                       if(exists[0])
                       {
                           console.log(file_name, "is exists!!!");
                        await storage.bucket('awards-box-platform-movie').file(file_name)
                        .download().then((data) => {
                            const contents = data[0];
                            const bucket = storage.bucket('awards-box-platform-movie');
                            const MovieDest = bucket.file('Total_List/' + 'tv.json');
                            const downloadData = bucket.file(file_name);
                           
                            MovieDest.save(contents).then(() => {
                                console.log("Successfully Saved to Total_List/movie.json !!!!");
                                downloadData.delete().then(() => {
                                    console.log("Successfully Deleted ^^^^^^^^");
                                    return ;
                                }).catch((err) => {
                                    if(err) {
                                        console.log("Error is occurred for delete ^^^^^^^");
                                    }
                                })
                                return ;
                            }).catch((err) => {
                                if(err) {
                                    console.log("Error is occurred !!!!");
                                }
                            })
                            return ;
                        })
                       } else {
                           console.log(file_name, "is not exists !!!");
                       }
                       return;
                   });
                }
                return ;
            })
})

exports.scheduledFunctionCheckPerson = functions.region('europe-west1').pubsub.schedule('every 6 minutes').onRun(async (context) => {

    const storage = new Storage();
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    const file_name = 'person_ids_' + date + '.json';

    await storage.bucket('awards-box-platform-movie').file('Total_List/person.json')
            .exists().then(async (exists) => {
                if(exists[0])
                {

                    console.log("Total_List/person.json is exists !!!!");

                    await storage.bucket('awards-box-platform-movie').file('Total_List/person.json')
                            .download().then(async (data) => {

                                const apiEndPointToTMDB = "https://api.themoviedb.org/3/person/changes?";


                                const api_key = 'b5f70ea6e9364c21a98506dd6b815a42';
            
                                const page = 1;
            
                                const requestUrlToTMDB = apiEndPointToTMDB + "api_key=" + api_key + "&page=" + page;

                                const changedIDs = [];
                                let saveChangedPerson = [];                   
                                let contents = data[0];
                                let personInfo = contents.toString();
                                let arrayPersonOfTotal = personInfo.split('\n');

                                console.log("Array Movies Of Total ====>", arrayPersonOfTotal);

                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                        .exists().then(async (exists) => {
                                            if(exists[0])
                                            {
                                                await storage.bucket('awards-box-platform-movie').file(file_name)
                                                .download().then(async (data) => {
                                                    const contents = data[0];
                                                    const personInfo = contents.toString();
                                                    const arrayPersons = personInfo.split('\n');
                                                      axios.get(requestUrlToTMDB).then((res) => {
                                                          // setTimeout(() => {
                                                              for(let i = 0; i < res.data.results.length; i++)
                                                              {
                                                                  changedIDs.push(res.data.results[i]);
                                                              }
                                                          // }, 300000)
                                                          console.log("Response ====>", changedIDs);
                                                          return ;
                                                      }).catch((err) => {
                                                          console.log("Error is occurred ========>", err);
                                                      });
                                                  setInterval(() => {
                                                      console.log("res.data.results person arrays ====>", arrayPersons);
                                                      console.log("Changed Ids Length =====>", changedIDs.length);
                                                        for(var k = 0; k < changedIDs.length; k++)
                                                        {
                                                          const change = changedIDs[k];
                                                          console.log("change Id ====>", change);
                                                          console.log("Total List of Person Data length ====>", arrayPersons.length);
                                                          for(var i = 0; i < arrayPersons.length; i++)
                                                          {
                                                              const singleJsonArray = arrayPersons[i];
                                                                  const json = JSON.parse(singleJsonArray);
                                                                  console.log("json Id ======>", json["id"]);
                                                                  if(change["id"] === json["id"])
                                                                  {
                                                                    console.log("JSON stringify =====>", JSON.stringify(json));
                                                                    saveChangedPerson.push(JSON.stringify(json));
                                                                  //   saveChangedMovie = [...new Set(saveChangedMovie)];
                                                                  saveChangedPerson = saveChangedPerson.filter((item, index) => {
                                                                        return saveChangedPerson.indexOf(item) === index;
                                                                    });
                                                                    console.log("single saved person =====>", saveChangedPerson);
                                                                  }
                                                            //   }, 10000);
                                                          }
                                                        }
                                                    //   }, 300000);
                                                    if(saveChangedPerson.length !== 0)
                                                    {
                                                      for(let i = 0; i < saveChangedPerson.length; i ++)
                                                      {
                                                          arrayMoviesOfTotal.push(saveChangedPerson[i] + '\r');
                                                      }
                                                      arrayPersonOfTotal = arrayPersonOfTotal.filter((item, index) => {
                                                          return arrayPersonOfTotal.indexOf(item) === index;
                                                      })
                                                      console.log("Total Array of Movies ====>", arrayPersonOfTotal);
      
                                                      const bucket = storage.bucket('awards-box-platform-movie');
                                                      const MovieDest = bucket.file('Total_List/' + 'person.json');
                                                      const downloadData = bucket.file(file_name);                                               
      
                                                      let total_buffer;
      
                                                      total_buffer = Buffer.from(arrayPersonOfTotal[0]);
      
                                                      for(let i = 1; i < arrayPersonOfTotal.length; i++)
                                                      {
                                                          const singleBuffer = Buffer.from(arrayPersonOfTotal[i]);
                                                          const singelBuffer_length = singleBuffer.length;
                                                          const toal_buffer_length = total_buffer.length + singelBuffer_length;
                                                          total_buffer = Buffer.concat([total_buffer, singleBuffer], toal_buffer_length);
                                                      }
      
                                                      console.log("Total Buffer ======>", total_buffer);
      
                                                      MovieDest.save(total_buffer).then(() => {
                                                          console.log("Successfully Saved to Total_List/movie.json again !!!!");
                                                          downloadData.delete().then(() => {
                                                              console.log("Successfully Deleted ^^^^^^^^");
                                                          
                                                              return ;
                                                          }).catch((err) => {
                                                              if(err) {
                                                           
                                                                 console.log("Error is occurred for delete ^^^^^^^");
                                                              }
                                                          })
                                                          return ;
                                                        }).catch((err) => {
                                                              if(err) {
                                                                  console.log("Error is occurred !!!!");
                                                              }
                                                        })
                                                      }
                                                  }, 500000);
                                                  return ;
                                                })
                                            } else {
                                                console.log(`${file_name}`, "is not exists on awards box platform bucket of Firebase Cloud Storage");
                                            }
                                            return;
                                        })
                               
                                
                            return ;
                    })
                } else {
                   console.log("Total_List/person.json is not exists !!!!");
                   console.log("File name ====>", file_name);
                   await storage.bucket('awards-box-platform-movie').file(file_name)
                   .exists().then(async (exists) => {
                       if(exists[0])
                       {
                           console.log(file_name, "is exists!!!");
                        await storage.bucket('awards-box-platform-movie').file(file_name)
                        .download().then((data) => {
                            const contents = data[0];
                            
                            // const movie_json_array = [];

                            // arrayMovies.forEach((item, index) => {
                            //     movie_json_array.push(JSON.parse(item));
                            // });

                            const bucket = storage.bucket('awards-box-platform-movie');
                            const MovieDest = bucket.file('Total_List/' + 'person.json');
                            const downloadData = bucket.file(file_name);
                           
                            MovieDest.save(contents).then(() => {
                                console.log("Successfully Saved to Total_List/movie.json !!!!");
                                downloadData.delete().then(() => {
                                    console.log("Successfully Deleted ^^^^^^^^");
                                    return ;
                                }).catch((err) => {
                                    if(err) {
                                        console.log("Error is occurred for delete ^^^^^^^");
                                    }
                                })
                                return ;
                            }).catch((err) => {
                                if(err) {
                                    console.log("Error is occurred !!!!");
                                }
                            })
                            return ;
                        })
                       } else {
                           console.log(file_name, "is not exists !!!");
                       }
                       return;
                   });
                }
                return ;
            })
})


exports.scheduledFunctionMovie = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
       
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/movie_ids_' + date + '.json.gz';
 
    var destJson = "movie_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-movie');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success Movie !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.scheduledFunctionTVShows = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/tv_series_ids_' + date + '.json.gz';

    var destJson = "tv_series_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-tv');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success TV !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.scheduledFunctionPerson = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/person_ids_' + date + '.json.gz';

    var destJson = "person_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-person');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success Person !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.scheduledFunctionProductionCompany = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/production_company_ids_' + date + '.json.gz';
    
    var destJson = "production_company_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-company');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success Production !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.scheduledFunctionKeyword = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/keyword_ids_' + date + '.json.gz';
    
    var destJson = "keyword_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-keyword');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success Keyword !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.scheduledFunctionCollection = functions.region('europe-west1').pubsub.schedule('every 1440 minutes').onRun(async (context) => {
    var today = new Date();

    var month = today.getMonth() + 1;
    if(month < 10) {
        month = '0' + month;
    }

    var day = today.getDate();
    if(day < 10) {
        day = '0' + day;
    }

    var year = today.getFullYear();
    var date = month + '_' + day + '_' + year;

    var requestUrlForMovie = 'http://files.tmdb.org/p/exports/collection_ids_' + date + '.json.gz';
  
    var destJson = "collection_ids_" + date + ".json";

    var storage = new Storage();

    var bucket = storage.bucket('awards-box-platform-collection');
    var fileDest = bucket.file(destJson);

    http.get(requestUrlForMovie, (response) => {
        try {
            const file = fileDest.createWriteStream({contentType: 'auto'});
            const unzip = zlib.createGunzip();
            response.pipe(unzip).pipe(file).on('finish', () => {
                console.log("Success Collection !!!!!!!");
            });
        } catch (e) {
            console.log('ERROR == ', e)
        }
    });
});

exports.onChangeMovie = functions.runWith(runtimeOpts).region('europe-west1').storage.bucket('awards-box-platform-movie').object().onFinalize(async (object) => {
    console.log("Movie Buckete is Changed", object);
});
exports.onChangeTv = functions.region('europe-west1').storage.bucket('awards-box-platform-tv').object().onFinalize(async (object) => {
    console.log("TV bucket is Changed", object);
});
exports.onChangePerson = functions.region('europe-west1').storage.bucket('awards-box-platform-person').object().onFinalize(async (object) => {
    console.log("Person bucket is Changed", object);
});
exports.onChangeCompany = functions.region('europe-west1').storage.bucket('awards-box-platform-company').object().onFinalize(async (object) => {
    console.log("Company bucket is Changed", object);
});
exports.onChangeKeyword = functions.region('europe-west1').storage.bucket('awards-box-platform-keyword').object().onFinalize(async (object) => {
    console.log("Keyword Bucket is Changed", object);
});
exports.onChangeCollection = functions.region('europe-west1').storage.bucket('awards-box-platform-collection').object().onFinalize(async (object) => {
    console.log("Collection Bucket is Changed", object);
});