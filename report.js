class Report {
  constructor() {
    this.green = 0
    this.amber = 0
    this.red = 0
    this.lcScore
  }
  countScores(scores) {
    scores.split(',').forEach(score => {
      this.lcScore = score.toLowerCase()
      if (this.lcScore === 'green') {
        this.green++
      } else if (this.lcScore === 'amber') {
        this.amber++
      } else if (this.lcScore === 'red') {
        this.red++
      }
    })
  }

  printScores() {
    console.log(`Green: ${this.green}\nAmber: ${this.amber}\nRed: ${this.red}`)
  }
}

// report = new Report()
// report.countScores('green,green,red,amber,red')
// report.printScores()