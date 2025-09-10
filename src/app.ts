import { NumberSeries, type BaseOp } from "./numberSeries.js";
import { NumberSeries2 } from "./numberSeries2.js";

//Statikus metódusok (osztályhoz tartozóak):
NumberSeries.help();
console.log(NumberSeries.rand(8));

//Példányosítás:
const n=new NumberSeries(30, 8)

console.log(n.run("print"));
console.log(n.getValues);
n.setValues=[100,100,100,100,1,2,3]
console.log(n.run("print"));

console.log("*******************************************************");
const s=new NumberSeries2(10,10)
console.log(s.run("print"));
//console.log(s.div())
console.log(s.run("mode"));