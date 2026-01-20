function getMessage() {
  fetch("http://localhost:5000/api/message")
    .then(response => response.json())
    .then(data => {
      document.getElementById("result").innerText = data.message;
    })
    .catch(error => {
      console.error("Error:", error);
    });
}
