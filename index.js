function addingEventListener() {
    const myButton = document.getElementById('button');
    if (myButton) {
      myButton.addEventListener('click', function() {
        console.log('Button was clicked!');
      });
    }
  }
  
  // Ensure that addingEventListener gets called when the document is fully loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    addingEventListener();
  });
  