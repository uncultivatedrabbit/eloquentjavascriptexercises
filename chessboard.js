/* Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a '#' character. The characters should form a chessboard. */

for (let i = 0; i < 8; i++){
  row1 = " # # # #";
  row2 = "# # # # ";

  if (i % 2 == 0){
    console.log(row1)
  } else{
    console.log(row2)
  }
}


