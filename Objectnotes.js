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
  
  // Write your code below
  let isActive = spaceship['Active Mission']
  console.log(spaceship['Active Mission'])