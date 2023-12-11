// let digit = localStorage.getItem('digit');
let digit = '';

const calcButtons = document.querySelectorAll('.js-cal-button');
calcButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator(button.innerHTML);
  });
});

function calculator(number) {
  if (number === 'AC') {
    document.getElementById("result").innerHTML = (digit = '');
    // localStorage.removeItem('digit');
  } else if (number === 'C') {
    document.getElementById("result").innerHTML = (digit = digit.slice(0, -1));
  } else if (number === '=') {
    document.getElementById("result").innerHTML = " " + (digit = eval(digit));
    // localStorage.setItem('digit', digit);
  } else {
    document.getElementById("result").innerHTML = (digit += number);
  }

  // localStorage.setItem('digit', digit);
};


// document.body.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     document.getElementById("result").innerHTML = " " + (digit = eval(digit));
//   }
// });