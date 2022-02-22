const menu ={
    _courses: { 
      appetizers : [],
      mains : [],
      desserts : [],
    },
   
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizersIn){
      this._courses.appetizers = appetizersIn;
    }, 
    set mains(mainsIn){
      this._courses.main = mainsIn;
    },
    set desserts(dessertsIn){
      this._courses.desserts = dessertsIn;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
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
      const randomIndex = Math.floor(Math.random()*dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
       return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'stuffed mushrooms', 12.00)
  menu.addDishToCourse('appetizers', 'chicken satay', 7.70)
  menu.addDishToCourse('appetizers', 'salad', 5.50)
  menu.addDishToCourse('mains','Steak', 20.13);
  menu.addDishToCourse('mains','Quesadilla', 12.90);
  menu.addDishToCourse('mains','Cheeseburger', 10.90);
  menu.addDishToCourse('desserts','cake',6.20);
  menu.addDishToCourse('desserts','brownies',6.50);
  menu.addDishToCourse('desserts','ice cream',6.90);
  
  let meal =menu.generateRandomMeal();
  console.log(meal);
  