
// write a program that makes a pyramid of hashes
for (let i = 0; i < 7; i++) {
  let p = " ";

  for (let j = 0; j <= i; j++) {

    if (i >= 0){
      p = p + "#";
    }
  }
  console.log(p)
}