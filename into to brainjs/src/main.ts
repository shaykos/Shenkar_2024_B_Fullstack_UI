//cdn הצהרה על משתנה גלובלי שנלקח מה 
declare const brain: any;

//יצירת של רשת הנוירונים
let net = new brain.NeuralNetwork();

//הכנסת הנתונים
//1 - play / win
//0 - no play / lose
let data = [
  { input: { team1: 1, team2: 1 }, output: { team1: 1, team2: 0 } }, // team 1 wins 
  { input: { team1: 1, team3: 1 }, output: { team1: 0, team3: 1 } } // team 3 wins

]

//אימון המכונה
net.train(data);

//נפעיל את המכונה
let output = net.run({team2:1, team3:1});
console.log('output', output)

//ציור מבנה המוח
let div = document.querySelector("#app") as HTMLDivElement;

//ציור המכונה
div.innerHTML = brain.utilities.toSVG(net);