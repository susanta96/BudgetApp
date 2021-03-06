//Classes
class Budget {
  constructor(budget) {
    this.budget = Number(budget);
    this.budgetLeft = this.budget;
  }

  //Subrate from Budget
  substractFromBudget(amount) {
    return this.budgetLeft -= amount;
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

  //Display a Message
  printMessage(message, className) {
    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('text-center', 'alert', className);
    messageWrapper.appendChild(document.createTextNode(message));

    //Insert into HTMl
    document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);


    //Time set 
    setTimeout(() => {
      document.querySelector('.primary .alert').remove();
      addExpenseForm.reset();
    }, 3000);
  }

  //Display the expenses 
  addExpenseTOList(name, amount) {
    const expensesList = document.querySelector('#expenses ul');

    //Create a List
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
          ${name}
          <span class="badge badge-primary badge-pill">₹ ${amount}</span>
      `;

    //Insert into HTMl
    expensesList.appendChild(li);

  }

  //Subtract expenses
  trackBudget(amount) {
    const budgetLeftRupee = budget.substractFromBudget(amount);
    budgetLeft.innerHTML = `${budgetLeftRupee}`;

    //Check when 25% is Left
    if ((budget.budget / 4) > budgetLeftRupee) {
      budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
      budgetLeft.parentElement.parentElement.classList.add('alert-danger');

    } else if ((budget.budget / 2) > budgetLeftRupee) {
      budgetLeft.parentElement.parentElement.classList.remove('alert-success');
      budgetLeft.parentElement.parentElement.classList.add('alert-warning');
    }

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
    if (userBudegt === null || userBudegt === '' || userBudegt === '0' || isNaN(userBudegt)) {
      window.location.reload();
    } else {
      //After Budget is valid then instanciate the budget class
      budget = new Budget(userBudegt);

      // Instenciate HTML Class
      html.insertBudget(budget.budget);

    }
  });

  //when a new expense added
  addExpenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //Read the values from the form 
    const expenseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;

    if (expenseName === '' || amount === '') {
      html.printMessage('Error! all the fields are mandatory', 'alert-danger');
    } else {
      //Add the expenses into the list
      html.addExpenseTOList(expenseName, amount);
      html.trackBudget(amount);
      html.printMessage('Added...', 'alert-success');
    }

  });
}



//Just to solve input amount in Numbers 
function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
    key = event.clipboardData.getData('text/plain');

  } else {
    // Handle key press
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
  }
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}
//getData('text/plain');