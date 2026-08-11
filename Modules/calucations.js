const marks = require("./Marks.js");

const cal = () => {
    const sum = marks(34, 78, 90);

    const values = Object.values(sum);

    let total = 0;

    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    const final=total
    const avg=final/2
    return {final,avg};
    
};

module.exports = cal;