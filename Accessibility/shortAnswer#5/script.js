document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.getElementById("myDiv");

    myDiv.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        alert("Enter key pressed!");
        myDiv.click();
      }
    });
  });
  