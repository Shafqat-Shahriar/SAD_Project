function addSalary() {
    const title = document.querySelector('.input-grid input:nth-child(1)').value;
    const amount = document.querySelector('.input-grid input:nth-child(2)').value;
    const date = document.querySelector('.input-grid input[type="date"]').value;
    const option = document.querySelector('.input-grid select').value;
    const description = document.querySelector('.input-grid textarea').value;

    const rightContent = document.getElementById('salaryList');
    
    // Create a new salary box
    const salaryBox = document.createElement('div');
    salaryBox.className = 'salary-box';
    
    // Display information inside the box
    salaryBox.innerHTML = `
        <p><strong>Title:</strong> ${title}</p>
        <p><strong>Amount:</strong> ${amount}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Option:</strong> ${option}</p>
        <p><strong>Description:</strong> ${description}</p>
        <span class="delete-button" onclick="deleteSalary(this)">Delete</span>
    `;

    // Append the salary box to the right content
    rightContent.appendChild(salaryBox);
}

function deleteSalary(element) {
    // Remove the parent salary box when delete button is clicked
    element.parentNode.remove();
}
