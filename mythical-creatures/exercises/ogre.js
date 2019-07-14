class Ogre {
     constructor(name, home = 'Swamp'){
          this.name = name,
          this.home = home,
          this.swings = 0
     }
     encounter(human) {
       human.encounterCounter++;
          if (human.encounterCounter > 0 && human.encounterCounter % 3 === 0) {
               this.swingAt();
          }
          if (this.swings % 2 === 0) {human.knockedOut = true}
     }
     swingAt(human){
          this.swings++
     }
     apologize(human){
          human.knockedOut = false;
     }
}

module.exports = Ogre