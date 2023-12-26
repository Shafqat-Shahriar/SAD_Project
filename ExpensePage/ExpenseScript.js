function addExpense() {
    const title = document.querySelector('.input-grid input:nth-child(1)').value;
    const amount = document.querySelector('.input-grid input:nth-child(2)').value;
    const date = document.querySelector('.input-grid input[type="date"]').value;
    const option = document.querySelector('.input-grid select').value;
    const description = document.querySelector('.input-grid textarea').value;

    const rightContent = document.getElementById('expenseList');
    
    // Create a new expense box
    const expenseBox = document.createElement('div');
    expenseBox.className = 'expense-box';
    
    // Display information inside the box
    expenseBox.innerHTML = `
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Option:</strong> ${option}</p>
        <p><strong>Description:</strong> ${description}</p>
        <span class="delete-button" onclick="deleteExpense(this)">Delete</span>
    `;

    // Append the expense box to the right content
    rightContent.appendChild(expenseBox);
}

function deleteExpense(element) {
    // Remove the parent expense box when delete button is clicked
    element.parentNode.remove();
}
