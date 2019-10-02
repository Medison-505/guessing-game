class GuessingGame {

    constructor() {
        this.minPoint = 0;
        this.maxPoint = 0;
        this.lastCandidate = 0;
    }

    setRange(min, max) {
        this.minPoint = min;
        this.maxPoint = max;
    }

    guess() {
        let candidate = Math.ceil((this.maxPoint + this.minPoint)/2);
        this.lastCandidate = candidate;
        return candidate;
    }

    lower() {
        this.setRange(this.minPoint, this.lastCandidate);
    }

    greater() {
        this.setRange(this.lastCandidate, this.maxPoint);
    }
}

module.exports = GuessingGame;
