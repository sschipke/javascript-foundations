class Sphinx {
  constructor(name){
    this.name = null,
    this.riddles = []
  }
  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles[3]){
      this.riddles.shift()
    }
  }
  attemptAnswer(answer){
  }
}
module.exports = Sphinx