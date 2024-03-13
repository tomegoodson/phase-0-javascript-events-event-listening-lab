function addingEventListener() {
    const myButton = document.getElementById('button');
    if (myButton) {
      myButton.addEventListener('click', function() {
        console.log('Button was clicked!');
      });
    }
  }
  document.addEventListener('DOMContentLoaded', (event) => {
    addingEventListener();
  });
  