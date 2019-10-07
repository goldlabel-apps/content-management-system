const functions = require('firebase-functions');

exports.cms = functions.https.onRequest((request, response) => {
 response.send("Hello from cms");
});
