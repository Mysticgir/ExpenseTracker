let expenses = [];

document.addEventListener("DOMContentLoaded", function() {
    const addExpenseForm = document.getElementById("add-expense-form");
    const expenseList = document.getElementById("expense-list");

    addExpenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = document.getElementById("expense-amount").value;
        const newExpense = { name: expenseName, amount: expenseAmount };
        expenses.push(newExpense);
        addExpenseToList(newExpense);
        addExpenseForm.reset();
    });

    function addExpenseToList(expense) {
        const expenseListItem = document.createElement("li");
        expenseListItem.innerHTML = `<span>${expense.name}</span> - $${expense.amount}`;
        expenseList.appendChild(expenseListItem);
    }
});