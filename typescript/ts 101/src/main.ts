/*
interface
type
*/

import Employee from "./models/employee";
import Manager from "./models/manager";

let itzik = new Employee(1, "אוציק");
let tali = new Employee(2, "טלי", new Date(2024, 2, 14, 10, 0), new Date(2024, 2, 14, 20, 0));
console.log('itzik', itzik);
itzik.changeName("איציק");
console.log('itzik', itzik);
console.log('tali', tali.calcWordHours());

let yasmin = new Manager(3, "Yasmin");
console.log('yasmin', yasmin);
yasmin.addEmployee(itzik);
console.log('yasmin', yasmin);
yasmin.addEmployee(itzik);
console.log('yasmin', yasmin);
yasmin.addEmployee(tali);
console.log('yasmin', yasmin);