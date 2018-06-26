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
      //addExpenseForm.reset();
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
    //Read the values from the form 
    const expenseName = document.querySelector('#expense').value;
    const amount = document.querySelector('#amount').value;

    if (expenseName === '' || amount === '') {
      html.printMessage('Error! all the fields are mandatory', 'alert-danger');
    } else {
      //Add the expenses into the list
      html.addExpenseTOList(expenseName, amount);
    }

  });
}