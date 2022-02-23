const team = {
    _players : [
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 30
      },
      {
        firstName: 'Bageera', 
        lastName: 'Evans', 
        age: 31
      },
      {
        firstName: 'Ramon', 
        lastName: 'Goose', 
        age: 33
      },    
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Barcelona BC',
        teamPoints: 99,
        opponentPoints: 103
      }, 
      {
        opponent: 'Real Madris',
        teamPoints: 101,
        opponentPoints: 97
      },  
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    },
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa','Leslie', 44);
  team.addPlayer('Bugs','Bunny', 76);
  console.log(team.players);
  
  team.addGame('Heat', 95, 80);
  team.addGame('Hornets', 99, 96);
  team.addGame('Nets', 91, 87);
  console.log(team.games);