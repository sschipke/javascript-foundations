class Dragon {
  constructor(name,rider,color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.eaten = 0
    
  }
  // functions
  eat() {
    this.eaten++;
    if (this.eaten >= 3) {this.hungry = false} else {this.hungry = true}
  }
}






module.exports = Dragon;