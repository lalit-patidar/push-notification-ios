var deviceToken =
  "8c7d00066bdc8fc2501489d985cb466e5fc08b07e3ee65edff5c220026b4f0ad";
var apn = require("apn");
var join = require("path").join,
  pfx = join(__dirname, "/VoipCertificate.p12");



async function sendNotification(token, payload) {
  try {
    var options = {
        pfx: pfx,
        passphrase: "Uhb@12345",
        production: false,
      };
    var apnProvider = new apn.Provider(options);
    let notification = new apn.Notification();
    notification.alert = "¡hello i am lalit";
    console.log(payload, "pay");
    notification.payload = {
      payload,
    };
    const res = await apnProvider.send(notification, [token]);
    return res;
  } catch (err) {
    throw err;
  }
}

module.exports = sendNotification;

// apnProvider.send(notification, [deviceToken]).then( (response) => {
//     console.log(response, "res");
//   process.exit();
// });

// : {
//     aps: { "content-available": 1 },
//     handle: "1111111",
//     callerName: "Richard Feynman",
//     uuid: "38e8bb5e-501d-405f-88b6-88753efb2930",
//   },
