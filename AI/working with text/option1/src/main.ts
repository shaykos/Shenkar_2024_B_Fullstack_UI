import { data } from './data';

declare const brain: any;

let net = new brain.recurrent.LSTM({
  hiddenLayers: [4],
  inputSize: 1,
  outputSize: 1
});

//לבצע שינויים על הדאטה

net.train(data, {
  iterations: 5000,
  errorThresh: 0.005,
  // logPeriod: 100,
  // log: (stats: any) => console.log(stats)
});

let json = net.toJSON();
console.log('json', json)

const decision = net.run("problem");

// Display predictions
console.log('problem ->', decision);

//נצייר את מבנה הרשת
(document.querySelector('#app') as HTMLDivElement).innerHTML = brain.utilities.toSVG(net);

