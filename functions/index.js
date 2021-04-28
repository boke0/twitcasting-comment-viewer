const functions = require("firebase-functions");
const axios = require('axios');
const express = require('express');
const ejs = require('ejs');
const CLIENT_ID = '1051333462760685568.d1ce143de686aa53619ef537472c16d5e2576fc2f37a6244fffe5b25e7a02614';
const CLIENT_SECRET = 'ae86df7c497c36078b13ec378498fa01314439238e72a55b0e833f467f0a1061';
const REDIRECT_URI = 'https://quizfall-d4f4c.web.app/';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

const app = express();
app.engine('ejs', ejs.__express);

app.get('*', (req, res) => {
  const { code } = req.query;
  const result = await axios.post(`https://apiv2.twitcasting.tv/oauth2/access_token`, {
    param: {
      code,
      grant_type: 'authorization_code',
      client_id:`${CLIENT_ID}`,
      client_secret:`${CLIENT_SECRET}`,
      redirect_uri: REDIRECT_URI
    }
  });
  response.status(200).render('template', {
    access_token: result.data.access_token
  });
})

exports.helloWorld = app;
