
//יצירת המודל
//Create an image classifier with MobileNet
const RickAndMorty = ml5.imageClassifier("./ai_model/model.json", () => {
  console.log('model loaded');

  //once loaded, get the image
  let img = document.querySelector('#mini_cow');

  //then try to predict
  RickAndMorty.predict(img, (error, result) => {
    if (error)
      console.error('error', error);
    else {
      let p = document.querySelector('#result');
      result.map((res) => {
        p.innerHTML += `${(res.confidence * 100).toFixed(2)}% to be ${res.label}<br>`
      })
    }
  });

});




