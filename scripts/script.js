/*JAVASCRIPT files called on by all pages.
    this contains the array of movies and tv shows the company has
    variables connected to various html elements
    event listeners to react to clicks for these elements
    function to execute code when these clicks occur */

//ALL VARIABLES FOR RANDOM RECOMMDATION FEATURE

//Array containing the companies collection of movies
const movies = [
  "Avenger's Endgame",
  "Man of Steel",
  "Justice League",
  "Captain America",
  "Team America",
  "Gremlins",
  "America: The Motion Picture"
];

//Array containing the companies collection of tv shows
const tvShows = [
  "It's Always Sunny In Philadelphia",
  "Scrubs",
  "How I Met Your Mother",
  "Archer",
  "Flash",
  "Paradise PD",
  "Teenage Mutant Ninja Turtles"
];

//variable connected to the random recommend option on the navbar
const recommendRequest = document.querySelector("#recommend");

//var connected to the empty reveal element underneath the navbar
const recommendReveal = document.querySelector("#recommendationReveal");

//ALL ADDED EVENT LISTENERS

//added click event for random recommend element. executes recommendation function
recommendRequest.addEventListener("click", recommendation);

//ALL FUNCTIONS FOR THE WEBSITE RESPONSIVE FEATURES
//function which is run when user requests a random recommendation via the navbar.
function recommendation() {
  // a 'coin flip' used to determine if its a movie or show that is recommended
  let coinFlip = Math.floor(Math.random() * 2);

  // a random number generator to decide which movie or show is recommended
  //written this way so updating the list of shows or movies won't stop the
  //function working
  let randomMoviePick = Math.floor(Math.random() * movies.length);
  let randomShowPick = Math.floor(Math.random() * tvShows.length);

  //IF statement that is checking if coin flip is 0 for movie or 1 for shows.
  //fills in the empty element underneath navbar with the recommendation.
  if (coinFlip === 0) {
    recommendReveal.textContent = `${movies[randomMoviePick]} is a great movie!`;
  } else {
    recommendReveal.textContent = `${tvShows[randomShowPick]} is a great show!`;
  }
}
