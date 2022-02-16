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

  