module.exports = {
  Admins: ["668818456673779737"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/SchEbTFaNM", //Support Server Link
  Token: process.env.Token || "ODEyOTM5Mzk1ODY2MDM0MjA4.YDICzw.X9Ke-8E5tKXr45js9LDtetMtXjM", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "812939395866034208", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "95B0jnDA3-TGIZLgp0TdEjRHoEyN7yDw", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "ampm.15dec", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
    // Set this to true if you're self-hosting lavalink on replit.
  },


  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7fc38735b1e4410cbdc43cc5278bfd33", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "92c8375bb9eb446ba7c636d39771fbe8", //Spotify Client Secret
  },
};
