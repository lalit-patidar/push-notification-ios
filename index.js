const express = require("express");
const cors = require("cors")
const helmet = require("helmet");
const sendNotification = require("./new-send");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(helmet());


app.post("/push-notification", async (req, res) => {
    try {
          const {payload, token} = req.body;
         const notificationResponse = await sendNotification(token, payload)
            res.send({notificationResponse});
    } catch(err) {
       res.send(err.message)
    }
})

app.listen(port, () => console.log("server is running at 3000"))


