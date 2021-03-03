// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    let data = input.split('\n');
    let testCase = parseInt(data[0]);
    
    for(let i = 1; i <= testCase; i++) {
        let n = parseInt(data[i])
        process.stdout.write(''+n * (n + 1));
    }
}
