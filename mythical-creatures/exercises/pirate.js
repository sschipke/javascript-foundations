class Pirate {
     constructor(name,job, cursed,booty){
          this.name = name;
          this.job = job;
          if (this.job === undefined) {
               this.job = 'Scallywag'
          } else {this.job = job};
          this.cursed=false;
          this.heinousCount = 0;
          this.booty = 0;
          }

    

     // Functions
     commitHeinousAct() {
      this.heinousCount++;
       if (this.heinousCount >=3) {
            this.cursed = true;
          }
      }
      robShip() {
        this.booty = 100;
        return 'YAARRR!'
      }

}











module.exports = Pirate