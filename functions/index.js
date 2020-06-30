const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');
admin.initializeApp();

exports.addProblem = functions.https.onRequest((request, response) => {
  var ref_problem=admin.firestore().collection("problem").doc();
  return ref_problem.set(JSON.parse(request.body)).then(()=>{
    return response.send({
      "status":"done"
    });
  }).catch(err=>{
    return response.send({
      "status":"error",
      "body":err
    })
  })
});
