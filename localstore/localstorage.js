// Retrieve the student list from local storage
function getStudentList() {
    let studentList = localStorage.getItem('studentList');
    if (studentList) {
      return JSON.parse(studentList);
    }
    return [];
  }
  
  // Save the student list to local storage
  function saveStudentList(studentList) {
    localStorage.setItem('studentList', JSON.stringify(studentList));
  }
  
  // Add a new student to the list
  function addStudent() {
    event.preventDefault();
    
    // Get form values
    let bookName = document.getElementById('BookName').value;
    let authorName = document.getElementById('AuthorName').value;
    let publishYear = document.getElementById('PublishYear').value;
    let rate = document.getElementById('Rate').value;
    let edision = document.getElementById('Edision').value;
  
    // Create a new student object
    let newStudent = {
      bookName: bookName,
      authorName: authorName,
      publishYear: publishYear,
      rate: rate,
      edision: edision
    };
  
    // Get the existing student list from local storage
    let studentList = getStudentList();
  
    // Add the new student to the list
    studentList.push(newStudent);
  
    // Save the updated student list to local storage
    saveStudentList(studentList);
  
    // Refresh the student list on the page
    displayStudentList();
  
    // Reset the form
    document.getElementById('student-form').reset();
  }
  
  // Display the student list on the page
  function displayStudentList() {
    let studentList = getStudentList();
    let studentListElement = document.getElementById('student-list');
  
    // Clear the existing table rows
    studentListElement.innerHTML = '';
  
    // Loop through each student and create table rows
    studentList.forEach(function(student, index) {
      let row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.bookName}</td>
        <td>${student.authorName}</td>
        <td>${student.publishYear}</td>
        <td>${student.rate}</td>
        <td>${student.edision}</td>
        <td>
          <a href="#" class="btn btn-warning btn-sm edit" data-index="${index}">Edit</a>
          <a href="#" class="btn btn-danger btn-sm delete" data-index="${index}">Delete</a>
        </td>
      `;
      studentListElement.appendChild(row);
    });
  
    // Add event listeners to the edit and delete buttons
    let editButtons = document.getElementsByClassName('edit');
    let deleteButtons = document.getElementsByClassName('delete');
  
    for (let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener('click', editStudent);
      deleteButtons[i].addEventListener('click', deleteStudent);
    }
  }
  
  // Edit a student in the list
  function editStudent() {
    event.preventDefault();
  
    // Get the index of the student to edit
    let index = parseInt(event.target.getAttribute('data-index'));
  
    // Get the existing student list from local storage
    let studentList = getStudentList();
  
    // Get the student to edit
    let student = studentList[index];
  
    // Set the form values with the student data
    document.getElementById('BookName').value = student.bookName;
    document.getElementById('AuthorName').value = student.authorName;
    document.getElementById('PublishYear').value = student.publishYear;
    document.getElementById('Rate').value = student.rate;
    document.getElementById('Edision').value = student.edision;
  
    // Remove the student from the list
    studentList.splice(index, 1);
  
    // Save the updated student list to local storage
    saveStudentList(studentList);
  
    // Refresh the student list on the page
    displayStudentList();
  }
  
  // Delete a student from the list
  function deleteStudent() {
    event.preventDefault();
  
    // Get the index of the student to delete
    let index = parseInt(event.target.getAttribute('data-index'));
  
    // Get the existing student list from local storage
    let studentList = getStudentList();
  
    // Remove the student from the list
    studentList.splice(index, 1);
  
    // Save the updated student list to local storage
    saveStudentList(studentList);
  
    // Refresh the student list on the page
    displayStudentList();
  }
  
  // Event listener for form submit
  document.getElementById('student-form').addEventListener('submit', addStudent);
  
  // Initial display of the student list on page load
  displayStudentList();
  