let random = Math.floor(Math.random() * 101);;
let max = 100;
let min = 1;
let number = Number(prompt('Guess the number between 1 and 100.'));
while(number != random)    {
    if(number > max || number < min)    {
        alert('The secret number is ' + random);
        break;
    }
    if(number <= random) {
        min = number;
        number = prompt('Guess the number between' + min + 'and' + max);
    }
    else if(number >= random) {
        max = number;
        number = prompt('Guess the number between' + min + 'and' + max);
    }
}
alert('Matched! You win.')