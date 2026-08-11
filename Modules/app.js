const data = require("./Students.js");
const marks = require("./Marks.js");
const totalMarks=require("./calucations.js")
console.log("studentsDetails:", data("tarunsai", 12, "nodejs"));
console.log("marks:", marks(34, 78, 90));
console.log("total:",totalMarks())
