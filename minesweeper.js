/*
First part of Codecademy project
const blankLine = '  |   |  ';
console.log("This is what an empty board would look like");
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);
const guessLine = '1 |   |  ';
const bombLine = '  | B |  ';
console.log("This is what a board with a guess and a bomb on it would look like:");
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);

Second part of project

const board = [ 
	[' ', ' ', ' '],
	[' ', ' ', ' '], 
	[' ', ' ', ' ']
];

const printBoard = (board) => {
	console.log("Current Board:");
	console.log(board[0].join(' | '));
	console.log(board[1].join(' | '));
	console.log(board[2].join(' | '));
};

printBoard(board);
board[0][1] = '1';
board[2][1] = 'B';
printBoard(board);*/
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
let board = [];
for (let i = 0; i < numberOfRows; i++) {
	let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(' ');}
		
			board.push(row);}
			return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for (let i = 0; i < numberOfRows; i++) {
			let row = [];
		for (let j = 0; j < numberOfColumns; j++) {
			row.push(null);}
		
			board.push(row);}

			let numberOfBombsPlaced = 0;

			while (numberOfBombsPlaced < numberOfBombs) {
			let randomRowIndex = Math.floor(Math.random() * numberOfRows);
			let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++}//may place bombs on top of existing boms
			return board;
};
/*
const board = [ 
	[' ', ' ', ' '],
	[' ', ' ', ' '], 
	[' ', ' ', ' ']
];
*/
const printBoard = (board) => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3, 4, 5);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);

/*
printBoard(board);
board[0][1] = '1';
board[2][1] = 'B';
printBoard(board);
*/