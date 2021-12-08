// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //configuration firebase
  firebaseConfig: {
  apiKey: "AIzaSyC2bvuNIkRJLOcDsfgDkZ_cKPsD4jJFYcg",
  authDomain: "todoapp-9cf6e.firebaseapp.com",
  projectId: "todoapp-9cf6e",
  storageBucket: "todoapp-9cf6e.appspot.com",
  messagingSenderId: "549165946728",
  appId: "1:549165946728:web:45df2066ec940b043e68dd",
  measurementId: "${config.measurementId}"
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
