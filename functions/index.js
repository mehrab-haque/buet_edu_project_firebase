const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Firestore = require('@google-cloud/firestore');
admin.initializeApp();

exports.addProblem = functions.https.onRequest((request, response) => {
  var data=JSON.parse(request.body);
  data["timestamp"]=Date.now();
  var ref_problem=admin.firestore().collection("problem").doc();
  return ref_problem.set(data).then(()=>{
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
