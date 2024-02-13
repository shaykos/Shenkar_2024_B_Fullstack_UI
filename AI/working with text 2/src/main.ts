
declare const brain: any;

//ייבוא הדאטה
import { space } from './data/space';

//סידור הדאטה
//1. יצירת מערך של משפטים
let trainingData: string[] = space.split('. ');
//2. מחיקת תווים מיוחדים ורווחים מהקצוות
trainingData = trainingData.map((sentence) => sentence.replace('\n', '').trim());
console.log('trainingData', trainingData);

//ליצור את המכונה
let net = new brain.recurrent.LSTM({
    hiddenLayers: [4,8,8]
});

//לאמן את המכונה
net.train(trainingData, {
    iterations: 1000,
    errorTresh: 0.011,
    logPeriod: 100,
    log: (stats: any) => console.log('stats', stats)
});

//נציג את הרשת
let div = document.querySelector('#app') as HTMLDivElement;
div.innerHTML = brain.utilities.toSVG(net);

//לבדוק
console.log(net.run('the sun'));
