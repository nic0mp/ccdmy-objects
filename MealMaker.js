const menu ={
    _courses: { 
      appetizers : [],
      mains : [],
      desserts : [],
    },
    get _courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    get appetizers(){
  
    },
    set appetizers(appetizersIn){
  
    },
    get mains(){
  
    },
    set mains(mainsIn){
  
    },
    get desserts(){
  
    },
    set desserts(dessertsIn){
  
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random*dishes.length);
        return dishes[randomIndex];
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers'),

    }
    
  };