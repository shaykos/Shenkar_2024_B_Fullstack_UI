import { CheckVowels, ToBinary } from "./functions";
import Person from "./models/person";
import Student from "./models/student";

/**
 * 
 */
let q1_btn = document.querySelector('#v_check');
q1_btn?.addEventListener('click', () => {
  let q1_text = document.querySelector('#text') as HTMLInputElement;
  let res = CheckVowels(q1_text?.value);
  alert(res);
});



document.querySelector<HTMLButtonElement>('#btn_convert')?.addEventListener('click', () => {
  let num = Math.floor(Math.random() * 100) + 1; //Math.floor(Math.random() * (max - min + 1)) + min;
  let p = document.querySelector('#binary_res') as HTMLParagraphElement;
  p.innerHTML = ToBinary(num);
});

// let p = new Person('Moshe', 24);
// p.startCooking('pasta');
// p.eat('pasta');
// p.sleep(8);

let persons = new Array<Person>();
persons.push(new Person('Moshe', 24));
persons.push(new Person('Yagel', 28));
persons.push(new Student('Liat', 25, [45, 67, 90, 78, 56]));


for (let i = 0; i < persons.length; i++) {
    persons[i].startCooking('pasta');
    persons[i].eat('pasta');
    persons[i].sleep(8);
    if(i === 2){
        console.log((persons[i] as Student).getAvg());
        
    }
}
