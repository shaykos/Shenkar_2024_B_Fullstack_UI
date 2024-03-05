//הצהרה על המשתנה הגלובלי מתוך הספריה

import { ml5Result } from "./types/ml5Result";

//1) declare the global var ml5 from the library
declare const ml5: any;

//יצירת המודל
//2) Create an image classifier with MobileNet
const classifier = ml5.imageClassifier("MobileNet", () => {
  console.log('model loaded');
});

const RickAndMorty = ml5.imageClassifier("MobileNet", () => {
  console.log('model loaded');
});

//בחירת תמונה
//3) create or select an image
let img = document.querySelector('#mini_cow');

//הדפסת התשובה
//4) prediction
classifier.predict(img, (error: any, result: ml5Result[]) => {
  if (error)
    console.error('error', error);
  else {
    let p = document.querySelector('#result') as HTMLParagraphElement;
    result.map((res: ml5Result) => {
      p.innerHTML += `${(res.confidence * 100).toFixed(2)}% to be ${res.label}<br>`
    })

  }
});


