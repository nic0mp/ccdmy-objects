// THIS keyword
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo(){return`I am ${this.model} and my current energy level is ${this.energyLevel}. `}
  };
  console.log(robot.provideInfo())
  // OUTPUT: I am 1E78V2 and my current energy level is 100. 
  
  // Arrow functions and this
  
  const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy(); 
  // Avoid arrow functions with this key ^^^
  
  const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();

//   Getters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`
      } else {
        return `System malfunction: cannot retrieve energy level`
      }
    }
  };
  console.log(robot.energyLevel);
//   output My current energy level is 100

// Setters
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
        this._numOfSensors = num
      } else {
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors)
// output: 100

// FUnctions Factory
const robotFactory = (model, mobile) => {
    return{
      model: model,
      mobile: mobile,
      beep(){
        console.log('Beep Boop');
      }
    }
};
  
const tinCan = robotFactory('P-500', true);
tinCan.beep()
// output: Beep Boop
  
// PROPERTY VALUE SHORTHAND

const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };

//   NEW SHORTHAND
const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
    
// DESTRUCTURED ASSIGNMENT
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
const { functionality } = robot;
  
  // call the .beep() method on functionality.
// functionality.beep()

// BUIKT IN OBJECT METHODS
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);