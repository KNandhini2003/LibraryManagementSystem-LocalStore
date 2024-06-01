// Add a new student to the list and store it in local storage
function addStudent(event) {
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
    let studentList = localStorage.getItem('studentList');
    if (studentList) {
      studentList = JSON.parse(studentList);
    } else {
      studentList = [];
    }
  
    // Add the new student to the list
    studentList.push(newStudent);
  
    // Save the updated student list to local storage
    localStorage.setItem('studentList', JSON.stringify(studentList));
  
    // Redirect to studentList.html
    window.location.href = 'studentList.html';
  }
  
  // Event listener for form submit
  document.getElementById('student-form').addEventListener('submit', addStudent);
  