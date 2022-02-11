// Object Literals
const fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
  };

//   Dot Notation
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  
  const crewCount = spaceship.numCrew;
  const planetArray = spaceship.flightPath;

// Bracket notation
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
// Invoke
  let isActive = spaceship['Active Mission']
  console.log(spaceship['Active Mission'])

//   Property Assignment
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
// Reassign the color property of the spaceship object to have a value of 'glorious gold'
spaceship.color = 'glorious gold';
//  add a numEngines property with a numeric value between 1 and 10 to the spaceship object. 
spaceship.numEngines = 7;
// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];

// METHODS
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
// create an alienShip object. It should contain a method 
// .retreat() which will console.log() the retreatMessage.
let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
// Invoke your two methods: first .retreat() then .takeOff().
alienShip.retreat();
alienShip.takeOff();