export function giveCompliment(name) {
  const compliments = [
    'great',
    'awesome',
    'lovely',
    'exciting',
    'groovy',
    'exciting',
    'cool',
    'excellent',
    'smart',
    'nice',
  ];
  const compliment =
    compliments[Math.floor(Math.random() * compliments.length)];
  return `You are ${compliment}, ${name}!`;
}

function main() {
  const myName = 'HackYourFuture';

  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));
  console.log(giveCompliment(myName));

  const yourName = 'Amsterdam';

  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
  console.log(giveCompliment(yourName));
}

// ! Do not change or remove the code below
// #region Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
