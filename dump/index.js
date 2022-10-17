const http2 = require("http2");
const fs = require("fs");

const host = "https://api.sandbox.push.apple.com";  //https://api.sandbox.push.apple.com
// /3/device/00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0
const path = '/3/device/8c7d00066bdc8fc2501489d985cb466e5fc08b07e3ee65edff5c220026b4f0ad';  ///3/device/{you device token}

console.log(__dirname, '/newfile.key.pem');

const client = http2.connect(host, {
    key: fs.readFileSync(__dirname + '/newfile.key.pem'),
    cert: fs.readFileSync(__dirname + '/newfile.crt.pem')
});

client.on("error", (err) => console.log(err));

let body = {
    "aps": {
      "alert": "hello",
      "content-available": 1
    }
  }

  let headers = {
    ':method': 'POST',
    'apns-id': '38e8bb5e-501d-405f-88b6-88753efb2930',
    'apns-topic': 'com.example.VoipProject', 
    ':scheme': 'https',
    ':path': path,
  }

  const request = client.request(headers);

  request.on('response', (headers, flags) => {
     for(const name in headers) {
        console.log(`32 - ${name}: ${headers[name]}`);
     }
  })

  request.setEncoding('utf8');

let data = ''
request.on('data', (chunk) => { data += chunk; });
request.write(JSON.stringify(body))
request.on('end', () => {
console.log(`\n${data}`);
client.close();
});
request.end();
  