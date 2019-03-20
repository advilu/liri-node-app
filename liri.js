let dotenv = require("dotenv").config();

var keys = require("./keys.js");

// 9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`

let axios = require("axios");
let arguments = process.argv;

let input = process.argv[3];
// title = title.toLowerCase()

let movieThis = function(input){
if (process.argv[2] == "movie-this"){
axios.get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy").then(
    function(response, err) {
      let results = JSON.stringify(response.data);
      console.log("The movie's information is: " + results);
    })
  }
};

let concertThis = function(input){
if (process.argv[2] == "concert-this"){
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
    function(response, err){
      console.log(response.id);
    })
  }
};

let doWhatItSays = function(){
  false.readFile("random.txt", "utf8", function(err, result, data){
    if(err){
      console.log("Error alert")
    }
    else{
      movieThis(result);
    }
  })
};


let spotifyThisSong = function(userInput){

  const Spotify = require("node-spotify-api");
  //console.log(keys.SPOTIFY_KEY);
  const spotify = new Spotify(keys.SPOTIFY_KEY);

  spotify.search({type: 'track', query: userInput}, function(err, response) {
    if (err) {
      return console.log(`Error present: ${err}`);
    }

    console.log(`Song: ${response.tracks.items[0].name}`);
    console.log(`Album: ${response.tracks.items[0].album.name}`);
    console.log( `Artist: ${response.tracks.items[0].artists[0].name}`);
    console.log(`Preview: ${response.tracks.items[0].preview_url}`);

    if (!userInput) {
      userInput = "Honey Hold Me";
    }
  }
  );

};