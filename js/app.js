//Classes






//Variables
const addExpenseForm = document.querySelector('#add-expense');

let userBudegt, budget;




//Event Listeners
eventListeners();
function eventListeners() {

  document.addEventListener('DOMContentLoaded', function () {
    //Ask the weekly budget 
    userBudegt = prompt('Whats\s your budget for this week?');
    //validate the user budget
    if (userBudegt === null || userBudegt === '' || userBudegt === '0') {
      window.location.reload();
    }
    else {

    }
  });

  //when a new expense added
  addExpenseForm.eventListeners('submit', function (e) {
    e.preventDefault();
  });
}