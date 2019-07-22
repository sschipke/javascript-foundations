class Sphinx {
  constructor(){
    this.riddles = [];
    // this.riddle = {};
    this.heroesEaten = 0;
    this.badAnswers = 0;
  }
  collectRiddle(riddle){
    this.riddles.push(riddle);
    if(this.riddles[3]){
      this.riddles.shift()
    }
  }
  attemptAnswer(guess){
    var correctAnswer = this.riddles.find(function(object){
      return object.answer === guess;
    });
    if (correctAnswer === undefined) {
      this.heroesEaten++;
      return;
      }
    var ansIndex = this.riddles.indexOf(correctAnswer);
    this.riddles.splice(ansIndex, 1)
    if (this.riddles.length === 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${guess}"???`
    }
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
  }
}
module.exports = Sphinx