// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlDataBase: 'http://localhost:3015/api/',
  firebase: {
    apiKey: "AIzaSyDYbmvnkjQ6Rn-PtQ2R1A6-c2oEB_-o1tc",
    authDomain: "visaalapp.firebaseapp.com",
    databaseURL: "https://visaalapp.firebaseio.com",
    projectId: "visaalapp",
    storageBucket: "visaalapp.appspot.com",
    messagingSenderId: "722136752645",
    appId: "1:722136752645:web:4374ce75356589fce6f26c"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
