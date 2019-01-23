// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  isDebugMode: true,
  endpoint: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyAjfAjAm_lXHztdQYLITTMdLN25XbaThNE',
    authDomain: 'brontrixservices.firebaseapp.com',
    databaseURL: 'https://brontrixservices.firebaseio.com',
    projectId: 'brontrixservices',
    storageBucket: 'brontrixservices.appspot.com',
    messagingSenderId: '650156504219',
  },
}
