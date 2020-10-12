/*

Arrays in JavaScript
This is another Line I am adding here to push into remote directory
another new line for
*/

const A1 = []; //Blank Array

const A2 = [2, 13];

console.log(A2.length);
console.log(A2[0]);


A2.push(25, 24);
console.log(A2);

//addding elements in front of the Array. 

A2.unshift(0, 100);

console.log(A2);

//adding elements in between the Array

A2.splice(3, 0, 100000, 13);

console.log(A2);
//print all elements in an array

array1 = new Array();
array1.length = 10;
array1[2] = 'Banana';
array1[5] = 'Mango';
array1[8] = 'Kiwi';
console.log(array1);



//Creating a two-dimensional array


let board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));