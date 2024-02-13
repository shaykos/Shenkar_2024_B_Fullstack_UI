//הצרה על המוח
declare const brain: any;

//ייבוא נתוני בסיס
import { games } from './data/games';

//נרמול נתוני בסיס
let trainingData = games.map(game => {
  return {
    input:
    {
      home: Number(game.home.replace('team', '')),
      away: Number(game.away.replace('team', ''))
    },
    output: {
      win: game.win == 'none' ? 0.5 : game.win == game.home ? 0 : 1
    } // 0 home wins, 0.5 none, 1 away wins
  }
});

console.log('trainingData', trainingData);

//יצירת מכונה
let net = new brain.NeuralNetwork({
  hiddenLayers: [4, 4, 4],
  inputSize: 2,
  outputSize: 1
});

//יצירת הגדרות לאימון המכונה
let options = {
  iterations: 1000,
  errorTresh: 0.004,
  logPeriod: 100,
  log: (stats: any) => console.log('stats', stats)
}

//אימון המכונה
net.train(trainingData, options);

//הצגת המכונה
let div = document.querySelector('#app') as HTMLDivElement;
div.innerHTML = brain.utilities.toSVG(net);

//השערה לפני לימוד חוזר
let prediction = net.run({ home: 1, away: 3 });
console.log('prediction', prediction);

//לימוד חוזר
trainingData.push({ input: { home: 1, away: 3 }, output: { win: 1 } });
net.train(trainingData, options);

//השערה אחרי לימוד חוזר
prediction = net.run({ home: 1, away: 3 });
console.log('prediction', prediction);