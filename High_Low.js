process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const parrentsNum = lines[0].split(" "); // [5, 1]
    const parrentsNum1 = Number(parrentsNum[0]);
    const parrentsNum2 = Number(parrentsNum[1]);
    const loop = lines[1]; // 2
    
    for(let i = 0; i < loop; i++){
        var childNum = lines[i+2].split(" ");
        var childNum1 = Number(childNum[0]);
        var childNum2 = Number(childNum[1]);
        if(childNum1 > parrentsNum1) {
            console.log("Low")
        } else if(parrentsNum1 === childNum1) {
            if(childNum2 < parrentsNum2) {
                console.log("Low")
            }else {
                console.log("High")
            }
        } else if(parrentsNum1 > childNum1){
            console.log("High")
        }
    }
});
