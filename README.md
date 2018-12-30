Hi my name is Yi.
I am presenting my project that does text message, 
between web and phone, 
using Twilio API.

I use React for frontend,
and Node for backend.

here is my project running locally.


/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

signup Twilio account:
get new a phone number,
accountSid
authToken
https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account


setup Node Express environment:
https://www.twilio.com/docs/usage/tutorials/how-to-set-up-your-node-js-and-express-development-environment


Twilio API:
I use Nodejs version
https://www.twilio.com/docs/usage/api
I use 'SMS'
https://www.twilio.com/docs/sms
I use 'send'
click 'How to Send SMS and MMS Messages'
click the Nodejs version
https://www.twilio.com/docs/sms/tutorials/how-to-send-sms-messages-node-js
I use 'receive'
click 'How to Receive and Reply to SMS and MMS Messages'
click the Nodejs version
https://www.twilio.com/docs/sms/tutorials/how-to-receive-and-reply-node-js
to receive I need 'Ngrok'
ngrok expose your local machine to the internet
https://www.npmjs.com/package/ngrok


login to twilio console:
https://www.twilio.com/console
click 'phone number' icon
find 'A MESSAGE COMES IN'
this is Ngrok online address with you route path, look like 'https://c9b9a38e.ngrok.io/receive-text'


to mirror android phone use 'AirDroid'
https://play.google.com/store/apps/details?id=com.sand.airdroid


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


get start:
create-react-app trysms
    install everything here, reflect to package.json

npm install:
npm i nodemon ngrok -g
in /trysms, npm i express cors twilio body-parser dotenv --save


look at App.js:


inside trysms create server folder
    inside server folder create index.js

look at index.js:


challenges:
To complete Twilio apprenticeship application is a challenges.
Coming up with this project and make a video out of it is not easy.
I have to research about Twilio, its API, apply to a project idea, and a way to record.
For example,
    The documentation example only cover one use case.
    To do more I have to try out rest of the documentation, and google it.
    for a text messaging app, I figured out how to display incoming text message, it does not need to include 'twiml.MessagingResponse' from the example, which is form auto reply back, instead I need the 'request' object.
