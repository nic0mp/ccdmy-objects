const team = {
    _players : [
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 30
        firstName: 'Bageera', 
        lastName: 'Evans', 
        age: 31
        firstName: 'Ramon', 
        lastName: 'Goose', 
        age: 33
    ],
    _games : [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
        opponent: 'Barcelona BC',
        teamPoints: 99,
        opponentPoints: 103
        opponent: 'Real Madris',
        teamPoints: 101,
        opponentPoints: 97
      }
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
      this.players.push(player)
    }
  };
  team.addPlayer(Steph, Curry Age, 28);
  console.log(team.players)