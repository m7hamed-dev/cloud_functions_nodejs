const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().functions);

exports.cardBankTrigger = functions.firestore.document(
    'cardBankCollection/{currentAmount}'
).onUpdate(
    async(snapshot, context) => {
        var _payload = { notification: { title: 'my test cloud', body: 'body' }, data: { click_action: 'onClick' }, };

        const _res = await admin.messaging().sendToTopic('upBalanceTopic', _payload, );
    }
);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });