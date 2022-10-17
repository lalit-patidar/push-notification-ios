const apn = require("apn");


(async function sendNotification() {
    const options = {
        production: true,
        cert: "./newfile.crt.pem",
        key: "./newfile.key.pem"
    }
    
   try {
    const service = new apn.Provider(options)
    
    const note = new apn.Notification()
    note.badge = 3;
    note.topic = "com.example.VoipProject"
    note.alert = "Hello!"
    
   const res = await service.send(note, '8c7d00066bdc8fc2501489d985cb466e5fc08b07e3ee65edff5c220026b4f0ad')
   console.log(res.failed[0].response, "res topic")
   } catch(err) {
     console.log(err, 'this error in noti')
   }
})()

// var note = new apn.Notification();
// note.badge = 3;
// note.alert = "hello world!";
// note.sound = 'default';
// note.topic ='<com.example.VoipProject>';
// apnsProvider.send(note, '8c7d00066bdc8fc2501489d985cb466e5fc08b07e3ee65edff5c220026b4f0ad').then( (response) => {
//     console.log("response ..", response);
// });