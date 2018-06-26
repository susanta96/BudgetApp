//Classes
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetLeft = this.budget;
  }
}

//Related to HTML
class HTML {

  //Insert the budget when the users submits the prompt
  insertBudget(amount) {

    //Insert into HTML
    budgetTotal.innerHTML = `${amount}`;
    budgetLeft.innerHTML = `${amount}`;
  }

}



//Variables
const addExpenseForm = document.querySelector('#add-expense'),
  budgetTotal = document.querySelector('span#total'),
  budgetLeft = document.querySelector('span#left');

let userBudegt, budget;
//Instanciate the HTML Class
const html = new HTML();



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
      //After Budget is valid then instanciate the budget class
      budget = new Budget(userBudegt);

      // Instenciate HTML Class
      html.insertBudget(budget.budget);

    }
  });

  //when a new expense added
  addExpenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
  });
}