import *  as functions from 'firebase';

exports.addMessage = functions.https.onRequest(async (req, res) => {
    response.send("hello from firebase");
})
    
