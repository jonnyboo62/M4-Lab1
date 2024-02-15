window.addEventListener('load', function (){

    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    var form = document.getElementById('addForm');
    var employeesTable = document.getElementById('employees');
    var empCount = document.getElementById('empCount');

    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    var count = 0;

    function updateCount() {
        empCount.textContent = count.toString();
    };

    updateCount();

    // ADD EMPLOYEE
    form.addEventListener('submit', (e) => {
        // PREVENT FORM SUBMISSION
        e.preventDefault(); 

        // GET THE VALUES FROM THE TEXT BOXES
        var id = document.getElementById('id').value;
        var name = document.getElementById('name').value;
        var extension = document.getElementById('extension').value;
        var email = document.getElementById('email').value;
        var department = document.getElementById('department').value;

        // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        var newRow = employeesTable.insertRow();

        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        var cellId = newRow.insertCell(0);
        var cellName = newRow.insertCell(1);
        var cellExtension = newRow.insertCell(2);
        var cellEmail = newRow.insertCell(3);
        var cellDepartment = newRow.insertCell(4);

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        cellId.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExtension.appendChild(document.createTextNode(extension));
        cellEmail.appendChild(document.createTextNode(email));
        cellDepartment.appendChild(document.createTextNode(department));

        // CREATE THE DELETE BUTTON
        var deleteCell = newRow.insertCell(5);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteCell.appendChild(deleteButton);
        deleteButton.onclick = function(e) { deleteEmployee(e); };

        // RESET THE FORM
        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX
        document.getElementById('id').focus();

        // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
        count += 1;
        updateCount()

    });

    // DELETE EMPLOYEE
    function deleteEmployee(e) {
        if (confirm("Are you sure you want to delete this employee?")) {
            employeesTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            count -= 1;
            updateCount();
        }
    };

});
