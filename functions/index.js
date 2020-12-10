import * as functions from ('firebase-function' );

const functions = require('firebase-functions');


exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
 response.send("Hello from Firebase!");
 });
