// Node dependency importing and setup!
require('dotenv').config();

// Can't destructure off of process.env because it's not iterable. :(
const username        = process.env.TWITTER_USERNAME;
const consumerKey     = process.env.TWITTER_API_KEY;
const consumerSecret  = process.env.TWITTER_API_SECRET;
const accessToken     = process.env.TWITTER_ACCESS_TOKEN;
const accessSecret    = process.env.TWITTER_ACCESS_SECRET;

// Bring in the bot and start it!
import Snoozy from './bot';
Snoozy.start({ username, consumerKey, consumerSecret, accessToken, accessSecret });
