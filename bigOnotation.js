/* 
Big-o Notation gives an upper bound of the complexity in the WORST case, 
helping to quantify performance as the input size becomes arbitrarily large

n - The size of the input
Complexities ordered in from the smallest to largest

Constat Time: 0(1)
Logarthmiv Time: 

Only cares about what happens when your input is very big


*/

//Constant time: 0(1)
const constantTime = () => {
  let a = 1;
  let b = 2;
  let c = a + 5 * b;
  console.log(c);

  let i = 0;

  do {
    i = i + 1;
  } while (i < 11);
  console.log(i);
};
constantTime();

//linear time: 0(n)
const linearTime = n => {
  let i = 0;

  do {
    i = i + 1;
  } while (i < n);
  console.log(i);

  do {
    i = i + 3;
  } while (i < n);
  console.log(i / 3);
};
linearTime(20);

const quadraticTime = (n) => {
  for (let i = 0; i < n; i = i + 1) {
    for (let j = 0; j < n; j = j + 1) {}
  }
};
quadraticTime(25);
