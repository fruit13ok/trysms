// use dotenv to hide environment variable
require('dotenv').config({ path: '../.env' });
const express = require('express'); 
// Cross-origin resource sharing, allow requested from another domain
const cors = require('cors');
// twilio API
const twilio = require('twilio');
const bodyParser = require('body-parser');

//twilio requirements -- Texting API 
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN; 
const client = new twilio(accountSid, authToken);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

let texts = []

// root route, response to landing page, 
// send back array of objects contain phone number and message.
app.get('/', (req, res) => {
    // res.send('root route is running')
    res.json(texts)
})

// send-text route, use twilio code to send text to phone, 
// when finish store text to array
app.get('/send-text', (req, res) => {
    // res.send('Twilio server is running')
    //_GET Variables
    const { recipient, textmessage } = req.query;

    //Send Text
    client.messages
    .create({
        body: textmessage,
        to: recipient,
        from: '+14157700544'
    })
    .then((message) => {
        // console.log(message.body)
        texts.push({senderNum: 14157700544, message: message.body})
        res.json({msg: 'text success'});
    })
    .done();
})
// receive-text route, use ngrok and twilio to get the incoming text message,
// when receive store text to array
// in this route I only want to request not the response,
// so I did not use twiml.MessagingResponse,
// it is for auto reply back a message
app.post('/receive-text', (req, res) => {
    console.log(req.body);
    let msgFrom = req.body.From;
    let msgBody = req.body.Body;
    texts.push({senderNum: msgFrom, message: msgBody})
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));