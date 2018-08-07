var Twitter = require('twitter');

require('dotenv').config();

var client = new Twitter({consumer_key: process.env.TWITTER_CONSUMER_KEY, consumer_secret: process.env.TWITTER_CONSUMER_SECRET, access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY, access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET});

var params = {
    screen_name: 'kimschles'
};

client.get('favorites/list', params, function (error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});
