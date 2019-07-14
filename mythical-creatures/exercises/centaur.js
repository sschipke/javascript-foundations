class Centaur {
     constructor(name, breed){
          this.name = name,
          this.breed = breed,
          this.cranky = false,
          this.standing = true,
          this.layingDown = false,
          this.crankyCounter = 0
     }
     shoot() {
          this.crankyCounter++;
          if (this.crankyCounter >= 3 || this.layingDown) {
               this.cranky = true;
               return "NO!"
          }
          else {
               return 'Twang!!!'
          }
     }
     run() {
          this.crankyCounter++;
          if (this.crankyCounter >= 3 || this.layingDown){
               this.cranky = true;
               return "NO!"
          }
          else {
               return 'Clop clop clop clop!!!'
          }
     }
     sleep(){
          if(this.standing == true){
               return 'NO!'
          } else {
               this.cranky = false;
               this.crankyCounter = 0;
               return 'ZZZZ'}
     }
     layDown() {
               this.standing = false;
               this.layingDown = true;
     }
     standUp() {
               this.standing = true;
               this.layingDown = false;
     }
     drinkPotion() {
          if (!this.standing) {
               return 'Not while I\'m laying down!'
          } else if(!this.cranky){this.cranky = true;}
          else {this.cranky = false}
     }

}
module.exports = Centaur