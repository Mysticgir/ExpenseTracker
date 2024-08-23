
const form = document.getElementById("add-expense-form");
const list = document.getElementById("expense-list");
const totalExpensesElement = document.getElementById("total-expenses");


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


form.addEventListener("submit", function(event) {
  event.preventDefault();
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;
  const date = document.getElementById("date").value;
  const newExpense = { amount, category, date };
  expenses.push(newExpense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  addExpenseToList(newExpense);
  form.reset();
  updateTotalExpenses();
});


function addExpenseToList(expense) {
  const listItem = document.createElement("li");
  listItem.textContent = `${expense.category} - ${expense.date} - $${expense.amount}`;
  list.appendChild(listItem);
}


function updateTotalExpenses() {
  const totalAmount = expenses.reduce((acc, current) => acc + parseFloat(current.amount), 0);
  const totalExpensesText = `Total Expenses: ${expenses.length} - Total Amount: $${totalAmount.toFixed(2)}`;
  totalExpensesElement.textContent = totalExpensesText;
}


expenses.forEach(addExpenseToList);
updateTotalExpenses();

