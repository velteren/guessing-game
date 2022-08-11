class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.currentTry = Math.round(this.min + (this.max - this.min)/2);
        console.log("Current Try: " + this.currentTry);
        return(this.currentTry);
    }

    lower() {
        this.max = this.currentTry;
    }

    greater() {
        this.min = this.currentTry;
    }
}

module.exports = GuessingGame;
