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

// Nested
let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
//  Create a variable capFave and assign the captain‘s favorite food 
// (the element in the 0th index of her 'favorite foods' array) to it 
let capFave = spaceship.crew.captain['favorite foods'][0]

// Right now the passengers property has a value of null. Instead, assign as 
// its value an array of objects. These objects should represent the spaceship‘s 
// passengers as individual objects. Make at least one passenger object in the array 
// that has at least one key-value pair on it.
spaceship.passengers = [{name: 'Chin Chunks'}]

// Create a variable firstPassenger and assign the first passenger as its value 
// (the element in the 0th index of the spaceship.passengers array you just made).
let firstPassenger = spaceship.passengers[0]

// Pass by Reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write a function greenEnergy() that has an object as a parameter and sets that 
// object’s 'Fuel Type' property to 'avocado oil'
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
};

// Write a function remotelyDisable() that has an object as a parameter and sets 
// (or reassigns) that object’s disabled property to true
let remotelyDisable = obj => {
  obj.disabled = true
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)