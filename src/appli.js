/* eslint-disable no-plusplus */
// input  : My Name Is Divesh Keswani
// output : yM emaN si

const sampleInput = String('My Name Is Divesh Keswani');
const wordArr = sampleInput.split(' ');

let output = '';
for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  for (let j = word.length - 1; j >= 0; j--) {
    output += word.charAt(j);
  }
  output += ' ';
}

console.log(output);
