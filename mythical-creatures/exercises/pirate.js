class Pirate {
     constructor(name,job = 'Scallywag', cursed,booty){
          this.name = name;
          this.job = job;
          this.cursed=false;
          this.heinousCount = 0;
          this.booty = 0;
          }
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